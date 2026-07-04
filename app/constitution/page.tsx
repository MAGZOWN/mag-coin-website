import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ConstitutionHero from "../components/ConstitutionHero";
import ConstitutionArticles from "../components/ConstitutionArticles";
import FoundationPrinciples from "../components/FoundationPrinciples";
import ConstitutionCommitment from "../components/ConstitutionCommitment";

export default function Constitution() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <ConstitutionHero />

          <ConstitutionArticles />

          <FoundationPrinciples />

          <ConstitutionCommitment />
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
      "radial-gradient(circle at top, #171717 0%, #050505 45%, #000000 100%)",
    color: "#ffffff",
    padding: "60px 24px 0",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
};
