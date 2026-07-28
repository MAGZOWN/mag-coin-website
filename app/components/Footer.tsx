import type { CSSProperties, ReactNode } from "react";

import { foundationData } from "../data/foundationData";
import {
  MAG_FACEBOOK_URL,
  MAG_GITHUB_URL,
  MAG_INSTAGRAM_URL,
  MAG_REDDIT_URL,
  MAG_TELEGRAM_URL,
  MAG_X_URL,
} from "../ecosystem/lib/config";

type SocialLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open MAG COIN on ${label}`}
      title={`MAG COIN on ${label}`}
      className="navLink cardHover"
      style={styles.socialLink}
    >
      <span style={styles.socialIcon} aria-hidden="true">
        {icon}
      </span>

      <span>{label}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.topBorder} />

        <h3 className="goldGradient" style={styles.title}>
          MAG COIN
        </h3>

        <p style={styles.motto}>
          Built with Integrity. Trusted for Generations.
        </p>

        <div style={styles.links}>
          <a href="/" className="navLink" style={styles.link}>
            Home
          </a>

          <a href="/about" className="navLink" style={styles.link}>
            About
          </a>

          <a href="/whitepaper" className="navLink" style={styles.link}>
            Whitepaper
          </a>

          <a href="/transparency" className="navLink" style={styles.link}>
            Transparency
          </a>

          <a href="/audit" className="navLink" style={styles.link}>
            Audit
          </a>

          <a href="/security" className="navLink" style={styles.link}>
            Security
          </a>

          <a href="/portfolio" className="navLink" style={styles.link}>
            Portfolio
          </a>

          <a href="/treasury" className="navLink" style={styles.link}>
            Treasury
          </a>
        </div>

        <section style={styles.socialSection} className="magCard cardHover">
          <h4 style={styles.socialTitle}>Official Communication Channels</h4>

          <p style={styles.socialNotice}>
            Only trust announcements published through the official channels
            listed below.
          </p>

          <a
            href="mailto:info@coinmagbase.com"
            style={styles.officialEmail}
            aria-label="Email MAG COIN at info@coinmagbase.com"
          >
            info@coinmagbase.com
          </a>

          <div style={styles.socialLinks}>
            <SocialLink href={MAG_X_URL} label="X" icon={<XIcon />} />

            <SocialLink
              href={MAG_TELEGRAM_URL}
              label="Telegram"
              icon={<TelegramIcon />}
            />

            <SocialLink
              href={MAG_FACEBOOK_URL}
              label="Facebook"
              icon={<FacebookIcon />}
            />

            <SocialLink
              href={MAG_INSTAGRAM_URL}
              label="Instagram"
              icon={<InstagramIcon />}
            />

            <SocialLink
              href={MAG_REDDIT_URL}
              label="Reddit"
              icon={<RedditIcon />}
            />

            <SocialLink
              href={MAG_GITHUB_URL}
              label="GitHub"
              icon={<GitHubIcon />}
            />
          </div>
        </section>

        <p style={styles.disclaimer}>
          MAG COIN does not promise guaranteed returns, future prices, or
          investment outcomes. Cryptocurrency and blockchain projects involve
          risk. Always conduct your own independent research before making any
          financial decisions.
        </p>

        <p style={styles.values}>
          Transparency • Security • Long-term Stewardship • Responsible
          Development
        </p>

        <div style={styles.divider} />

        <p style={styles.copyright}>
          © 2026 MAG COIN Foundation. All rights reserved.
        </p>

        <p style={styles.version}>
          Website Version {foundationData.websiteVersion}
        </p>
      </div>
    </footer>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.546l-5.126-6.702L5.22 22H1.96l7.606-8.694L1.55 2h6.712l4.633 6.125L18.244 2Zm-1.143 17.91h1.804L7.282 3.986H5.346L17.101 19.91Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.8 3.2 18.6 20c-.24 1.19-.88 1.48-1.79.92l-4.87-3.59-2.35 2.26c-.26.26-.48.48-.98.48l.35-4.96 9.03-8.16c.39-.35-.09-.55-.61-.2L6.22 13.78 1.41 12.28c-1.05-.33-1.07-1.05.22-1.55L20.44 3.48c.87-.32 1.63.2 1.36-.28Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 8.5V6.8c0-.76.5-.94.86-.94H17V2.1L14.04 2C10.75 2 10 4.47 10 6.05V8.5H8v4h2V22h4v-9.5h2.64l.36-4H14Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.62 4.28 15.4 7.9c1.63.12 3.12.62 4.24 1.4a2.17 2.17 0 1 1 1.22 3.85c.03.22.04.44.04.67 0 3.29-3.98 5.96-8.9 5.96s-8.9-2.67-8.9-5.96c0-.23.02-.45.05-.67A2.17 2.17 0 1 1 4.36 9.3c1.15-.8 2.67-1.3 4.33-1.41l.93-4.38a.74.74 0 0 1 .88-.57l3.4.72a1.72 1.72 0 1 1 .72.62ZM8.47 12.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm7.06 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm-7.02 3.72a.65.65 0 0 0-.08.91c.86 1.03 2.16 1.53 3.57 1.53 1.4 0 2.7-.5 3.57-1.53a.65.65 0 0 0-.99-.84c-.6.71-1.55 1.07-2.58 1.07-1.04 0-1.98-.36-2.58-1.07a.65.65 0 0 0-.91-.07Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.93c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9v2.8c0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

const styles: Record<string, CSSProperties> = {
  footer: {
    background: "#050505",
    padding: "40px 24px 30px",
    marginTop: "60px",
  },

  inner: {
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },

  topBorder: {
    width: "120px",
    height: "3px",
    background: "#f5c542",
    margin: "0 auto 28px",
    borderRadius: "999px",
  },

  title: {
    fontSize: "34px",
    fontWeight: 900,
    margin: 0,
  },

  motto: {
    color: "#d9d9d9",
    marginTop: "12px",
    marginBottom: "28px",
    fontSize: "15px",
    lineHeight: 1.7,
  },

  links: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "32px",
  },

  link: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
  },

  socialSection: {
    padding: "24px 20px",
    marginBottom: "30px",
    border: "1px solid rgba(245,197,66,0.22)",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(245,197,66,0.065), rgba(255,255,255,0.018))",
    boxShadow: "0 22px 55px rgba(0,0,0,0.28)",
  },

  socialTitle: {
    color: "#f5c542",
    fontSize: "17px",
    fontWeight: 800,
    margin: "0 0 8px",
  },

  socialNotice: {
    color: "#a9a9a9",
    fontSize: "13px",
    lineHeight: 1.7,
    margin: "0 0 20px",
  },

  officialEmail: {
    display: "inline-block",
    margin: "0 0 20px",
    color: "#f5c542",
    fontSize: "14px",
    fontWeight: 800,
    textDecoration: "none",
    overflowWrap: "anywhere",
  },

  socialLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
  },

  socialLink: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    minHeight: "42px",
    padding: "8px 15px",
    color: "#ffffff",
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))",
    border: "1px solid rgba(245,197,66,0.35)",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 8px 22px rgba(0,0,0,0.24)",
  },

  socialIcon: {
    width: "20px",
    height: "20px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#f5c542",
    flexShrink: 0,
  },

  disclaimer: {
    color: "#a9a9a9",
    fontSize: "13px",
    lineHeight: 1.8,
    marginBottom: "18px",
  },

  values: {
    color: "#f5c542",
    fontSize: "12px",
    letterSpacing: "1px",
    marginBottom: "22px",
    fontWeight: 700,
    textTransform: "uppercase",
  },

  divider: {
    width: "100%",
    height: "1px",
    background: "rgba(255,255,255,.08)",
    margin: "24px 0",
  },

  copyright: {
    color: "#7a7a7a",
    fontSize: "12px",
    marginBottom: "8px",
  },

  version: {
    color: "#5d5d5d",
    fontSize: "11px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
};

