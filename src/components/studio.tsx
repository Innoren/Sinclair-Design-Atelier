"use client";

import { motion } from "framer-motion";
import { MotionWrapper } from "./motion-wrapper";

const features = [
  {
    label: "Mapped to your process",
    title: "Strategy before screens",
    description:
      "We study how work moves through your team — handoffs, bottlenecks, and tools — then design software around that reality.",
  },
  {
    label: "Built to operate",
    title: "Engineering with intent",
    description:
      "Reliable apps with clean data models, secure access, and interfaces your team will actually open every day.",
  },
  {
    label: "Designed to evolve",
    title: "Systems that scale",
    description:
      "Modular products, integrations, and documentation so the software grows with your company instead of locking you in.",
  },
];

const pipeline = [
  { stage: "Inquiry", count: 12 },
  { stage: "Qualified", count: 7 },
  { stage: "In build", count: 4 },
  { stage: "Delivered", count: 9 },
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
              Build bespoke software with design intelligence.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6b6560]">
              We combine product thinking with human craft — every workflow is
              mapped, every interface is hand-finished, and every launch is
              deliberate.
            </p>
          </MotionWrapper>

          <div className="relative">
            <div className="relative rounded-2xl border border-[#d4d0c8] bg-white p-6 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#8a8680]">
                  Operations console
                </span>
                <motion.span
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="rounded-full bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8a5a2b]"
                >
                  Live
                </motion.span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {pipeline.map((item, i) => (
                  <motion.div
                    key={item.stage}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl bg-[#f7f5f2] px-4 py-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#8a8680]">
                      {item.stage}
                    </p>
                    <p className="mt-2 font-display text-3xl font-bold text-light-fg">
                      {item.count}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 space-y-2">
                {[
                  "Auto-route new leads to discovery",
                  "Sync invoices to accounting",
                  "Notify team on status change",
                ].map((row, i) => (
                  <div
                    key={row}
                    className="flex items-center justify-between rounded-lg bg-[#f7f5f2] px-4 py-3"
                  >
                    <span className="text-sm leading-normal text-light-fg">
                      {row}
                    </span>
                    <motion.span
                      animate={{ opacity: [0.35, 1, 0.35] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.35,
                      }}
                      className="text-xs leading-normal text-accent"
                    >
                      Active
                    </motion.span>
                  </div>
                ))}
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
