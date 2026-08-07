import type { CSSProperties } from "react";
import {
  Body,
  Button,
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

interface ContactConfirmationProps {
  email: string;
}

const INK = "#1F3D2B";
const BODY_TEXT = "#4A4A4A";
const MUTED = "#7A7A7A";
const BORDER = "#E4E1D8";

const styles: Record<string, CSSProperties> = {
  body: {
    backgroundColor: "#F6F5F1",
    fontFamily: "system-ui, -apple-system, sans-serif",
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: "520px",
    margin: "0 auto",
    padding: "40px 24px",
  },
  card: {
    backgroundColor: "#FFFFFF",
    border: `1px solid ${BORDER}`,
    borderRadius: "8px",
    padding: "40px",
  },
  heading: {
    color: INK,
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: 1.3,
    margin: "0 0 20px",
  },
  paragraph: {
    color: BODY_TEXT,
    fontSize: "16px",
    lineHeight: 1.6,
    margin: "0 0 20px",
  },
  button: {
    backgroundColor: INK,
    borderRadius: "6px",
    color: "#FFFFFF",
    display: "inline-block",
    fontSize: "15px",
    fontWeight: 600,
    padding: "13px 28px",
    textDecoration: "none",
  },
  link: {
    color: INK,
    textDecoration: "underline",
  },
  footer: {
    color: MUTED,
    fontSize: "12px",
    lineHeight: 1.6,
    margin: "24px 0 0",
    textAlign: "center",
  },
};

export function ContactConfirmation({ email }: ContactConfirmationProps) {
  return (
    <Html>
      {/* Opt out of mail-client auto-invert in dark mode. iOS Mail,
          Apple Mail, Outlook iOS honor `color-scheme: light only`;
          without it they re-paint our warm palette as muddy darks. */}
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>Thanks for reaching out. We&apos;ll be in touch shortly.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.card}>
            <Img
              src="https://shamba.com/logo.png"
              width="110"
              alt="Shamba"
              style={{ marginBottom: "28px" }}
            />

            <Heading style={styles.heading}>Thanks for reaching out.</Heading>

            <Text style={styles.paragraph}>
              We received your message and will reply at{" "}
              <strong style={{ color: INK }}>{email}</strong> shortly.
            </Text>

            <Text style={styles.paragraph}>
              In the meantime, you can explore Shamba yourself in the live demo.
            </Text>

            <Button href="https://demo.shamba.com" style={styles.button}>
              Start demo
            </Button>

            <Hr style={{ borderColor: BORDER, margin: "32px 0 20px" }} />

            <Text style={{ ...styles.paragraph, fontSize: "15px", margin: 0 }}>
              Questions? Reply to this email or write to{" "}
              <Link href="mailto:info@shamba.com" style={styles.link}>
                info@shamba.com
              </Link>
              .
            </Text>
          </Section>

          <Text style={styles.footer}>
            &copy; {new Date().getFullYear()} Shamba. You&apos;re receiving this
            because you contacted us at{" "}
            <Link href="https://shamba.com" style={{ color: MUTED }}>
              shamba.com
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
