import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Shamba",
  description:
    "The Terms of Service governing your access to and use of Shamba's platform, website, mobile applications, and related services.",
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
                Last updated: April 30, 2026
              </p>
            </div>

            <div className="space-y-8 [&_section]:space-y-3">
              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  1. Introduction
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Welcome to Shamba, a platform operated by Shamba (&quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions
                  (&quot;Terms&quot;) govern your access to and use of our
                  services, including our website, mobile applications, and
                  related services (collectively, the &quot;Services&quot;).
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  By accessing or using our Services, you agree to be bound by
                  these Terms. If you do not agree to these Terms, please do not
                  use our Services.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  2. About Our Services
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Shamba is a digital platform designed to support sustainable
                  agriculture and land management. Our Services enable farmers,
                  organizations, and partners to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Register and manage farm plots and agricultural data</li>
                  <li>
                    Track and monitor environmental and agricultural metrics
                  </li>
                  <li>
                    Collaborate with partner organizations and stakeholders
                  </li>
                  <li>Access tools for data collection and analysis</li>
                  <li>
                    Participate in sustainability programs and initiatives
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  3. Account Registration and Use
                </h2>
                <h3 className="mb-2 text-lg font-medium text-foreground">
                  3.1 Account Creation
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  To access certain features of our Services, you must create an
                  account. You agree to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information as necessary</li>
                  <li>
                    Keep your account secure, including the device and email
                    inbox or phone number used to receive one-time login codes
                  </li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Be responsible for all activities under your account</li>
                </ul>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  3.2 Account Eligibility
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You must be at least 18 years old to create an account. By
                  creating an account, you represent that you meet this age
                  requirement and have the legal capacity to enter into these
                  Terms.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  4. User Content and Data
                </h2>
                <h3 className="mb-2 text-lg font-medium text-foreground">
                  4.1 Your Content
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You retain ownership of all data, information, and content you
                  submit to our Services (&quot;User Content&quot;). By
                  submitting User Content, you grant us a worldwide,
                  non-exclusive, royalty-free license to use, store, process, and
                  display your User Content solely for the purpose of providing
                  and improving our Services.
                </p>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  4.2 Data Accuracy
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You are responsible for ensuring the accuracy and completeness
                  of any data you submit. We rely on the accuracy of your data to
                  provide our Services effectively.
                </p>

                <h3 className="mb-2 mt-4 text-lg font-medium text-foreground">
                  4.3 Prohibited Content
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  You agree not to submit User Content that:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Violates any applicable law or regulation</li>
                  <li>Infringes on intellectual property rights of others</li>
                  <li>Contains malicious code or harmful software</li>
                  <li>Is fraudulent, false, or misleading</li>
                  <li>Violates the privacy rights of others</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  5. Privacy and Data Protection
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Your privacy is important to us. Our collection, use, and
                  protection of your personal data is governed by our{" "}
                  <Link
                    href="/privacy"
                    className="text-primary underline-offset-4 transition-colors duration-200 hover:text-primary/90 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  , which is incorporated into these Terms by reference.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  6. Intellectual Property
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  All intellectual property rights in the Services, including but
                  not limited to software, designs, trademarks, and content
                  created by us, belong to Shamba or our licensors. You may not
                  copy, modify, distribute, or create derivative works based on
                  our Services without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  7. Acceptable Use
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  You agree to use our Services only for lawful purposes and in
                  accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    Use the Services in any way that violates applicable laws or
                    regulations
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    Services
                  </li>
                  <li>
                    Interfere with or disrupt the Services or servers or networks
                  </li>
                  <li>
                    Use automated systems to access the Services without
                    permission
                  </li>
                  <li>Impersonate any person or entity</li>
                  <li>Harass, abuse, or harm other users</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  8. Service Availability
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  While we strive to maintain continuous availability, we do not
                  guarantee that the Services will be uninterrupted or
                  error-free. We reserve the right to modify, suspend, or
                  discontinue any part of the Services at any time, with or
                  without notice.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  9. Third-Party Services
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Our Services may contain links to or integrate with third-party
                  websites, applications, or services. We are not responsible for
                  the content, privacy policies, or practices of any third-party
                  services. Your use of third-party services is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  10. Limitation of Liability
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  To the maximum extent permitted by law, Shamba and its
                  affiliates, officers, directors, employees, and agents shall
                  not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, or any loss of profits or
                  revenues, whether incurred directly or indirectly, or any loss
                  of data, use, goodwill, or other intangible losses resulting
                  from:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    Your access to or use of (or inability to use) the Services
                  </li>
                  <li>
                    Any conduct or content of any third party on the Services
                  </li>
                  <li>Any content obtained from the Services</li>
                  <li>Unauthorized access, use, or alteration of your data</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  11. Indemnification
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  You agree to indemnify, defend, and hold harmless Shamba and
                  its affiliates, officers, directors, employees, and agents from
                  and against any claims, liabilities, damages, losses, and
                  expenses, including reasonable attorney&apos;s fees, arising out
                  of or in any way connected with:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Your access to or use of the Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your User Content</li>
                  <li>Your violation of any third-party rights</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  12. Termination
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We may terminate or suspend your account and access to the
                  Services immediately, without prior notice or liability, for
                  any reason, including if you breach these Terms. Upon
                  termination, your right to use the Services will immediately
                  cease.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  You may also terminate your account at any time by contacting
                  us. All provisions of these Terms which by their nature should
                  survive termination shall survive, including ownership
                  provisions, warranty disclaimers, indemnity, and limitations of
                  liability.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  13. Governing Law
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  These Terms shall be governed by and construed in accordance
                  with the laws of the Netherlands, without regard to its
                  conflict of law provisions. Any disputes arising from these
                  Terms or your use of the Services shall be subject to the
                  exclusive jurisdiction of the courts of the Netherlands.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  14. Changes to Terms
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We reserve the right to modify these Terms at any time. We will
                  notify you of any material changes by posting the new Terms on
                  this page and updating the &quot;Last updated&quot; date. Your
                  continued use of the Services after any changes constitutes your
                  acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  15. Contact Information
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  If you have any questions about these Terms, please contact us
                  at:
                </p>
                <div className="mt-3 rounded-lg border border-border bg-muted px-4 py-3">
                  <p className="font-medium text-muted-foreground">Shamba</p>
                  <p className="text-muted-foreground">
                    Email: legal@shamba.com
                  </p>
                  <p className="text-muted-foreground">
                    Chamber of Commerce (KvK): 72367334
                  </p>
                  <p className="text-muted-foreground">
                    Registered in the Netherlands
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  16. Entire Agreement
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  These Terms, together with our Privacy Policy, constitute the
                  entire agreement between you and Shamba regarding the use of our
                  Services and supersede any prior agreements.
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
