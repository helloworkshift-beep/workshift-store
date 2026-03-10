import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Terms of Service — Workshift" };

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" subtitle="Last updated: March 2026">

      <section>
        <h2>1. About these terms</h2>
        <p>
          These Terms of Service govern your purchase and use of digital products sold by Jan S (Workshift),
          operating at helloworkshift@gmail.com (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
          By purchasing a product, you agree to these terms.
        </p>
      </section>

      <section>
        <h2>2. Products</h2>
        <p>
          We sell digital products (prompt toolkits, guides, and related files) delivered as downloadable files.
          Products are described on the respective product page. We reserve the right to modify product contents
          to improve quality, but purchased versions remain accessible.
        </p>
      </section>

      <section>
        <h2>3. Purchase and payment</h2>
        <p>
          All purchases are processed securely by Stripe, Inc. Prices are shown in USD and are inclusive of
          applicable taxes where required. Payment is due at the time of purchase. We issue an electronic
          receipt via Stripe automatically.
        </p>
        <p>
          A purchase constitutes a binding contract once payment is confirmed. You will receive a download link
          by email within minutes of purchase.
        </p>
      </section>

      <section>
        <h2>4. Delivery</h2>
        <p>
          Digital products are delivered by email as a download link sent to the address you provided at checkout.
          Delivery is typically within 1–5 minutes of payment confirmation. If you do not receive your download
          email, check your spam folder or contact us at helloworkshift@gmail.com.
        </p>
      </section>

      <section>
        <h2>5. Refund policy</h2>
        <p>
          We offer a 7-day satisfaction guarantee. If you are not satisfied with your purchase, contact us within
          7 days of purchase at helloworkshift@gmail.com with your order details and the reason for your request.
          We will process a full refund to your original payment method within 5–10 business days.
        </p>
        <p>
          After 7 days, or if the product has been substantially used, refunds are at our sole discretion.
          Refunds are not available for purchases made with fraudulent intent.
        </p>
        <p>
          <strong>EU consumers:</strong> In accordance with the EU Consumer Rights Directive, you have a 14-day
          right of withdrawal. However, by downloading the file you expressly consent to the immediate delivery
          of the digital content and acknowledge that you thereby lose your right of withdrawal.
        </p>
      </section>

      <section>
        <h2>6. License and permitted use</h2>
        <p>
          Upon purchase, you receive a personal, non-exclusive, non-transferable license to use the product
          for your own professional or personal use. You may:
        </p>
        <ul>
          <li>Use all prompts in your own AI tools for unlimited professional tasks</li>
          <li>Modify the prompts for your specific use case</li>
          <li>Use the generated output commercially</li>
        </ul>
        <p>You may not:</p>
        <ul>
          <li>Resell, redistribute, or share the product files with others</li>
          <li>Publish or share the prompt files publicly (e.g., on a website, social media, or file-sharing platform)</li>
          <li>Include the prompts in a competing product or training material</li>
          <li>Remove or alter any copyright notices</li>
        </ul>
        <p>
          Team licenses covering multiple users are available — contact us for pricing.
        </p>
      </section>

      <section>
        <h2>7. Intellectual property</h2>
        <p>
          All content, prompts, and materials in our products are the intellectual property of Workshift / Jan S
          and are protected by copyright law. The output you generate using these prompts belongs to you.
        </p>
      </section>

      <section>
        <h2>8. Disclaimer of warranties</h2>
        <p>
          Products are provided &ldquo;as is&rdquo; without warranty of any kind. We do not guarantee that the prompts
          will produce any specific result, revenue, or business outcome. AI output quality depends on the tool
          used, how you fill in the variables, and other factors outside our control.
        </p>
        <p>
          We are not responsible for errors, inaccuracies, or omissions in AI-generated output. Always review
          AI-generated content before publishing or sending to clients.
        </p>
      </section>

      <section>
        <h2>9. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, our liability for any claim arising from your use of a product
          is limited to the amount you paid for that product. We are not liable for indirect, incidental, or
          consequential damages.
        </p>
      </section>

      <section>
        <h2>10. Governing law</h2>
        <p>
          These terms are governed by the laws of [YOUR COUNTRY/STATE]. Any disputes shall be subject to the
          exclusive jurisdiction of the courts of [YOUR JURISDICTION].
        </p>
      </section>

      <section>
        <h2>11. Changes to terms</h2>
        <p>
          We may update these terms. Changes apply to new purchases only. Continued use after changes to the
          website constitutes acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2>12. Contact</h2>
        <p>
          Questions? Email us at{" "}
          <a href="mailto:helloworkshift@gmail.com">helloworkshift@gmail.com</a>
        </p>
      </section>

    </LegalLayout>
  );
}
