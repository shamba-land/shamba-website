import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Shamba",
  description:
    "How Shamba collects, uses, discloses, and safeguards your information when you use the Shamba platform and related services.",
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
                Last updated: April 30, 2026
              </p>
            </div>

            <div className="space-y-8 [&_section]:space-y-3">
              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  1. Introduction
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Shamba (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
                  committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you use our Shamba platform and related
                  services (collectively, the &quot;Services&quot;).
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Please read this Privacy Policy carefully. By using our
                  Services, you agree to the collection and use of information in
                  accordance with this policy. If you do not agree with our
                  policies and practices, please do not use our Services.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  2. Information We Collect
                </h2>
                <h3 className="mb-2 text-lg font-medium text-foreground">
                  2.1 Information You Provide Directly
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Account Information:</strong> Name, email address
                    and/or phone number (for one-time-code login), organization
                    details, and contact information
                  </li>
                  <li>
                    <strong>Profile Information:</strong> User preferences, role
                    within organization, and professional details
                  </li>
                  <li>
                    <strong>Farm and Plot Data:</strong> Geographic coordinates,
                    plot boundaries, farm details, farmer information, and
                    agricultural data
                  </li>
                  <li>
                    <strong>Communications:</strong> Messages, feedback, and
                    support requests you send to us
                  </li>
                  <li>
                    <strong>Consent Records:</strong> Records of farmer consent
                    for data collection and processing
                  </li>
                </ul>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  2.2 Information Collected Automatically
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  When you use our Services, we automatically collect certain
                  information, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Device Information:</strong> IP address, browser
                    type, operating system, device identifiers
                  </li>
                  <li>
                    <strong>Usage Information:</strong> Pages viewed, features
                    used, time spent on pages, and navigation patterns
                  </li>
                  <li>
                    <strong>Location Data:</strong> Geographic location data from
                    GPS-enabled devices when you use location-based features
                  </li>
                  <li>
                    <strong>Cookies and Similar Technologies:</strong>{" "}
                    Information collected through cookies, web beacons, and
                    similar tracking technologies
                  </li>
                </ul>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  2.3 Information from Third Parties
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  We may receive information about you from third parties, such
                  as:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    Partner organizations who invite you to use our Services
                  </li>
                  <li>
                    Publicly available sources for verification and validation
                    purposes
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  3. How We Use Your Information
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Service Provision:</strong> To provide, maintain, and
                    improve our Services, including processing transactions and
                    managing your account
                  </li>
                  <li>
                    <strong>Communication:</strong> To send you technical
                    notices, updates, security alerts, and support messages
                  </li>
                  <li>
                    <strong>Analytics and Research:</strong> To understand how
                    users interact with our Services and to develop new features
                    and improvements
                  </li>
                  <li>
                    <strong>Data Aggregation:</strong> To create anonymized,
                    aggregated data for research, reporting, and sustainability
                    impact assessment
                  </li>
                  <li>
                    <strong>Compliance:</strong> To comply with legal obligations
                    and enforce our terms and policies
                  </li>
                  <li>
                    <strong>Security:</strong> To detect, prevent, and address
                    technical issues, fraud, and security incidents
                  </li>
                  <li>
                    <strong>Collaboration:</strong> To facilitate collaboration
                    between farmers, organizations, and partners on our platform
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  4. Legal Basis for Processing (GDPR)
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  If you are in the European Economic Area (EEA), our legal basis
                  for collecting and using your personal information depends on
                  the data and the context:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Contract Performance:</strong> Processing necessary
                    to provide our Services to you
                  </li>
                  <li>
                    <strong>Consent:</strong> You have given explicit consent for
                    specific purposes (e.g., farmer data collection)
                  </li>
                  <li>
                    <strong>Legitimate Interests:</strong> Processing necessary
                    for our legitimate business interests, such as improving our
                    Services and preventing fraud
                  </li>
                  <li>
                    <strong>Legal Obligations:</strong> Processing necessary to
                    comply with legal requirements
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  5. How We Share Your Information
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We may share your information in the following circumstances:
                </p>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  5.1 Within Your Organization
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Information you submit is shared with other members of your
                  organization and partner organizations as necessary to provide
                  our collaborative Services.
                </p>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  5.2 Service Providers
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  We share information with third-party service providers who
                  perform services on our behalf, such as:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Cloud hosting and storage providers</li>
                  <li>Analytics and monitoring services</li>
                  <li>Email and communication services</li>
                </ul>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  5.3 Legal Requirements
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  We may disclose your information if required by law or in
                  response to valid requests by public authorities (e.g., court
                  orders, government agencies).
                </p>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  5.4 Business Transfers
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  If we are involved in a merger, acquisition, or sale of assets,
                  your information may be transferred. We will provide notice
                  before your information is transferred and becomes subject to a
                  different privacy policy.
                </p>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  5.5 Aggregated Data
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  We may share aggregated, anonymized data that cannot be used to
                  identify you with researchers, partners, and the public for
                  reporting on sustainability impact and agricultural trends.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  6. Data Retention
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We retain your information for as long as necessary to provide
                  our Services and fulfill the purposes described in this Privacy
                  Policy. When determining retention periods, we consider:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>The nature and sensitivity of the information</li>
                  <li>
                    The purposes for which we collected and processed the
                    information
                  </li>
                  <li>Legal and regulatory requirements</li>
                  <li>Our legitimate business interests</li>
                </ul>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  After the retention period, we will securely delete or
                  anonymize your information. Some information may be retained in
                  backup systems for a limited time.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  7. Data Security
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We implement appropriate technical and organizational security
                  measures to protect your information against unauthorized
                  access, alteration, disclosure, or destruction. These measures
                  include:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure. While we strive to protect
                  your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  8. Your Rights and Choices
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Depending on your location, you may have certain rights
                  regarding your personal information:
                </p>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  8.1 Access and Portability
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You have the right to access your personal information and, in
                  certain cases, receive a copy in a portable format.
                </p>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  8.2 Correction
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You have the right to correct inaccurate or incomplete personal
                  information.
                </p>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  8.3 Deletion
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You have the right to request deletion of your personal
                  information, subject to certain legal exceptions.
                </p>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  8.4 Objection and Restriction
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You have the right to object to certain processing of your
                  information and request restriction of processing in certain
                  circumstances.
                </p>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  8.5 Withdraw Consent
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Where we rely on consent, you have the right to withdraw it at
                  any time.
                </p>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  To exercise these rights, please contact us using the
                  information provided in Section 13. We will respond to your
                  request within the timeframe required by applicable law.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  9. Cookies and Tracking Technologies
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We use cookies and similar tracking technologies to collect and
                  track information and to improve our Services. Cookies are small
                  data files stored on your device. You can control cookies
                  through your browser settings.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  We use the following types of cookies:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Essential Cookies:</strong> Necessary for the
                    Services to function
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Remember your
                    preferences and settings
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how
                    users interact with our Services
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> Measure and improve
                    Service performance
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  10. International Data Transfers
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Your information may be transferred to and processed in
                  countries other than your country of residence. These countries
                  may have data protection laws different from those in your
                  country.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  When we transfer information from the EEA to other countries, we
                  use appropriate safeguards such as:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    Standard Contractual Clauses approved by the European
                    Commission
                  </li>
                  <li>Adequacy decisions by the European Commission</li>
                  <li>Other legally approved mechanisms</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  11. Children&apos;s Privacy
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Our Services are not intended for children under 18 years of
                  age. We do not knowingly collect personal information from
                  children. If you become aware that a child has provided us with
                  personal information, please contact us, and we will take steps
                  to delete such information.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  12. Changes to This Privacy Policy
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the new Privacy
                  Policy on this page and updating the &quot;Last updated&quot;
                  date. We may also provide additional notice (such as an email
                  notification) for significant changes.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Your continued use of our Services after any changes constitutes
                  your acceptance of the updated Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  13. Contact Us
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  If you have any questions, concerns, or requests regarding this
                  Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-3 rounded-lg border border-border bg-muted px-4 py-3">
                  <p className="font-medium text-muted-foreground">Shamba</p>
                  <p className="mt-2 font-medium text-muted-foreground">
                    Privacy Contact
                  </p>
                  <p className="text-muted-foreground">
                    Email: privacy@shamba.com
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  14. Supervisory Authority
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  If you are in the EEA and believe we have not addressed your
                  concerns adequately, you have the right to lodge a complaint
                  with your local data protection supervisory authority.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  15. Farmer Data Protection
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We are committed to protecting farmer data with the highest
                  standards:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    We collect farmer data only with explicit, informed consent
                  </li>
                  <li>
                    Farmers retain ownership of their data and can request
                    deletion at any time
                  </li>
                  <li>
                    Farmer data is used solely for agreed purposes related to
                    agricultural support and sustainability programs
                  </li>
                  <li>
                    We maintain detailed consent records for all farmer data
                    collection
                  </li>
                  <li>
                    Organizations can only access farmer data within their
                    projects and authorized scope
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
