"use client";

import type { CSSProperties, FormEvent } from "react";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <p style={styles.label}>MAG FOUNDATION</p>

          <h1 style={styles.title}>Contact MAG COIN</h1>

          <p style={styles.subtitle}>
            For official communication, project inquiries, documentation
            requests, or responsible reporting, please contact the MAG
            Foundation through this form.
          </p>

          <aside
            style={styles.officialContact}
            className="magCard cardHover fadeIn"
            aria-label="Official MAG COIN contact email"
          >
            <p style={styles.officialContactLabel}>OFFICIAL PROJECT EMAIL</p>

            <a
              href="mailto:info@coinmagbase.com"
              style={styles.emailLink}
              aria-label="Email MAG COIN at info@coinmagbase.com"
            >
              info@coinmagbase.com
            </a>

            <p style={styles.officialContactText}>
              Use this domain-based address for official project inquiries,
              documentation requests, responsible disclosures, and platform
              verification.
            </p>
          </aside>

          <form
            onSubmit={handleSubmit}
            style={styles.form}
            className="magCard cardHover fadeIn"
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={styles.hiddenField}
            />

            <label style={styles.field}>
              Name
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                style={styles.input}
              />
            </label>

            <label style={styles.field}>
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                style={styles.input}
              />
            </label>

            <label style={styles.field}>
              Subject
              <input
                name="subject"
                type="text"
                required
                placeholder="Message subject"
                style={styles.input}
              />
            </label>

            <label style={styles.field}>
              Message
              <textarea
                name="message"
                required
                placeholder="Write your message here..."
                rows={6}
                style={styles.textarea}
              />
            </label>

            <button
              type="submit"
              style={{
                ...styles.button,
                opacity: status === "sending" ? 0.7 : 1,
              }}
              className="primaryButton"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p style={styles.success}>
                Message sent successfully. MAG COIN will review it through the
                official contact email.
              </p>
            )}

            {status === "error" && (
              <p style={styles.error}>
                Message could not be sent. Please try again later.
              </p>
            )}

            <p style={styles.note}>
              Messages are delivered securely to the official MAG COIN contact
              email.
            </p>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#171717 0%,#050505 45%,#000000 100%)",
    color: "#ffffff",
    padding: "70px 24px 0",
  },

  container: {
    maxWidth: "820px",
    margin: "0 auto",
    textAlign: "center",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "4px",
    fontSize: "13px",
    fontWeight: 700,
    marginBottom: "18px",
  },

  title: {
    fontSize: "52px",
    lineHeight: "1.2",
    fontWeight: 800,
    marginBottom: "22px",
    background: "linear-gradient(180deg,#ffffff 0%,#f5c542 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.8",
    maxWidth: "760px",
    margin: "0 auto 42px",
  },

  officialContact: {
    marginBottom: "28px",
    padding: "26px",
    borderRadius: "20px",
    border: "1px solid rgba(245,197,66,.28)",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.08), rgba(5,5,5,.96))",
    boxShadow: "0 18px 42px rgba(0,0,0,.26)",
  },

  officialContactLabel: {
    margin: "0 0 10px",
    color: "#f5c542",
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: "2px",
  },

  emailLink: {
    display: "inline-block",
    color: "#ffffff",
    fontSize: "21px",
    fontWeight: 800,
    lineHeight: 1.5,
    textDecoration: "none",
    overflowWrap: "anywhere",
  },

  officialContactText: {
    maxWidth: "650px",
    margin: "12px auto 0",
    color: "#bdbdbd",
    fontSize: "14px",
    lineHeight: 1.75,
  },

  form: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "24px",
    padding: "34px",
    textAlign: "left",
    marginBottom: "70px",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
  },

  hiddenField: {
    display: "none",
  },

  field: {
    display: "block",
    color: "#f5c542",
    fontWeight: 700,
    marginBottom: "22px",
    fontSize: "14px",
  },

  input: {
    width: "100%",
    marginTop: "9px",
    padding: "15px 16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.05)",
    color: "#ffffff",
    fontSize: "15px",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    marginTop: "9px",
    padding: "15px 16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.05)",
    color: "#ffffff",
    fontSize: "15px",
    resize: "vertical",
    boxSizing: "border-box",
  },

  button: {
    background: "#f5c542",
    color: "#000",
    border: "2px solid #f5c542",
    borderRadius: "999px",
    padding: "15px 34px",
    fontWeight: 800,
    fontSize: "15px",
    cursor: "pointer",
  },

  success: {
    marginTop: "20px",
    color: "#22c55e",
    fontWeight: 700,
    lineHeight: "1.7",
  },

  error: {
    marginTop: "20px",
    color: "#ef4444",
    fontWeight: 700,
    lineHeight: "1.7",
  },

  note: {
    color: "#9ca3af",
    fontSize: "13px",
    lineHeight: "1.7",
    marginTop: "18px",
  },
};
