"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import ClientMarquee from "@/components/client-marquee";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "calc(52px + var(--spacing-09))",
        paddingBottom: "var(--spacing-14)",
        paddingLeft: "var(--spacing-07)",
        paddingRight: "var(--spacing-07)",
      }}
    >
      {/* IBM-style grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.02,
          backgroundImage:
            "linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(#000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* Minimal accent shapes */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: "280px",
          height: "280px",
          backgroundColor: "black",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "250px",
          height: "250px",
          backgroundColor: "var(--red-90)",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Tagline */}
        <div
          style={{
            display: "inline-block",
            padding: "8px 12px",
            marginBottom: "var(--spacing-07)",
            backgroundColor: "transparent",
            border: "1px solid #ccc",
            color: "black",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          ← Transforming Industries & Systems
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontSize: "64px",
            lineHeight: "72px",
            fontWeight: 700,
            color: "black",
            marginBottom: "var(--spacing-06)",
            maxWidth: "900px",
            letterSpacing: "-1px",
          }}
        >
          Multisectoral Insight.<br />Global Execution.
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: "18px",
            lineHeight: "28px",
            color: "#525252",
            marginBottom: "var(--spacing-09)",
            maxWidth: "700px",
            fontWeight: 400,
          }}
        >
          Baswara Consulting brings 26+ years of experience across global industry
          and national health reform into integrated, actionable strategy.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "var(--spacing-04)",
            marginBottom: "var(--spacing-11)",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 h-12 text-sm font-600 text-white bg-black hover:bg-gray-900 transition-colors rounded"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              border: "none",
            }}
          >
            Book Intro Call
          </Link>
          <Link
            href="/insights"
            className="inline-flex items-center justify-center px-6 h-12 text-sm font-600 text-black border border-gray-300 bg-white hover:bg-gray-50 transition-colors rounded"
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Explore Insights
          </Link>
        </div>
      </div>

      {/* Client logos */}
      <div
        style={{
          width: "100%",
          paddingTop: "var(--spacing-09)",
          borderTop: "1px solid var(--gray-30)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "var(--text-02)",
            marginBottom: "var(--spacing-06)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            fontWeight: 500,
          }}
        >
          Trusted by leading organizations worldwide
        </p>
        <ClientMarquee />
      </div>
    </section>
  );
}
