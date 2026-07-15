"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Deep-dive into your brand, audience, and goals. We define scope, timeline, and success metrics together.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes evolve into motion-rich prototypes. You review at every milestone until it feels exactly right.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Engineering with performance and accessibility at the core. Integrations, testing, and polish.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Deploy with confidence. Training, analytics setup, and a post-launch refinement window included.",
  },
];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-32 lg:py-40">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            Process
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-foreground">
            A calm, collaborative path to launch.
          </h2>
        </motion.div>

        <div className="relative mt-24">
          <div className="absolute left-0 top-8 hidden h-px w-full bg-border lg:block">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-accent"
            />
          </div>

          <div className="grid gap-16 lg:grid-cols-4 lg:gap-8">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative"
              >
                <div className="mb-6 flex items-center gap-4 lg:flex-col lg:items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent bg-surface font-display text-xl font-bold text-accent">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
