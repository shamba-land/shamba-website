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
        Welcome to Shamba.land. Thanks for joining the waitlist.
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
            Welcome aboard.
          </Heading>

          <Text
            style={{
              color: "#4A4A4A",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0 0 16px",
            }}
          >
            Thanks for your interest in Shamba.land.
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

          {/* About the product */}
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
              About Shamba
            </Text>
            <Text
              style={{
                color: "#4A4A4A",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: "0 0 16px",
              }}
            >
              Shamba is the platform for organizations that support
              smallholder farmers. In one place, you can:
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
              <strong style={{ color: "#2F5D3A" }}>Register farmers and map their land</strong>
              {" "}even offline, out in the field
              <br />
              <strong style={{ color: "#2F5D3A" }}>Run surveys, training, and input distributions</strong>
              {" "}from one shared record
              <br />
              <strong style={{ color: "#2F5D3A" }}>Prove impact and compliance</strong>
              {" "}to buyers, certifiers, and funders
              <br />
              <strong style={{ color: "#2F5D3A" }}>Keep a lasting record</strong>
              {" "}that follows each farmer over time
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
              Working with us
            </Text>
            <Text
              style={{
                color: "#4A4A4A",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              We onboard organizations as design partners. You&apos;ll
              receive periodic product updates and an invitation to
              schedule a walkthrough when there&apos;s a fit with your
              programs.
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
              &bull; Priority access to new releases
              <br />
              &bull; Periodic product updates
              <br />
              &bull; Preferred pricing for design partners
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
