"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const rotatingWords = [
  "operational",
  "bespoke",
  "intelligent",
  "seamless",
  "refined",
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const orbX = useTransform(springX, (v) => -v * 0.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="grain-overlay relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px] animate-pulse-glow"
      />
      <motion.div
        style={{ x: orbX }}
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent-light/10 blur-[100px]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,var(--background)_100%)]" />

      <motion.div
        style={{ opacity }}
        className="site-container relative w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <Logo height={128} className="max-w-[min(100%,22rem)] sm:max-w-none" />
        </motion.div>

        <h1 className="max-w-6xl font-display text-[clamp(2.8rem,7vw,7rem)] font-bold leading-[1.15] tracking-tight">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="block text-foreground"
          >
            We craft software that is
          </motion.span>
          <span className="relative mt-2 block text-accent">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="block whitespace-nowrap"
              >
                {rotatingWords[wordIndex]}.
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 max-w-xl text-lg leading-8 text-muted"
        >
          Websites, internal tools, and workflow systems — designed and
          engineered to help companies move faster with less friction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-foreground px-10 py-4 text-sm font-semibold leading-normal text-background"
          >
            <span className="relative z-10">Book a discovery call</span>
            <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 group-hover:translate-x-0" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-border px-10 py-4 text-sm font-semibold leading-normal text-foreground transition-all hover:border-accent hover:text-accent"
          >
            Explore our work
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-muted to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
