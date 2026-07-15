import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Shamba",
  description:
    "The Terms of Service governing access to and use of the Shamba platform, website, mobile applications, and related services, operated by Axiom Analytics.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header solid />

      <main className="flex-1">
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 space-y-2 border-b border-border pb-6">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Terms of Service
              </h1>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Last updated: July 15, 2026
              </p>
            </div>

            <div className="space-y-8 [&_section]:space-y-3">
              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  1. Introduction
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  These Terms of Service (&quot;Terms&quot;) are entered into
                  between you and Axiom Analytics, which operates the Shamba
                  platform (&quot;Shamba&quot;, &quot;we&quot;, &quot;us&quot;, or
                  {" "}&quot;our&quot;). Axiom Analytics is registered with the
                  Netherlands Chamber of Commerce under number 72367334 and has
                  its business address at Lijndenstraat 26D, 1018 NV Amsterdam,
                  the Netherlands.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  These Terms govern access to and use of the Shamba website,
                  mobile applications, platform, and related services (together,
                  the &quot;Services&quot;). They are intended primarily for use
                  by organizations. If you use the Services on behalf of an
                  organization, you represent that you are authorized to accept
                  these Terms on its behalf. If you are not authorized to bind the
                  organization, you may use the Services only as an Authorized User
                  under that organization&apos;s agreement with Shamba.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  2. Definitions
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Customer:</strong> the organization that subscribes to,
                    pilots, or activates the Services, such as a cooperative,
                    producer group, NGO, company, or government programme.
                  </li>
                  <li>
                    <strong>Authorized User:</strong> a person the Customer permits
                    to use the Services, such as a coordinator or field agent.
                  </li>
                  <li>
                    <strong>Customer Administrator:</strong> an Authorized User the
                    Customer designates to configure its workspace and manage
                    users.
                  </li>
                  <li>
                    <strong>Customer Data:</strong> data submitted to or generated
                    through the Customer&apos;s use of the Services, including data
                    about farmers, plots, and programmes.
                  </li>
                  <li>
                    <strong>Farmer or Participant:</strong> a person whose
                    information is recorded in the Services and who usually has no
                    Shamba account or direct contractual relationship with Shamba.
                  </li>
                  <li>
                    <strong>Order Form:</strong> an order, pilot agreement, or plan
                    selection that specifies the subscribed Services, fees, and any
                    Customer-specific terms.
                  </li>
                  <li>
                    <strong>DPA:</strong> the data processing agreement that governs
                    our processing of personal data on the Customer&apos;s behalf.
                  </li>
                  <li>
                    <strong>Agreement:</strong> the documents listed in Section 3,
                    together.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  3. The Agreement and order of precedence
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  The Agreement between the Customer and Shamba is made up of the
                  following documents. If they conflict, the earlier in this list
                  prevails for the subject it covers:
                </p>
                <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
                  <li>any signed Order Form or customer agreement;</li>
                  <li>the DPA, for questions of personal data protection;</li>
                  <li>any service-specific terms or service level agreement;</li>
                  <li>these Terms;</li>
                  <li>the Acceptable Use provisions in Section 8.</li>
                </ol>
                <p className="leading-relaxed text-muted-foreground">
                  Our{" "}
                  <Link
                    href="/privacy"
                    className="text-primary underline-offset-4 transition-colors duration-200 hover:text-primary/90 hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  is a transparency notice. It is not the contractual basis for
                  processing and does not override negotiated terms. The DPA and
                  Order Form are made available before the Agreement is concluded.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  4. The Services
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Shamba provides software and related services that enable
                  organizations to collect, manage, validate, analyze, and exchange
                  agricultural, organizational, geospatial, and programme data. This
                  includes, depending on the plan, farmer and member administration,
                  field data collection (including offline), plot mapping, surveys
                  and training records, input distributions and purchases, data
                  quality tools, and traceability and reporting features.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  The exact features made available are set out in the applicable
                  plan or Order Form. We may add, change, or retire individual
                  features as the product evolves, subject to Section 15.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  5. No advice; decision-support disclaimer
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  The Services provide data-management and decision-support tools.
                  Unless expressly agreed otherwise in writing, outputs produced by
                  the Services do not constitute legal advice, certification,
                  regulatory approval, verification of land ownership or land
                  rights, a cadastral or professional land survey, agronomic,
                  financial, or environmental advice, or a guarantee of compliance
                  with any sustainability, traceability, or due-diligence
                  requirement.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  This applies in particular to mapping, deforestation, and
                  traceability indicators, which can be affected by incomplete or
                  third-party data. The Customer remains responsible for reviewing
                  outputs, applying appropriate professional judgment, and
                  determining whether its activities comply with applicable
                  requirements.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  6. Accounts, Authorized Users, and administration
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    A Customer Administrator may invite, suspend, and remove
                    Authorized Users, and controls access to the Customer&apos;s
                    workspaces, projects, and records.
                  </li>
                  <li>
                    Authorized Users may access only the organizations, projects,
                    and records they are permitted to access, and must not share
                    login codes or accounts.
                  </li>
                  <li>
                    The Customer is responsible for keeping account details
                    accurate, for removing access when staff or contractors leave,
                    and for notifying us of suspected unauthorized access. We may
                    rely on instructions from a configured Customer Administrator.
                  </li>
                  <li>
                    Accounts are intended for people aged 18 or over.
                  </li>
                </ul>
                <p className="leading-relaxed text-muted-foreground">
                  You are responsible for activities carried out through your
                  account, except to the extent they are caused by our breach of
                  the Agreement, our failure to implement agreed security measures,
                  or other circumstances outside your reasonable control. Where a
                  Customer Administrator role or organization ownership is disputed,
                  we will follow a reasonable process to resolve it before acting.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  7. Acceptable use
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  You agree to use the Services lawfully and in accordance with the
                  Agreement. You must not:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    access data outside your authorized organization, workspace, or
                    project;
                  </li>
                  <li>
                    upload personal data without a proper legal basis and authority,
                    or collect data through coercion or deception;
                  </li>
                  <li>
                    use the Services for unlawful surveillance, discrimination, or
                    in a way that places individuals at a foreseeable risk of harm;
                  </li>
                  <li>
                    circumvent permissions, rate limits, or security controls, or
                    share credentials or one-time codes;
                  </li>
                  <li>
                    introduce malware, or run security tests, scanning, or scraping
                    without our prior written authorization;
                  </li>
                  <li>
                    reverse engineer the Services, except to the extent mandatory
                    law permits;
                  </li>
                  <li>
                    extract data in bulk other than through export functionality or
                    APIs we authorize, or use the Services to build or benchmark a
                    competing product through systematic extraction;
                  </li>
                  <li>
                    make solely automated high-impact decisions about individuals
                    where prohibited by law.
                  </li>
                </ul>
                <p className="leading-relaxed text-muted-foreground">
                  Legitimate use of the APIs, integrations, and automation we make
                  available is permitted.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  8. Customer Data
                </h2>
                <h3 className="mb-2 text-lg font-medium text-foreground">
                  8.1 Ownership and licence
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  As between the parties, the Customer retains all rights in
                  Customer Data. The Customer grants us a non-exclusive licence to
                  host, copy, transmit, display, and otherwise process Customer Data
                  only as reasonably necessary to provide, secure, maintain, and
                  support the Services, to comply with applicable law, and to
                  perform our obligations under the Agreement.
                </p>
                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  8.2 Product improvement
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  We may use service telemetry and anonymized, aggregated
                  statistical information to operate and improve the Services,
                  provided it does not identify the Customer or any individual. We
                  will not use identifiable Customer Data to train general-purpose
                  artificial intelligence models or for unrelated commercial
                  purposes unless expressly agreed in writing.
                </p>
                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  8.3 Customer responsibilities
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  The Customer decides what Customer Data is collected and is
                  responsible for ensuring that its collection, use, and disclosure
                  comply with applicable law. The Customer represents that it has
                  provided any required notices, obtained any required permissions,
                  and holds the rights necessary to instruct us to process Customer
                  Data. The Customer is responsible for reviewing and correcting
                  Customer Data. We may offer validation and data-quality features
                  but do not independently verify the accuracy, completeness, or
                  authenticity of Customer Data unless expressly agreed.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  9. Data protection
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Where we process personal data on behalf of the Customer, we do so
                  as a processor under the DPA, which forms part of the Agreement
                  and covers instructions, confidentiality, security,
                  subprocessors, international transfers, assistance with individual
                  rights, incident notification, deletion or return of data, and
                  audits. Our own processing as a controller is described in the{" "}
                  <Link
                    href="/privacy"
                    className="text-primary underline-offset-4 transition-colors duration-200 hover:text-primary/90 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  10. Confidentiality
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Each party may receive confidential information of the other,
                  including farmer and programme information, commercial and
                  operational data, security information, unpublished reports, and
                  credentials. The receiving party will use confidential information
                  only to perform the Agreement, protect it with reasonable care,
                  and not disclose it except to those who need it and are bound by
                  similar obligations. These obligations do not apply to information
                  that is or becomes public without breach, is independently
                  developed, is lawfully received from another source, or must be
                  disclosed by law, and they survive termination.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  11. Intellectual property and feedback
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  All intellectual property rights in the Services, including the
                  software, designs, and trademarks, belong to Shamba or its
                  licensors. Except for the rights expressly granted in the
                  Agreement, no rights are transferred to you. If you choose to give
                  us feedback or suggestions, we may use them without restriction
                  and without transferring ownership of your Customer Data.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  12. Third-party services and data
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  The Services may involve different kinds of third-party elements:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Optional integrations</strong> that the Customer chooses
                    to connect. These are governed by the third party&apos;s own
                    terms, and the Customer&apos;s use of them is at the
                    Customer&apos;s risk.
                  </li>
                  <li>
                    <strong>Subprocessors</strong> that we select to provide the
                    Services, such as hosting and messaging. We remain responsible
                    for their performance of the contracted service.
                  </li>
                  <li>
                    <strong>Third-party datasets</strong>, such as maps and
                    satellite imagery, which can be incomplete, delayed, or
                    inaccurate and may be subject to separate licence restrictions.
                  </li>
                  <li>
                    <strong>External links</strong> that we merely display and do
                    not control.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  13. Fees, plans, and free services
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Some Services may be offered free of charge and others for a fee.
                  Fees, currency, billing periods, and payment terms for paid
                  Services are set out in the applicable Order Form. Unless the
                  Order Form states otherwise, fees are exclusive of applicable
                  taxes, invoices are payable within the stated period, and
                  subscriptions renew for successive terms unless cancelled.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Free Services and free tiers are provided without a commitment to
                  keep them free, and we may introduce usage limits or charges for
                  currently free features on reasonable notice. If a free limit is
                  exceeded, we may ask you to upgrade or may limit further use.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  14. Availability, changes, and suspension
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We aim to keep the Services available but do not guarantee
                  uninterrupted or error-free operation. We may change the Services
                  to improve them, maintain security, or comply with law. We will
                  not materially reduce the core functionality of a paid Service
                  during a committed subscription term without notice, and we will
                  give reasonable advance notice of a planned discontinuation, with
                  an opportunity to export data.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  We may suspend access where reasonably necessary because of a
                  security incident, unauthorized or unlawful use, a credible risk
                  to individuals, non-payment, excessive resource use, a binding
                  legal request, or a serious breach. Where reasonably possible we
                  will notify the Customer, explain the reason, limit suspension to
                  the affected accounts or functionality, preserve Customer Data,
                  and restore access once the issue is resolved.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  15. Warranties and disclaimers
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We warrant that the Services will materially conform to their
                  documentation, will be provided with reasonable skill and care,
                  and will be supported by appropriate security measures, and that
                  we have the authority to enter into the Agreement. We will address
                  material, reproducible defects that are reported to us.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Except as stated above and to the extent permitted by law, the
                  Services are provided without other warranties. In particular we
                  do not warrant uninterrupted availability, the accuracy of
                  Customer-submitted or third-party data, particular outcomes from
                  sustainability programmes, regulatory approval or certification,
                  suitability for purposes we have not been told about, or decisions
                  made independently by Customers.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  16. Limitation of liability
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  To the extent permitted by law, neither party is liable for
                  indirect or consequential loss, or for loss of profits, revenue,
                  goodwill, or anticipated savings.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Subject to the exclusions below, each party&apos;s total
                  aggregate liability arising out of or relating to the Agreement
                  will not exceed the fees paid or payable by the Customer for the
                  Services during the twelve months before the event giving rise to
                  the liability. For Services used free of charge, that aggregate
                  liability will not exceed 100 euros.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  These limits do not apply to liability that cannot be excluded or
                  limited under applicable law, including liability for intent or
                  willful misconduct.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  17. Indemnification
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  The Customer will defend Shamba against third-party claims to the
                  extent they arise from Customer Data infringing a third
                  party&apos;s rights, the Customer&apos;s unlawful collection or
                  use of personal data, or the Customer&apos;s use of the Services
                  in material breach of the Agreement, and will pay resulting
                  damages finally awarded or agreed in settlement.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  We will defend the Customer against third-party claims that the
                  Shamba software, as provided by us, infringes a third
                  party&apos;s intellectual property rights, subject to customary
                  remedies and exclusions. In each case the indemnified party will
                  give prompt notice, allow the indemnifying party to control the
                  defence, cooperate reasonably, and not settle in a way that admits
                  fault or imposes obligations without consent. Each party will take
                  reasonable steps to mitigate.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  18. Term and termination
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  The Customer may terminate at the end of the agreed subscription,
                  for an uncured material breach by us, if we materially discontinue
                  paid functionality, or as provided in an Order Form. We may
                  terminate for an uncured material breach, for non-payment after
                  notice, immediately for serious security or unlawful use, or if
                  continuing to provide the Services becomes unlawful. Free Services
                  may be terminated by either party on reasonable notice.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  On termination, access is deactivated, outstanding fees remain
                  due, and the Customer may export its data during a retrieval
                  period as described in Section 19, after which we delete it
                  subject to backups expiring. Provisions that by their nature
                  survive, including confidentiality, intellectual property,
                  liability, and dispute resolution, continue after termination.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  19. Data export and switching
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Consistent with the EU Data Act, the Customer may switch to
                  another service or to its own infrastructure. On request we will
                  provide the Customer&apos;s exportable data and digital assets in
                  a commonly used, machine-readable format, describe any known
                  technical restrictions, and provide reasonable migration
                  assistance. Any notice period to start switching will not exceed
                  two months, the switching transition will be completed within 30
                  calendar days unless technically unfeasible, and the Customer will
                  have at least 30 calendar days after the transition to retrieve
                  its data, after which we erase it. Any switching charges will not
                  exceed the costs directly related to switching, and from 12
                  January 2027 we will not impose switching charges.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  20. Assignment and business succession
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  You may not assign or transfer your rights or obligations under
                  the Agreement without our prior written consent.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  We may assign or transfer the Agreement to an entity that acquires
                  or succeeds to the business operating the Services, including a
                  newly incorporated affiliated company, provided that the transfer
                  does not materially reduce your rights under the Agreement. You
                  agree in advance to cooperate with such a transfer to the extent
                  permitted by applicable law. We will notify you of the identity
                  and contact details of the new contracting entity before or
                  promptly following the transfer.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  21. General
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Beta features</strong> may be offered with limited
                    commitments and are clearly labelled.
                  </li>
                  <li>
                    <strong>Support</strong> is provided through the channels and
                    within the expectations we publish or agree.
                  </li>
                  <li>
                    <strong>Subcontracting.</strong> We may use subprocessors and
                    subcontractors while remaining responsible for the contracted
                    performance.
                  </li>
                  <li>
                    <strong>Force majeure.</strong> Neither party is liable for
                    delay or failure caused by events outside its reasonable
                    control.
                  </li>
                  <li>
                    <strong>Notices</strong> are given in writing, including by
                    email to the address associated with the account or the
                    contact address in Section 24.
                  </li>
                  <li>
                    <strong>Severability and waiver.</strong> If a provision is
                    unenforceable, the rest remains in effect, and a failure to
                    enforce a right is not a waiver of it.
                  </li>
                  <li>
                    <strong>Independent contractors.</strong> The Agreement creates
                    no agency, partnership, or employment relationship.
                  </li>
                  <li>
                    <strong>Export controls and sanctions.</strong> Each party will
                    comply with applicable export control and sanctions laws.
                  </li>
                  <li>
                    <strong>Anti-bribery.</strong> Each party will comply with
                    applicable anti-bribery and anti-corruption laws.
                  </li>
                  <li>
                    <strong>Publicity.</strong> We will not publish a Customer&apos;s
                    name or logo without its permission.
                  </li>
                  <li>
                    <strong>No third-party beneficiaries</strong>, except as
                    expressly stated.
                  </li>
                  <li>
                    <strong>Language.</strong> If we provide a translation, the
                    English version prevails in the event of a conflict, unless
                    mandatory law requires otherwise.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  22. Changes to these Terms
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We may update these Terms to reflect changes in the Services, our
                  practices, or the law. For material changes we will give
                  reasonable advance notice, normally at least 30 days, and we will
                  not apply changes retroactively. For active paid Customers we will
                  not rely on website posting alone as notice, and a Customer may
                  terminate before a materially adverse change takes effect. We may
                  make immediate changes only where required by law or urgently
                  needed for security.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  23. Governing law and jurisdiction
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Dutch law applies to the Agreement. The courts of Amsterdam, the
                  Netherlands, have exclusive jurisdiction over disputes arising
                  from it. This does not affect any mandatory rights or jurisdiction
                  available to a consumer under applicable law, and a choice of
                  Dutch law does not deprive a qualifying consumer of the mandatory
                  protections of their country of habitual residence.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  24. Contact
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Shamba is currently operated by:
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
                      href="mailto:legal@shamba.com"
                      className="text-primary underline-offset-4 transition-colors duration-200 hover:text-primary/90 hover:underline"
                    >
                      legal@shamba.com
                    </Link>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
