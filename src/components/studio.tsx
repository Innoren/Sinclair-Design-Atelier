"use client";

import { motion } from "framer-motion";
import { MotionWrapper } from "./motion-wrapper";

const features = [
  {
    label: "Tailored to you",
    title: "Strategy before pixels",
    description:
      "We translate your brand, audience, and goals into a design system that's unmistakably yours — never template-driven.",
  },
  {
    label: "Built to perform",
    title: "Engineering with intent",
    description:
      "Modern frameworks, semantic HTML, and optimized assets. Fast loads and flawless experiences on every screen.",
  },
  {
    label: "Designed to evolve",
    title: "Systems that scale",
    description:
      "CMS integrations, component libraries, and documentation so your site grows with your business.",
  },
];

export function Studio() {
  return (
    <section id="studio" className="section-light py-32 lg:py-40">
      <div className="site-container">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <MotionWrapper>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8a8680]">
              The studio
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-light-fg">
              Build a bespoke website with design intelligence.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6b6560]">
              Like the best platforms, we combine AI-assisted strategy with
              human craft — but every pixel is hand-finished, every interaction
              considered, every launch deliberate.
            </p>
          </MotionWrapper>

          <div className="relative">
            <div className="relative rounded-2xl border border-[#d4d0c8] bg-white p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#8a8680]">
                  Design system
                </span>
                <div className="flex gap-1">
                  {["#c9a87c", "#1a1a1a", "#f7f5f2", "#3d5a5c"].map((color) => (
                    <div
                      key={color}
                      className="h-5 w-5 rounded-full border border-[#d4d0c8]"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {["Heading / Outfit Bold", "Body / Source Sans", "Accent / Champagne"].map(
                  (type) => (
                    <div
                      key={type}
                      className="flex items-center justify-between rounded-lg bg-[#f7f5f2] px-4 py-3"
                    >
                      <span className="text-sm leading-normal text-light-fg">
                        {type}
                      </span>
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xs leading-normal text-[#8a8680]"
                      >
                        Active
                      </motion.span>
                    </div>
                  ),
                )}
              </div>

              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mt-6 h-1 rounded-full bg-accent"
              />
            </div>

            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-2xl border border-[#d4d0c8] bg-accent/20 backdrop-blur-sm" />
          </div>
        </div>

        <div className="mt-32 grid gap-12 lg:grid-cols-3">
          {features.map((feature, i) => (
            <MotionWrapper key={feature.label} delay={i * 0.15}>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                {feature.label}
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold leading-snug text-light-fg">
                {feature.title}
              </h3>
              <p className="mt-4 leading-8 text-[#6b6560]">
                {feature.description}
              </p>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
