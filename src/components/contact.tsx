"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { MotionWrapper } from "./motion-wrapper";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />
      </div>

      <div className="site-container relative">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
          <MotionWrapper>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
              Contact
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-foreground">
              Let&apos;s build something remarkable.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Tell us about your project — timeline, goals, and budget range.
              We respond within one business day.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Email
                </p>
                <a
                  href="mailto:intake@sinclairdesignatelier.com"
                  className="mt-2 block text-lg text-foreground transition-colors hover:text-accent"
                >
                  intake@sinclairdesignatelier.com
                </a>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Availability
                </p>
                <p className="mt-2 text-lg text-foreground">
                  Accepting projects for Q3 2026
                </p>
              </div>
            </div>
          </MotionWrapper>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-16 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-2xl text-accent"
              >
                ✓
              </motion.div>
              <p className="font-display text-3xl font-bold text-foreground">
                Thank you.
              </p>
              <p className="mt-3 text-muted">
                We&apos;ve received your message and will be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <MotionWrapper delay={0.2}>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-border bg-surface p-8 lg:p-10"
              >
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "you@company.com" },
                ].map((field) => (
                  <div key={field.id} className="relative">
                    <label
                      htmlFor={field.id}
                      className={`absolute left-4 transition-all duration-300 ${
                        focused === field.id
                          ? "top-2 text-[10px] uppercase tracking-[0.15em] text-accent"
                          : "top-4 text-sm text-muted"
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      onFocus={() => setFocused(field.id)}
                      onBlur={(e) => !e.target.value && setFocused(null)}
                      className="w-full rounded-xl border border-border bg-background px-4 pb-3 pt-8 text-foreground outline-none transition-colors focus:border-accent"
                    />
                  </div>
                ))}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 ${
                      focused === "message"
                        ? "top-2 text-[10px] uppercase tracking-[0.15em] text-accent"
                        : "top-4 text-sm text-muted"
                    }`}
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    onFocus={() => setFocused("message")}
                    onBlur={(e) => !e.target.value && setFocused(null)}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 pb-3 pt-8 text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-full bg-foreground py-4 text-sm font-semibold text-background sm:w-auto sm:px-12"
                >
                  <span className="relative z-10">Send inquiry</span>
                  <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 group-hover:translate-x-0" />
                </button>
              </form>
            </MotionWrapper>
          )}
        </div>
      </div>
    </section>
  );
}
