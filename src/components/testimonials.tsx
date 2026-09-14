"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MotionWrapper } from "./motion-wrapper";

const testimonials = [
  {
    quote:
      "Sinclair built us a storefront that finally matches the quality of our cards. Clean, fast, and our collectors know exactly where to shop.",
    author: "Juan Palau",
    role: "Founder, PokeCitizen Collectibles",
  },
  {
    quote:
      "Our new site feels as grounded and intentional as the coaching itself. Clients book with confidence, and the brand finally has room to breathe.",
    author: "Jordan Hale",
    role: "Founder, Boundlessly Teal Coaching",
  },
  {
    quote:
      "They didn't just ship a pretty interface — they rebuilt how we track projects and handoffs. The team finally works from one system.",
    author: "Sarah Chen",
    role: "Owner, Harvest & Co.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-light py-32 lg:py-40">
      <div className="site-container">
        <MotionWrapper className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8a8680]">
            Client words
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-light-fg">
            Trusted by teams with standards.
          </h2>
        </MotionWrapper>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-normal text-light-fg">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <footer className="mt-10">
                <cite className="not-italic">
                  <p className="font-semibold text-light-fg">
                    {testimonials[active].author}
                  </p>
                  <p className="mt-1 text-sm text-[#8a8680]">
                    {testimonials[active].role}
                  </p>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-12 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`View testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  active === i ? "w-10 bg-accent" : "w-4 bg-[#d4d0c8]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
