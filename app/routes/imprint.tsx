import type { Route } from "./+types/imprint";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../components/LegalPage.css";

export function meta(_arguments: Route.MetaArgs): Route.MetaDescriptors {
  return [
    { title: "Legal Notice — Sebastian Software" },
    {
      content:
        "Legal notice and imprint for Sebastian Software GmbH, Dalheimer Str. 12, 55128 Mainz, Germany.",
      name: "description",
    },
  ];
}

function CompanyAddress(): React.JSX.Element {
  return (
    <>
      <h2>Address</h2>
      <address>
        Sebastian Software GmbH
        <br />
        Dalheimer Straße 12
        <br />
        55128 Mainz
        <br />
        Germany
      </address>

      <h2>Managing Directors</h2>
      <ul>
        <li>Sebastian Fastner</li>
        <li>Sebastian Werner</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Phone: <a href="tel:+496131972830">+49-6131-9729-830</a>
        <br />
        Fax: +49-6131-9729-831
        <br />
        Email:{" "}
        <a href="mailto:info@sebastian-software.de">
          info@sebastian-software.de
        </a>
      </p>
    </>
  );
}

function LegalDetails(): React.JSX.Element {
  return (
    <>
      <h2>Register Entry</h2>
      <p>Entry in the Commercial Register</p>
      <p>
        Register court: Amtsgericht Mainz
        <br />
        Register number: HRB 45232
      </p>

      <h2>VAT ID</h2>
      <p>
        VAT identification number pursuant to § 27a of the German Value
        Added Tax Act:
        <br />
        DE295226721
      </p>

      <h2>Editorially Responsible pursuant to § 18(2) MStV</h2>
      <p>
        Sebastian Fastner
        <br />
        c/o Sebastian Software GmbH
        <br />
        Dalheimer Straße 12
        <br />
        55128 Mainz
      </p>
    </>
  );
}

export default function Imprint(): React.JSX.Element {
  return (
    <>
      <Header />
      <main className="container">
        <article className="legal-page">
          <div className="legal-prose">
            <h1>Legal Notice</h1>
            <p>Information pursuant to § 5 DDG</p>
            <CompanyAddress />
            <LegalDetails />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
