"use client";

import { MotionWrapper, StaggerChildren, StaggerItem } from "./motion-wrapper";

const capabilities = [
  {
    title: "Websites & Brand Sites",
    description:
      "Cinematic marketing sites and conversion-focused experiences that introduce your company with clarity and presence.",
    icon: "◈",
  },
  {
    title: "Custom Business Software",
    description:
      "Purpose-built apps for the way your team actually works — not another off-the-shelf tool that fights your process.",
    icon: "◇",
  },
  {
    title: "Workflow & Ops Systems",
    description:
      "Pipelines, approvals, tasking, and status tracking that replace spreadsheets and scattered chat threads.",
    icon: "○",
  },
  {
    title: "CRM & Client Portals",
    description:
      "Lead intake, relationship management, and secure client spaces that keep projects and communication in one place.",
    icon: "△",
  },
  {
    title: "Integrations & Automation",
    description:
      "Connect Stripe, email, calendars, inventory, and internal data so work moves without manual handoffs.",
    icon: "□",
  },
  {
    title: "Dashboards & Reporting",
    description:
      "Live views of pipeline, delivery, and performance so leaders and teams can act on the same source of truth.",
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
            Software for the way your company actually works.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            From public-facing sites to the systems behind the scenes — we
            design and engineer tools that reduce friction across your process.
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
