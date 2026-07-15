"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MotionWrapper } from "./motion-wrapper";

const projects = [
  {
    id: "maison",
    name: "Maison Lumière",
    category: "Luxury Retail",
    description:
      "Editorial e-commerce with immersive storytelling and cinematic product reveals.",
    stats: ["+40% conversion", "2.1s load time", "Award finalist"],
    gradient: "from-[#1a1410] via-[#3d2e24] to-[#6b5344]",
    accent: "#c9a87c",
    layout: "grid" as const,
  },
  {
    id: "northwind",
    name: "Northwind Studio",
    category: "Architecture",
    description:
      "Portfolio with parallax case studies and a headless CMS for instant publishing.",
    stats: ["12 case studies", "Headless CMS", "Global CDN"],
    gradient: "from-[#0f1a1c] via-[#1e3336] to-[#3d5a5c]",
    accent: "#7eb8b0",
    layout: "split" as const,
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
];

function BrowserMockup({
  project,
  isActive,
}: {
  project: (typeof projects)[0];
  isActive: boolean;
}) {
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
          <div className="mx-auto flex-1 rounded-md bg-background/50 px-4 py-1 text-center text-[10px] text-muted">
            {project.name.toLowerCase().replace(/\s/g, "")}.com
          </div>
        </div>

        <div
          className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden`}
        >
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
                  style={{ aspectRatio: i === 0 ? "2/1" : "1/1", gridColumn: i === 0 ? "span 2" : "span 1" }}
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
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 -bottom-6 hidden h-48 w-28 overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-xl lg:block"
      >
        <div className={`h-full bg-gradient-to-b ${project.gradient}`} />
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
            Sites engineered to captivate and convert.
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
