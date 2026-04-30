import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WaitlistConfirmationProps {
  email: string;
}

export function WaitlistConfirmation({ email }: WaitlistConfirmationProps) {
  return (
    <Html>
      {/* Opt out of mail-client auto-invert in dark mode. iOS Mail,
          Apple Mail, Outlook iOS honor `color-scheme: light only`;
          without it they re-paint our warm palette as muddy darks. */}
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>
        Welcome to the Shamba.land waitlist — we&apos;re building something
        special for smallholder farmer support.
      </Preview>
      <Body
        style={{
          backgroundColor: "#F6F5F1",
          fontFamily: "system-ui, -apple-system, sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            padding: "48px 24px",
          }}
        >
          <Img
            src="https://shamba.land/logo.png"
            width="120"
            alt="Shamba.land"
            style={{ marginBottom: "32px" }}
          />

          <Heading
            style={{
              color: "#1F3D2B",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: 1.3,
              margin: "0 0 20px",
            }}
          >
            You&apos;re on the list!
          </Heading>

          <Text
            style={{
              color: "#4A4A4A",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0 0 16px",
            }}
          >
            Thank you for your interest in Shamba.land. We&apos;re excited to
            have you on board.
          </Text>

          <Text
            style={{
              color: "#4A4A4A",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0 0 24px",
            }}
          >
            We&apos;ll keep you updated at{" "}
            <strong style={{ color: "#1F3D2B" }}>{email}</strong>.
          </Text>

          {/* What we're building */}
          <Section
            style={{
              padding: "24px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E4E1D8",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <Text
              style={{
                color: "#1F3D2B",
                fontSize: "16px",
                fontWeight: 700,
                margin: "0 0 12px",
              }}
            >
              What we&apos;re building
            </Text>
            <Text
              style={{
                color: "#4A4A4A",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: "0 0 16px",
              }}
            >
              Shamba.land is a geospatial CRM designed specifically for
              organizations that support smallholder farmers. We&apos;re
              currently in active development, building a platform that
              combines:
            </Text>
            <Text
              style={{
                color: "#4A4A4A",
                fontSize: "14px",
                lineHeight: "2",
                margin: 0,
                paddingLeft: "8px",
              }}
            >
              <strong style={{ color: "#2F5D3A" }}>Geospatial mapping</strong>
              {" "}&mdash; Visualize farmer locations, field boundaries, and
              regional data on interactive maps
              <br />
              <strong style={{ color: "#2F5D3A" }}>Farmer profiles</strong>
              {" "}&mdash; Comprehensive relationship management tailored to
              agricultural organizations
              <br />
              <strong style={{ color: "#2F5D3A" }}>Mobile data collection</strong>
              {" "}&mdash; Offline-first app for field teams to capture data,
              photos, and GPS coordinates
              <br />
              <strong style={{ color: "#2F5D3A" }}>Impact analytics</strong>
              {" "}&mdash; Track program outcomes, adoption rates, and
              measurable impact
            </Text>
          </Section>

          {/* Current status */}
          <Section
            style={{
              padding: "24px",
              backgroundColor: "#EEECE6",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <Text
              style={{
                color: "#1F3D2B",
                fontSize: "16px",
                fontWeight: 700,
                margin: "0 0 12px",
              }}
            >
              Where we are now
            </Text>
            <Text
              style={{
                color: "#4A4A4A",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              We&apos;re a small team actively developing the platform. As an
              early waitlist member, you&apos;ll be among the first to get
              access when we launch. We&apos;ll send you occasional updates on
              our progress and invite you to provide feedback that will directly
              shape the product.
            </Text>
          </Section>

          {/* What's next */}
          <Section
            style={{
              padding: "24px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E4E1D8",
              borderRadius: "8px",
              marginBottom: "32px",
            }}
          >
            <Text
              style={{
                color: "#1F3D2B",
                fontSize: "16px",
                fontWeight: 700,
                margin: "0 0 12px",
              }}
            >
              What to expect
            </Text>
            <Text
              style={{
                color: "#4A4A4A",
                fontSize: "14px",
                lineHeight: "2",
                margin: 0,
                paddingLeft: "8px",
              }}
            >
              &bull; Priority early access when we launch
              <br />
              &bull; Periodic development updates (no spam)
              <br />
              &bull; Opportunity to provide input on features
              <br />
              &bull; Special pricing for early supporters
            </Text>
          </Section>

          <Text
            style={{
              color: "#4A4A4A",
              fontSize: "15px",
              lineHeight: "1.6",
              margin: "0 0 32px",
            }}
          >
            Have questions or want to learn more? Reply to this email or reach
            out to us at{" "}
            <Link
              href="mailto:info@shamba.land"
              style={{ color: "#2C5F7F", textDecoration: "underline" }}
            >
              info@shamba.land
            </Link>
            . We&apos;d love to hear from you.
          </Text>

          <Hr style={{ borderColor: "#E4E1D8", margin: "0 0 24px" }} />

          <Text
            style={{
              color: "#7A7A7A",
              fontSize: "12px",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} Shamba B.V. All rights reserved.
            <br />
            You&apos;re receiving this because you signed up for the waitlist at{" "}
            <Link
              href="https://shamba.land"
              style={{ color: "#7A7A7A" }}
            >
              shamba.land
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
