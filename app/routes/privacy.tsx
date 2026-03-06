import type { Route } from "./+types/privacy";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {
  ControllerSection,
  HostingOverview,
  HostingTransferSection,
  ObjectionSection,
  RightsSection,
} from "../components/PrivacySections";
import "../components/LegalPage.css";

export function meta(_arguments: Route.MetaArgs): Route.MetaDescriptors {
  return [
    { title: "Privacy Policy — Sebastian Software" },
    {
      content:
        "Privacy policy for Sebastian Software GmbH. We process only technically necessary data — no cookies, no tracking, no analytics.",
      name: "description",
    },
  ];
}

function DataProcessingSection(): React.JSX.Element {
  return (
    <>
      <h2>Overview of Data Processing</h2>
      <p>
        This website does not process personal data beyond what is
        technically necessary. No cookies are set, no tracking is used,
        and no analytics tools are employed. There is no contact form –
        contact is made exclusively via email.
      </p>

      <HostingOverview />
      <HostingTransferSection />

      <h2>Contact via Email</h2>
      <p>
        When you contact us by email, the data you provide (email address,
        name if applicable, and message content) will be processed to
        handle your inquiry. If your inquiry is aimed at concluding or
        performing a contract, the legal basis is Art. 6(1)(b) GDPR
        (pre-contractual or contractual measures). For general inquiries
        without a contractual context, the legal basis is Art. 6(1)(f)
        GDPR; our legitimate interest lies in the proper handling of
        incoming inquiries. This interest prevails, as processing is
        limited to what is necessary for responding and data is deleted
        upon completion. Your data will be deleted once the inquiry has
        been fully resolved. Where tax or commercial law retention
        obligations apply (§ 257 HGB, § 147 AO), the relevant data will be
        retained for up to 10 years.
      </p>
    </>
  );
}

export default function Privacy(): React.JSX.Element {
  return (
    <>
      <Header />
      <main className="container">
        <article className="legal-page">
          <div className="legal-prose">
            <h1>Privacy Policy</h1>
            <time className="legal-updated" dateTime="2026-03-06">
              Last updated: March 6, 2026
            </time>

            <ControllerSection />
            <DataProcessingSection />

            <h2>Processors</h2>
            <p>
              We use the following processors pursuant to Art. 28 GDPR, with
              each of whom a data processing agreement is in place:
            </p>
            <dl>
              <dt>BunnyWay d.o.o. (Bunny.net), Slovenia</dt>
              <dd>CDN, hosting and edge scripting for this website</dd>
            </dl>

            <h2>External Links</h2>
            <p>
              This website contains links to third-party websites. When you
              click on these links, you will be redirected to the respective
              third-party site. The respective operators are responsible for
              data processing on these external sites. We recommend that you
              read the privacy policies of the linked sites.
            </p>

            <h2>Automated Decision-Making</h2>
            <p>
              No automated decision-making, including profiling, pursuant to
              Art. 22 GDPR takes place.
            </p>

            <RightsSection />
            <ObjectionSection />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
