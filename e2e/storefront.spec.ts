import { test, expect } from "@playwright/test";

// ─────────────────────────────────────────────────────────────────────────────
// Homepage
// ─────────────────────────────────────────────────────────────────────────────
test.describe("Homepage", () => {
  test("loads and shows the hero section", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/workshift/i);
    // Hero headline should be visible
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("shows the product grid", async ({ page }) => {
    await page.goto("/");
    // At least one buy/get CTA is on the page
    const buyLinks = page.getByRole("link", { name: /get|buy|toolkit/i });
    await expect(buyLinks.first()).toBeVisible();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Toolkits listing
// ─────────────────────────────────────────────────────────────────────────────
test.describe("Toolkits page", () => {
  test("renders the toolkits page", async ({ page }) => {
    await page.goto("/toolkits");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("each toolkit card links to its detail page", async ({ page }) => {
    await page.goto("/toolkits");
    const firstCard = page.getByRole("link", { name: /toolkit/i }).first();
    await expect(firstCard).toBeVisible();
    const href = await firstCard.getAttribute("href");
    expect(href).toMatch(/\/toolkits\//);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Toolkit detail + checkout redirect
// ─────────────────────────────────────────────────────────────────────────────
test.describe("Toolkit detail page", () => {
  test("renders a toolkit detail page", async ({ page }) => {
    await page.goto("/toolkits/real-estate-toolkit");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("buy button points to the checkout API", async ({ page }) => {
    await page.goto("/toolkits/real-estate-toolkit");
    // Find any link that goes to /api/checkout
    const buyLink = page.getByRole("link", { name: /buy|get|purchase/i }).first();
    await expect(buyLink).toBeVisible();
    const href = await buyLink.getAttribute("href");
    expect(href).toMatch(/\/api\/checkout\?product=/);
  });

  test("checkout API redirects to Stripe for a valid product", async ({ page }) => {
    // Intercept Stripe navigation so we don't leave the site in test
    await page.route("https://checkout.stripe.com/**", (route) => route.abort());

    let stripeRedirected = false;
    page.on("request", (req) => {
      if (req.url().startsWith("https://checkout.stripe.com")) {
        stripeRedirected = true;
      }
    });

    // Navigate directly to the checkout API — it should redirect to Stripe
    // We catch the navigation error since we aborted the Stripe request
    await page.goto("/api/checkout?product=real-estate-toolkit", {
      waitUntil: "commit",
    }).catch(() => {});

    expect(stripeRedirected).toBe(true);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Course page
// ─────────────────────────────────────────────────────────────────────────────
test.describe("Course page", () => {
  test("renders the course landing page", async ({ page }) => {
    await page.goto("/course");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("has a CTA that links to checkout for the course", async ({ page }) => {
    await page.goto("/course");
    const buyLink = page.getByRole("link", { name: /enroll|buy|get/i }).first();
    await expect(buyLink).toBeVisible();
    const href = await buyLink.getAttribute("href");
    expect(href).toMatch(/checkout.*course|course.*checkout/i);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Blog
// ─────────────────────────────────────────────────────────────────────────────
test.describe("Blog", () => {
  test("renders the blog listing page", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    // Should show at least one article link
    const articles = page.getByRole("link").filter({ hasText: /.{10,}/ });
    await expect(articles.first()).toBeVisible();
  });

  test("navigates to an individual blog post", async ({ page }) => {
    await page.goto("/blog");
    const firstPost = page.getByRole("link", { name: /.{10,}/ }).first();
    const href = await firstPost.getAttribute("href");
    if (href?.startsWith("/blog/")) {
      await page.goto(href);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Bundle / waitlist
// ─────────────────────────────────────────────────────────────────────────────
test.describe("Bundle waitlist", () => {
  test("renders the bundle page", async ({ page }) => {
    await page.goto("/bundle");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("waitlist form submits and shows success state", async ({ page }) => {
    // Intercept Resend so we don't send real emails
    await page.route("https://api.resend.com/**", (route) =>
      route.fulfill({ status: 200, body: JSON.stringify({ id: "test-id" }) })
    );

    await page.goto("/bundle");
    const emailInput = page.getByRole("textbox", { name: /email/i });
    await emailInput.fill("test@example.com");
    await emailInput.press("Enter");

    // Should redirect to /bundle?success=1
    await expect(page).toHaveURL(/success=1/);
  });

  test("shows error state for invalid email", async ({ page }) => {
    await page.goto("/bundle");
    const emailInput = page.getByRole("textbox", { name: /email/i });
    await emailInput.fill("notanemail");
    await emailInput.press("Enter");
    await expect(page).toHaveURL(/error=/);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Thank-you page
// ─────────────────────────────────────────────────────────────────────────────
test.describe("Thank-you page", () => {
  test("renders the thank-you page", async ({ page }) => {
    await page.goto("/thank-you");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
