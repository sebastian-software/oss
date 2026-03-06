export function ControllerSection(): React.JSX.Element {
  return (
    <>
      <h2>Controller</h2>
      <p>
        The controller within the meaning of the General Data Protection
        Regulation (GDPR) and other data protection legislation is:
      </p>
      <address>
        Sebastian Software GmbH
        <br />
        Dalheimer Straße 12
        <br />
        55128 Mainz
        <br />
        Germany
      </address>
      <dl>
        <dt>Managing Directors:</dt>
        <dd>Sebastian Fastner, Sebastian Werner</dd>
        <dt>Email:</dt>
        <dd>
          <a href="mailto:info@sebastian-software.de">
            info@sebastian-software.de
          </a>
        </dd>
      </dl>
      <p>
        A data protection officer has not been appointed, as the legal
        requirements for this do not apply. For data protection inquiries,
        you can contact the email address listed above.
      </p>
    </>
  );
}

export function HostingOverview(): React.JSX.Element {
  return (
    <>
      <h2>Hosting and Content Delivery Network</h2>
      <p>
        This website is operated via the infrastructure of Bunny.net
        (BunnyWay d.o.o., Slovenia, EU). Bunny.net provides the following
        services:
      </p>
      <ul>
        <li>
          CDN (Content Delivery Network) for delivering static files
          (HTML, JavaScript, CSS)
        </li>
        <li>Edge Scripting for server-side logic at Bunny.net nodes</li>
        <li>Storage for static files and assets</li>
      </ul>

      <h3>Processed Data</h3>
      <p>
        Each page request processes the following categories of technical
        connection data: network identification data (IP address),
        time-related metadata (timestamp), usage data (requested URL), and
        technical metadata (browser type, operating system, and device
        information). This data is held by Bunny.net exclusively in
        working memory (RAM) in accordance with the contract and is
        automatically deleted after 20–30 seconds. No persistent storage
        takes place.
      </p>

      <h3>Legal Basis</h3>
      <p>
        Processing is based on Art. 6(1)(f) GDPR. Our legitimate interest
        lies in ensuring the availability, integrity and security of the
        website. This interest outweighs the data subjects&apos; interest in
        non-processing, as connection data is processed exclusively
        transiently in working memory and automatically deleted after a
        few seconds. Insofar as information on the user&apos;s terminal device
        is accessed (e.g. through edge scripting), this is permissible
        without consent pursuant to Section 25(2)(2) TDDDG, as the access
        is strictly necessary to provide the service explicitly requested
        by the user.
      </p>
    </>
  );
}

export function HostingTransferSection(): React.JSX.Element {
  return (
    <>
      <h3>Third-Country Data Transfer</h3>
      <p>
        Bunny.net is based in Slovenia (EU/EEA). However, in the course of
        CDN operations, data may temporarily be processed on servers
        outside the EEA. For these transfers to third countries, Bunny.net
        has entered into Standard Contractual Clauses (SCCs) pursuant to
        Art. 46(2)(c) GDPR. In addition, a Transfer Impact Assessment
        (TIA) was conducted in accordance with the recommendations of the
        European Data Protection Board (EDPB), confirming the
        effectiveness of the safeguards in place. Bunny.net contractually
        commits that connection data on CDN nodes is only processed
        transiently and not stored permanently. Furthermore, a data
        processing agreement pursuant to Art. 28 GDPR is in place, in
        which Bunny.net ensures that sub-processors implement adequate
        data protection measures in accordance with the GDPR.
      </p>

      <h3>Obligation to Provide Data</h3>
      <p>
        The transmission of your IP address is technically necessary to
        access this website. Without this data transmission, no connection
        to the server can be established and the website cannot be
        displayed. There is no legal or contractual obligation to provide
        any further personal data.
      </p>
      <p>
        Further information can be found in the{" "}
        <a
          href="https://bunny.net/privacy"
          rel="noopener noreferrer"
          target="_blank"
        >
          Bunny.net privacy policy
        </a>{" "}
        and on the{" "}
        <a
          href="https://bunny.net/gdpr"
          rel="noopener noreferrer"
          target="_blank"
        >
          Bunny.net GDPR page
        </a>
        .
      </p>
    </>
  );
}

export function TerminaroSection(): React.JSX.Element {
  return (
    <>
      <h2>Appointment Booking via Terminaro</h2>
      <p>
        For online appointment booking, we use our own service Terminaro.
        Terminaro is operated by the same controller (Sebastian Software
        GmbH) – this therefore does not constitute a transfer of data to a
        third party within the meaning of Art. 4(10) GDPR, but rather an
        internal processing operation by the same controller.
      </p>
      <p>
        When you schedule an appointment via the booking link, the data
        you enter (name, email address, company if applicable, phone
        number and booking reason) will be processed by Terminaro.
      </p>

      <h3>Legal Basis and Retention Period</h3>
      <p>
        Processing is based on Art. 6(1)(b) GDPR for the initiation of a
        consulting engagement (pre-contractual measures). Booking data is
        automatically deleted 90 days after the appointment date. If a
        contractual relationship arises from the booking and tax or
        commercial law retention obligations apply (§ 257 HGB, § 147 AO),
        the relevant data will be retained for up to 10 years. Terminaro
        does not set any cookies on the public website and does not use
        tracking or web analytics.
      </p>
    </>
  );
}

export function RightsSection(): React.JSX.Element {
  return (
    <>
      <h2>Your Rights</h2>
      <p>
        Under the GDPR, you have the following rights regarding your
        personal data:
      </p>
      <ul>
        <li>Right of access (Art. 15 GDPR)</li>
        <li>Right to rectification (Art. 16 GDPR)</li>
        <li>Right to erasure (Art. 17 GDPR)</li>
        <li>Right to restriction of processing (Art. 18 GDPR)</li>
        <li>Right to data portability (Art. 20 GDPR)</li>
        <li>
          Right to object (Art. 21 GDPR) – see separate section below
        </li>
      </ul>
      <p>
        To exercise your rights, you may contact us at any time at:{" "}
        <a href="mailto:info@sebastian-software.de">
          info@sebastian-software.de
        </a>
      </p>
    </>
  );
}

export function ObjectionSection(): React.JSX.Element {
  return (
    <>
      <h2>Right to object (Art. 21 GDPR)</h2>
      <p>
        <strong>
          Where we process your personal data on the basis of legitimate
          interests pursuant to Art. 6(1)(f) GDPR, you have the right to
          object to such processing at any time pursuant to Art. 21 GDPR.
          If you object, we will no longer process your personal data for
          these purposes unless we can demonstrate compelling legitimate
          grounds for the processing which override your interests, rights
          and freedoms, or the processing serves the establishment,
          exercise or defence of legal claims.
        </strong>
      </p>
      <p>
        To exercise your right to object, you may contact us at any time
        at:{" "}
        <a href="mailto:info@sebastian-software.de">
          info@sebastian-software.de
        </a>
      </p>

      <h2>Right to Lodge a Complaint with a Supervisory Authority</h2>
      <p>
        You have the right to lodge a complaint with a data protection
        supervisory authority regarding the processing of your personal
        data. The supervisory authority responsible for us is:
      </p>
      <address>
        The State Commissioner for Data Protection and Freedom of
        Information of Rhineland-Palatinate
        <br />
        Postfach 30 40
        <br />
        55020 Mainz
        <br />
        <a
          href="https://www.datenschutz.rlp.de"
          rel="noopener noreferrer"
          target="_blank"
        >
          www.datenschutz.rlp.de
        </a>
      </address>
    </>
  );
}
