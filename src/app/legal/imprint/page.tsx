import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Imprint — Workshift" };

export default function Imprint() {
  return (
    <LegalLayout title="Imprint" subtitle="Impressum — Legal disclosure pursuant to § 5 TMG">
      <section>
        <h2>Information according to § 5 TMG</h2>
        <p>
          <strong>Jan S</strong><br />
          [YOUR STREET AND NUMBER]<br />
          [YOUR ZIP CODE] [YOUR CITY]<br />
          [YOUR COUNTRY]
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:helloworkshift@gmail.com">helloworkshift@gmail.com</a>
        </p>
      </section>

      <section>
        <h2>Responsible for content according to § 55 Abs. 2 RStV</h2>
        <p>
          Jan S<br />
          [YOUR ADDRESS AS ABOVE]
        </p>
      </section>

      <section>
        <h2>EU Online Dispute Resolution</h2>
        <p>
          The European Commission provides a platform for online dispute resolution (ODR):{" "}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr
          </a>
        </p>
        <p>
          We are not obliged to participate in dispute resolution proceedings before a consumer arbitration board
          and do not generally participate in such proceedings.
        </p>
      </section>

      <section>
        <h2>Liability for Content</h2>
        <p>
          As a service provider, we are responsible for our own content on these pages in accordance with general
          law (§ 7 para. 1 TMG). According to §§ 8 to 10 TMG, however, we are not obliged as a service provider
          to monitor transmitted or stored third-party information or to investigate circumstances that indicate
          illegal activity.
        </p>
      </section>

      <section>
        <h2>Liability for Links</h2>
        <p>
          Our website contains links to external websites of third parties over whose content we have no influence.
          We therefore cannot accept any liability for this third-party content. The respective provider or operator
          of the linked pages is always responsible for the content of those pages.
        </p>
      </section>

      <section>
        <h2>Copyright</h2>
        <p>
          The content and works created by the site operators on these pages are subject to German copyright law.
          Duplication, processing, distribution, or any form of commercialization of such material beyond the scope
          of the copyright law shall require the prior written consent of its respective author or creator.
        </p>
      </section>
    </LegalLayout>
  );
}
