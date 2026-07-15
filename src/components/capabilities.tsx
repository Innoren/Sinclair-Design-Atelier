"use client";

import { MotionWrapper, StaggerChildren, StaggerItem } from "./motion-wrapper";

const capabilities = [
  {
    title: "Motion & Interaction",
    description:
      "Scroll-driven animations, micro-interactions, and cinematic transitions that make every visit feel alive.",
    icon: "◈",
  },
  {
    title: "Responsive Architecture",
    description:
      "Pixel-perfect on every device. Adaptive layouts that feel native to desktop, tablet, and mobile.",
    icon: "◇",
  },
  {
    title: "Performance Engineering",
    description:
      "Sub-3-second loads, optimized assets, and Core Web Vitals that rank — because speed is design.",
    icon: "○",
  },
  {
    title: "SEO & Analytics",
    description:
      "Structured data, semantic markup, and analytics dashboards so you know exactly what's working.",
    icon: "△",
  },
  {
    title: "E-Commerce Systems",
    description:
      "Shopify, Stripe, and custom checkout flows that turn beautiful design into reliable revenue.",
    icon: "□",
  },
  {
    title: "Content Management",
    description:
      "Headless CMS integrations that let your team publish, edit, and scale without touching code.",
    icon: "◎",
  },
];

function CapabilityCard({
  cap,
  index,
}: {
  cap: (typeof capabilities)[0];
  index: number;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/40">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="relative text-2xl text-accent">{cap.icon}</span>
      <h3 className="relative mt-5 font-display text-xl font-semibold leading-snug text-foreground">
        {cap.title}
      </h3>
      <p className="relative mt-3 text-sm leading-7 text-muted">
        {cap.description}
      </p>
      <span className="relative mt-6 inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
        0{index + 1} — Explore
      </span>
    </article>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="py-32 lg:py-40">
      <div className="site-container">
        <MotionWrapper className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            Capabilities
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-foreground">
            Creative tools to help you stand out online.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Every project is built with the same precision we&apos;d demand for
            our own brand — motion, performance, and craft in equal measure.
          </p>
        </MotionWrapper>

        <StaggerChildren className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <StaggerItem key={cap.title}>
              <CapabilityCard cap={cap} index={i} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
