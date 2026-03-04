import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Privacy Policy — Workshift" };

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" subtitle="Last updated: March 2025">

      <section>
        <h2>1. Who we are</h2>
        <p>
          This website is operated by Jan S (Workshift), [YOUR ADDRESS]. Contact: helloworkshift@gmail.com.
          We are the data controller for any personal data collected via this website.
        </p>
      </section>

      <section>
        <h2>2. What data we collect and why</h2>

        <h3>2.1 Purchase data (via Stripe)</h3>
        <p>
          When you purchase a product, you are directed to Stripe&apos;s secure payment page. Stripe collects and
          processes your payment information (name, email, billing address, card details) directly. We receive
          from Stripe only: your email address and name, which we use solely to deliver your digital download.
        </p>
        <p>
          Stripe acts as an independent data controller for payment processing. See{" "}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe&apos;s Privacy Policy</a>.
        </p>

        <h3>2.2 Delivery email</h3>
        <p>
          After a successful purchase, we send one transactional email to the address you provided at checkout.
          This email contains your download link. We do not add you to any marketing list without your separate consent.
        </p>

        <h3>2.3 Server logs</h3>
        <p>
          Our hosting provider (Vercel Inc., 340 Pine Street Suite 700, San Francisco, CA 94104, USA) automatically
          collects standard server log data (IP address, browser type, pages visited, timestamp) for security and
          operational purposes. This data is retained for a maximum of 30 days.
        </p>
      </section>

      <section>
        <h2>3. Cookies</h2>
        <p>
          We use strictly necessary cookies required for the site to function. We do not use analytics,
          advertising, or tracking cookies. When you click &ldquo;Buy&rdquo;, you are redirected to Stripe&apos;s
          domain where Stripe may set their own cookies for fraud prevention. We do not control these.
        </p>
        <p>
          You can manage or delete cookies at any time via your browser settings. Note that disabling cookies
          may affect site functionality.
        </p>
      </section>

      <section>
        <h2>4. Legal basis for processing (GDPR)</h2>
        <ul>
          <li><strong>Contract performance (Art. 6(1)(b) GDPR)</strong> — processing your email to deliver your purchase</li>
          <li><strong>Legitimate interest (Art. 6(1)(f) GDPR)</strong> — server logs for security and fraud prevention</li>
          <li><strong>Legal obligation (Art. 6(1)(c) GDPR)</strong> — retaining transaction records as required by tax law</li>
        </ul>
      </section>

      <section>
        <h2>5. Data retention</h2>
        <p>
          Purchase records (email, transaction ID) are retained for 10 years as required by German tax law (§ 147 AO).
          Server logs are retained for a maximum of 30 days. Delivery emails are not stored beyond what your email
          provider retains.
        </p>
      </section>

      <section>
        <h2>6. Data sharing</h2>
        <p>We share your data only with the following third parties, strictly as necessary:</p>
        <ul>
          <li><strong>Stripe, Inc.</strong> — payment processing</li>
          <li><strong>Vercel, Inc.</strong> — website hosting</li>
          <li><strong>Google LLC (Gmail)</strong> — transactional email delivery</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal data. We do not share it with advertisers or data brokers.
        </p>
      </section>

      <section>
        <h2>7. International transfers</h2>
        <p>
          Some of our service providers (Stripe, Vercel, Google) are based in the United States. Data transfers
          to the US are based on the EU-US Data Privacy Framework and Standard Contractual Clauses (SCCs) where applicable.
        </p>
      </section>

      <section>
        <h2>8. Your rights (GDPR)</h2>
        <p>Under GDPR, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> — request a copy of the data we hold about you (Art. 15)</li>
          <li><strong>Rectification</strong> — request correction of inaccurate data (Art. 16)</li>
          <li><strong>Erasure</strong> — request deletion of your data where legally permitted (Art. 17)</li>
          <li><strong>Restriction</strong> — request we limit processing of your data (Art. 18)</li>
          <li><strong>Portability</strong> — receive your data in a portable format (Art. 20)</li>
          <li><strong>Object</strong> — object to processing based on legitimate interest (Art. 21)</li>
          <li><strong>Withdraw consent</strong> — where processing is based on consent, withdraw at any time</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a href="mailto:helloworkshift@gmail.com">helloworkshift@gmail.com</a>.
          We will respond within 30 days. You also have the right to lodge a complaint with your local
          supervisory authority.
        </p>
      </section>

      <section>
        <h2>9. Security</h2>
        <p>
          We use HTTPS encryption for all data transmission. Download links are cryptographically signed and
          unique to each purchase. We do not store credit card details — all payment data is handled exclusively by Stripe.
        </p>
      </section>

      <section>
        <h2>10. Changes to this policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted on this page with an updated
          date. Continued use of the site after changes constitutes acceptance.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          Questions about this privacy policy or your data rights? Contact us at:{" "}
          <a href="mailto:helloworkshift@gmail.com">helloworkshift@gmail.com</a>
        </p>
      </section>

    </LegalLayout>
  );
}
