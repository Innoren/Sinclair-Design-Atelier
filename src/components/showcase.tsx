"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MotionWrapper } from "./motion-wrapper";

const projects = [
  {
    id: "pokecitizen",
    name: "PokeCitizen Collectibles",
    category: "Collectibles / E-Commerce",
    description:
      "Premium Pokémon card store with authentic graded cards, sealed product, and weekly new arrivals from every generation.",
    stats: ["500+ cards", "100% authentic", "Free shipping $200+"],
    gradient: "from-[#0a1020] via-[#1a2a4a] to-[#2d4570]",
    accent: "#f5c518",
    layout: "grid" as const,
    url: "https://pokecitizencollectibles.com/",
    embed: true,
  },
  {
    id: "boundlessly-teal",
    name: "Boundlessly Teal Coaching",
    category: "Coaching & Wellness",
    description:
      "Certified personal development coaching site that helps clients unlock potential, set meaningful goals, and step boldly into their next chapter.",
    stats: ["Booking-ready", "EN / ES", "Brand-led UX"],
    gradient: "from-[#e8f5f3] via-[#d4ebe8] to-[#e8e0f0]",
    accent: "#2d9a8e",
    layout: "split" as const,
    url: "https://boundlesslytealcoaching.com/",
    embed: false,
    previewDesktop: "/previews/boundlessly-teal-desktop.png",
    previewMobile: "/previews/boundlessly-teal-mobile.png",
  },
  {
    id: "harvest",
    name: "Harvest & Co.",
    category: "Food & Beverage",
    description:
      "Warm brand experience with online ordering, seasonal menus, and local SEO.",
    stats: ["+65% bookings", "Mobile-first", "Stripe integrated"],
    gradient: "from-[#1f1510] via-[#3d2b1f] to-[#7a5c44]",
    accent: "#d4a574",
    layout: "hero" as const,
  },
  {
    id: "atelier-ops",
    name: "Atelier Ops",
    category: "Workflow Software",
    description:
      "Custom operations suite for studios and service firms — pipeline, projects, invoices, and team tasks in one calm system.",
    stats: ["CRM + projects", "Role-based access", "Automation-ready"],
    gradient: "from-[#12100e] via-[#2a241c] to-[#4a3f32]",
    accent: "#c9a87c",
    layout: "split" as const,
  },
];

