import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Shamba",
  description:
    "How Shamba (operated by Axiom Analytics) processes personal data, our roles as controller and processor, and the rights available to you.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header solid />

      <main className="flex-1">
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 space-y-2 border-b border-border pb-6">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Privacy Policy
              </h1>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Last updated: July 16, 2026
              </p>
            </div>

            <div className="space-y-8 [&_section]:space-y-3">
              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  1. About this policy and who we are
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  This Privacy Policy explains how personal data is processed in
                  connection with the Shamba platform, our website, our mobile
                  applications, and related services (together, the
                  {" "}&quot;Services&quot;). It is a transparency notice provided
                  under the General Data Protection Regulation (GDPR). It is not a
                  contract, and it does not by itself set the legal basis for the
                  processing carried out on behalf of the organizations that use
                  Shamba.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Shamba is currently operated by Axiom Analytics
                  {" "}(&quot;Shamba&quot;, &quot;we&quot;, &quot;us&quot;, or
                  {" "}&quot;our&quot;). Axiom Analytics is registered with the
                  Netherlands Chamber of Commerce (KvK) under number 72367334 and
                  has its business address at Lijndenstraat 26D, 1018 NV Amsterdam,
                  the Netherlands. If the business is later transferred to a
                  private limited company (B.V.), we will update this policy and,
                  where required, notify affected organizations.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  2. Our two roles: controller and processor
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Shamba processes personal data in two distinct roles, and the
                  role determines who is responsible and how you exercise your
                  rights.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>As a processor.</strong> When an organization (for
                    example a cooperative, producer group, NGO, company, or
                    government programme, the &quot;Customer&quot;) uses Shamba to
                    record and manage information about its members, farmers,
                    plots, and programmes, that Customer is the controller. It
                    decides why and how the data is processed. We process that
                    data (the &quot;Customer Data&quot;) on the Customer&apos;s
                    documented instructions under the Data Processing Terms in
                    Annex 1 to our Terms of Service. We do not decide the purposes
                    of that processing.
                  </li>
                  <li>
                    <strong>As a controller.</strong> For a limited set of data we
                    decide ourselves, we are the controller. This includes account
                    and login information for the people who use the platform,
                    website visitor data, support communications, security and
                    audit logs, billing information, and our own marketing
                    contacts.
                  </li>
                </ul>
                <p className="leading-relaxed text-muted-foreground">
                  Where we act as a processor, this policy describes our practices
                  for transparency, but the responsible Customer&apos;s own privacy
                  notice governs the processing. Sections that concern individual
                  rights explain which party to contact.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  3. Whose data this policy covers
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Authorized users</strong> of the platform, such as
                    coordinators, field agents, and administrators invited by a
                    Customer.
                  </li>
                  <li>
                    <strong>Website visitors</strong> and people who contact us or
                    request a demo.
                  </li>
                  <li>
                    <strong>Farmers, members, and other participants</strong>{" "}
                    whose information a Customer records in Shamba. These
                    individuals usually do not have a Shamba account and often do
                    not interact with us directly. Their information is generally
                    provided to us by the Customer rather than collected from them
                    by us (see Section 6).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  4. Personal data we process
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  The categories below describe the data that may be processed
                  through the Services. Not all of it applies to every person, and
                  much of it is Customer Data that we process only as a processor.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Account and identity data:</strong> name, email address
                    and/or phone number (used to send one-time login codes),
                    organization, role, and language preference.
                  </li>
                  <li>
                    <strong>Farmer and participant data (Customer Data):</strong>{" "}
                    names and contact details, household or membership details,
                    identifiers assigned by the Customer, and, where the Customer
                    records them, references to identity documents.
                  </li>
                  <li>
                    <strong>Geospatial and farm data (Customer Data):</strong> plot
                    boundaries and coordinates, farm attributes, crops, and related
                    agricultural records.
                  </li>
                  <li>
                    <strong>Field-collected data (Customer Data):</strong> survey
                    responses, training records, input distributions, purchases,
                    photos, and notes captured by field teams, including offline.
                  </li>
                  <li>
                    <strong>Communications:</strong> messages, feedback, and support
                    requests you send to us.
                  </li>
                  <li>
                    <strong>Device and technical data:</strong> IP address, browser
                    and operating system, device identifiers, and app version.
                  </li>
                  <li>
                    <strong>Usage and log data:</strong> actions taken in the
                    Services, timestamps, and security and audit logs.
                  </li>
                  <li>
                    <strong>Location data:</strong> device location when a user
                    actively uses location features such as mapping a plot.
                  </li>
                  <li>
                    <strong>Cookies and similar identifiers:</strong> see Section 14.
                  </li>
                </ul>
                <p className="leading-relaxed text-muted-foreground">
                  A Customer may choose to record data that qualifies as a special
                  category of personal data. Where it does, the Customer is
                  responsible for identifying the appropriate legal basis and any
                  additional conditions for that processing.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  5. Purposes and legal bases
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Where we act as a controller, we rely on the legal bases set out
                  below. Where we act as a processor, the Customer determines the
                  purpose and legal basis, and we process on its instructions.
                </p>
                <div className="mt-4 overflow-x-auto rounded-lg border border-border">
                  <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted">
                        <th className="px-4 py-3 font-semibold text-foreground">
                          Purpose
                        </th>
                        <th className="px-4 py-3 font-semibold text-foreground">
                          Data
                        </th>
                        <th className="px-4 py-3 font-semibold text-foreground">
                          Legal basis
                        </th>
                        <th className="px-4 py-3 font-semibold text-foreground">
                          Our role
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground [&_td]:border-b [&_td]:border-border [&_td]:px-4 [&_td]:py-3 [&_td]:align-top">
                      <tr>
                        <td>Hosting and managing farmer, plot, and programme records for a Customer</td>
                        <td>Customer Data</td>
                        <td>The Customer&apos;s own basis; we process on its instructions under the Data Processing Terms (Annex 1 to our Terms)</td>
                        <td>Processor</td>
                      </tr>
                      <tr>
                        <td>Creating accounts and authenticating users (one-time login codes)</td>
                        <td>Account and identity data</td>
                        <td>Performance of a contract and our legitimate interest in secure access</td>
                        <td>Controller</td>
                      </tr>
                      <tr>
                        <td>Securing the Services, preventing abuse, keeping audit logs</td>
                        <td>Device, usage, and log data</td>
                        <td>Legitimate interests (security) and legal obligation</td>
                        <td>Controller</td>
                      </tr>
                      <tr>
                        <td>Providing support and responding to requests</td>
                        <td>Contact and communications</td>
                        <td>Performance of a contract and legitimate interests</td>
                        <td>Controller</td>
                      </tr>
                      <tr>
                        <td>Operating and improving the Services using aggregated statistics and service telemetry</td>
                        <td>Aggregated and non-identifying technical data</td>
                        <td>Legitimate interests; identifiable Customer Data is not used for this without instruction</td>
                        <td>Controller / Processor</td>
                      </tr>
                      <tr>
                        <td>Website analytics and non-essential cookies, where used</td>
                        <td>Device, usage, and cookie data</td>
                        <td>Consent</td>
                        <td>Controller</td>
                      </tr>
                      <tr>
                        <td>Responding to demo requests and sending related communications</td>
                        <td>Contact data</td>
                        <td>Steps at your request and legitimate interests; consent for marketing where required</td>
                        <td>Controller</td>
                      </tr>
                      <tr>
                        <td>Meeting legal, tax, and accounting obligations</td>
                        <td>As required</td>
                        <td>Legal obligation</td>
                        <td>Controller</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  6. Farmer and participant data
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Most information about farmers and other participants is provided
                  to us by a Customer, or collected by the Customer&apos;s field
                  teams, rather than collected by us directly. For this data the
                  Customer is the controller and decides the legal basis. That
                  basis is often the performance of a contract or programme, the
                  Customer&apos;s legitimate interests, or a legal obligation, and
                  it is not necessarily consent. We do not assume that farmer data
                  is collected on the basis of consent.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Because this data is generally not collected from the individual
                  directly, the transparency obligations under Article 14 GDPR
                  apply to the Customer as controller. The Customer is responsible
                  for informing the individuals concerned, for example through a
                  participant privacy notice, and for having a valid basis to
                  record and share the data. Shamba supports the Customer in
                  meeting these obligations but does not provide notices to
                  participants on its own behalf.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  7. How data is shared
                </h2>
                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  7.1 Within the Customer&apos;s workspace
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Customer Data is visible to the authorized users of that Customer
                  according to the access the Customer configures, and only within
                  the projects and records those users are permitted to see. It is
                  shared with another organization only where the Customer, as
                  controller, has arranged that sharing.
                </p>
                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  7.2 Subprocessors and service providers
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  We use a limited number of service providers to run the Services.
                  See Section 8.
                </p>
                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  7.3 Legal requirements
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  We may disclose data where we are legally required to do so, for
                  example in response to a valid order from a competent authority.
                  Where we act as a processor and the request concerns Customer
                  Data, we will, unless legally prohibited, inform the Customer
                  rather than respond on our own account.
                </p>
                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  7.4 Business transfer
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  If the business operating Shamba is transferred, including a
                  transfer of the Axiom Analytics business to a newly formed
                  company, data may transfer as part of that business. We
                  will provide notice and ensure the receiving entity is bound by
                  equivalent protections.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  8. Subprocessors
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We engage subprocessors to provide parts of the Services. They
                  act on our instructions and are bound by data protection terms.
                  The categories are:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Cloud hosting and database infrastructure</li>
                  <li>Object and file storage</li>
                  <li>Email and messaging delivery, including one-time login codes</li>
                  <li>Map, satellite, and geospatial data providers</li>
                  <li>Error monitoring and, where used, product analytics</li>
                </ul>
                <p className="leading-relaxed text-muted-foreground">
                  A current list of named subprocessors is available to Customers on
                  request. We will give Customers advance notice of a new or
                  replacement subprocessor so that they can object, as set out in
                  the Data Processing Terms in Annex 1 to our Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  9. International transfers
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We host and process personal data primarily within the European
                  Economic Area (EEA). Some subprocessors, or Customers using the
                  Services from outside the EEA, may involve processing in other
                  countries. Where personal data is transferred outside the EEA to
                  a country without an adequacy decision, we rely on appropriate
                  safeguards, in particular the European Commission&apos;s Standard
                  Contractual Clauses together with any additional measures needed.
                  Customers may request information about the safeguards that apply
                  to a specific transfer.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  10. Retention
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Where we are a controller, we retain data as follows, unless a
                  longer period is required by law:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Account data:</strong> for the life of the account, then
                    deleted or anonymized within 90 days of account closure.
                  </li>
                  <li>
                    <strong>Support communications:</strong> up to 24 months after
                    the request is resolved.
                  </li>
                  <li>
                    <strong>Security and server logs:</strong> up to 12 months.
                  </li>
                  <li>
                    <strong>Demo and marketing contacts:</strong> until you object or
                    withdraw consent, and in any case reviewed at least every 24
                    months.
                  </li>
                  <li>
                    <strong>Billing and tax records:</strong> for the statutory
                    retention period, which in the Netherlands is generally 7 years.
                  </li>
                  <li>
                    <strong>Backups:</strong> held on a rolling basis and overwritten
                    within approximately 35 days.
                  </li>
                </ul>
                <p className="leading-relaxed text-muted-foreground">
                  Where we are a processor, we retain Customer Data for the duration
                  of the Customer&apos;s use of the Services and, after the
                  agreement ends, we return or delete it in line with the Data
                  Processing Terms in Annex 1 to our Terms of Service, subject to a
                  short period for backups to expire.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  11. Security
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We take appropriate technical and organizational measures to
                  protect personal data, taking into account the state of the art,
                  the costs of implementation, and the risks involved. These
                  measures include encryption of data in transit and at rest,
                  access controls and authentication, logging, regular review of
                  our practices, and procedures for handling security incidents. No
                  service can be guaranteed to be completely secure, and we cannot
                  promise absolute security, but we work to reduce risk and to
                  respond promptly if an incident occurs.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  12. Your rights
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Subject to conditions in applicable law, you have the right to
                  access your personal data and to request its rectification or
                  erasure, to restrict or object to processing, to data
                  portability, and, where we rely on consent, to withdraw that
                  consent at any time.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  How to exercise these rights depends on our role:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Data where we are the controller</strong> (for example
                    your account or a demo request): contact us using the details in
                    Section 17.
                  </li>
                  <li>
                    <strong>Farmer or participant data recorded by a Customer</strong>{" "}
                    (data where we are a processor): the Customer is the controller.
                    Please contact that organization. If a request reaches us, we
                    will forward it to the responsible Customer and assist them in
                    responding.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  13. Automated decision-making
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We do not make decisions producing legal or similarly significant
                  effects about individuals based solely on automated processing.
                  The Services may present indicators, validations, or analytics,
                  for example a mapping or land-related indicator, but these are
                  decision-support tools. Any decision about a farmer or
                  participant, such as eligibility, payment, or programme
                  participation, is made by the responsible Customer, which is
                  expected to apply human judgment.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  14. Cookies and similar technologies
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We distinguish between our website and the authenticated
                  platform.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>The platform</strong> uses only what is strictly
                    necessary to run the Services and keep you signed in, such as
                    session tokens and local storage. It does not use these for
                    advertising.
                  </li>
                  <li>
                    <strong>The website</strong> uses strictly necessary cookies and
                    may use limited analytics. Non-essential cookies are set only
                    with your consent, which you can give or refuse and later
                    change. You can also control cookies through your browser
                    settings.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  15. Children and age
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Shamba is a tool for organizations and their staff. Accounts are
                  intended for people aged 18 or over, and we do not knowingly
                  create accounts for children. Records that a Customer keeps about
                  participants may in some programmes relate to young people. Where
                  that is the case, the Customer, as controller, is responsible for
                  having a valid legal basis and for any additional protections
                  that apply to minors under applicable law.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  16. Changes to this policy
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We may update this policy as our practices or legal obligations
                  change. We will post the updated version here and change the
                  {" "}&quot;Last updated&quot; date. For material changes we will
                  provide additional notice where appropriate, for example by email
                  or in the platform. Because this policy is a transparency notice
                  rather than a contract, continued use of the Services is not
                  treated as acceptance of changes.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  17. Contact and supervisory authority
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  For questions about this policy or to exercise your rights in
                  respect of data for which we are the controller, contact us:
                </p>
                <div className="mt-3 rounded-lg border border-border bg-muted px-4 py-3">
                  <p className="font-medium text-muted-foreground">
                    Axiom Analytics
                  </p>
                  <p className="text-muted-foreground">Lijndenstraat 26D</p>
                  <p className="text-muted-foreground">
                    1018 NV Amsterdam, the Netherlands
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Chamber of Commerce (KvK): 72367334
                  </p>
                  <p className="text-muted-foreground">
                    Email:{" "}
                    <Link
                      href="mailto:privacy@shamba.com"
                      className="text-primary underline-offset-4 transition-colors duration-200 hover:text-primary/90 hover:underline"
                    >
                      privacy@shamba.com
                    </Link>
                  </p>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  If you are in the EEA and believe your concern has not been
                  resolved, you have the right to lodge a complaint with a data
                  protection supervisory authority. In the Netherlands this is the
                  Autoriteit Persoonsgegevens. If we act as a processor, complaints
                  about Customer Data should ordinarily be directed to the Customer
                  that controls the data.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