function SitePreview({
  url,
  name,
  variant,
  imageSrc,
}: {
  url: string;
  name: string;
  variant: "desktop" | "mobile";
  imageSrc?: string;
}) {
  if (imageSrc) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-white">
        <Image
          src={imageSrc}
          alt={`${name} ${variant} preview`}
          fill
          className="object-cover object-top"
          sizes={variant === "mobile" ? "112px" : "(max-width: 1024px) 100vw, 50vw"}
          priority={variant === "desktop"}
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Open ${name} in a new tab`}
        />
      </div>
    );
  }

  const isMobile = variant === "mobile";
  const scale = isMobile ? 0.28 : 0.5;
  const frameWidth = isMobile ? 390 : 1280;
  const frameHeight = isMobile ? 844 : 800;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a1020]">
      <iframe
        src={url}
        title={`${name} ${variant} preview`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="pointer-events-none absolute left-0 top-0 border-0 origin-top-left"
        style={{
          width: frameWidth,
          height: frameHeight,
          transform: `scale(${scale})`,
        }}
        tabIndex={-1}
        aria-hidden
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`Open ${name} in a new tab`}
      />
    </div>
  );
}

function AbstractLayout({
  project,
  isActive,
}: {
  project: (typeof projects)[0];
  isActive: boolean;
}) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />

      {project.layout === "grid" && (
        <div className="absolute inset-6 grid grid-cols-3 gap-3">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="rounded-lg bg-white/10 backdrop-blur-sm"
              style={{
                aspectRatio: i === 0 ? "2/1" : "1/1",
                gridColumn: i === 0 ? "span 2" : "span 1",
              }}
            />
          ))}
        </div>
      )}

      {project.layout === "split" && (
        <div className="absolute inset-6 flex gap-4">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
            className="w-1/2 rounded-lg bg-white/10 backdrop-blur-sm"
          />
          <div className="flex w-1/2 flex-col gap-3">
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={isActive ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
              transition={{ delay: 0.15 }}
              className="h-1/3 rounded-lg bg-white/10"
            />
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={isActive ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
              transition={{ delay: 0.25 }}
              className="flex-1 rounded-lg bg-white/10"
            />
          </div>
        </div>
      )}

      {project.layout === "hero" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            className="mb-4 h-16 w-16 rounded-full bg-white/20"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="h-4 w-48 rounded-full bg-white/30"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-3 h-3 w-32 rounded-full bg-white/15"
          />
        </div>
      )}

      <motion.div
        animate={isActive ? { x: ["-100%", "200%"] } : {}}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
      />
    </>
  );
}

function BrowserMockup({
  project,
  isActive,
}: {
  project: (typeof projects)[0];
  isActive: boolean;
}) {
  const hasLivePreview = Boolean(project.url && project.embed);
  const hasImagePreview = Boolean(
    project.url && ("previewDesktop" in project ? project.previewDesktop : false),
  );
  const hasPreview = hasLivePreview || hasImagePreview;
  const desktopImage =
    "previewDesktop" in project ? project.previewDesktop : undefined;
  const mobileImage =
    "previewMobile" in project ? project.previewMobile : desktopImage;

  return (
    <motion.div
      layout
      className="relative mx-auto w-full max-w-5xl"
      animate={isActive ? { scale: 1, rotateX: 0 } : { scale: 0.95, rotateX: 4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto flex-1 rounded-md bg-background/50 px-4 py-1 text-center text-[10px] text-muted transition-colors hover:text-foreground"
            >
              {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </a>
          ) : (
            <div className="mx-auto flex-1 rounded-md bg-background/50 px-4 py-1 text-center text-[10px] text-muted">
              {project.name.toLowerCase().replace(/\s/g, "")}.com
            </div>
          )}
        </div>

        <div
          className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient}`}
        >
          {hasPreview && project.url ? (
            <SitePreview
              url={project.url}
              name={project.name}
              variant="desktop"
              imageSrc={desktopImage}
            />
          ) : (
            <AbstractLayout project={project} isActive={isActive} />
          )}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 -bottom-6 hidden h-52 w-28 overflow-hidden rounded-[1.25rem] border border-border bg-surface-elevated shadow-xl lg:block"
      >
        <div className="flex h-full flex-col">
          <div className="flex shrink-0 justify-center py-1.5">
            <span className="h-1 w-8 rounded-full bg-border" />
          </div>
          <div className="relative min-h-0 flex-1">
            {hasPreview && project.url ? (
              <SitePreview
                url={project.url}
                name={project.name}
                variant="mobile"
                imageSrc={mobileImage}
              />
            ) : (
              <div className={`h-full bg-gradient-to-b ${project.gradient}`} />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Showcase() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="work" className="section-light py-32 lg:py-40">
      <div className="site-container">
        <MotionWrapper>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8a8680]">
            Selected work
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-light-fg">
            Products and sites engineered to work harder.
          </h2>
        </MotionWrapper>

        <div className="mt-16 flex flex-wrap gap-3">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium leading-normal transition-all duration-300 ${
                active === i
                  ? "bg-light-fg text-light-bg"
                  : "border border-[#d4d0c8] text-[#6b6560] hover:border-light-fg hover:text-light-fg"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                {project.category}
              </p>
              <h3 className="mt-3 font-display text-4xl font-bold leading-snug text-light-fg">
                {project.name}
              </h3>
              <p className="mt-5 text-lg leading-8 text-[#6b6560]">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.stats.map((stat) => (
                  <span
                    key={stat}
                    className="inline-flex items-center rounded-full border border-[#d4d0c8] px-4 py-2 text-xs font-medium leading-normal text-[#6b6560]"
                  >
                    {stat}
                  </span>
                ))}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-light-fg underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  Visit live project
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <BrowserMockup project={project} isActive />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
