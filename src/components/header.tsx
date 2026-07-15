"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(8,8,8,0)", "rgba(8,8,8,0.85)"],
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(42,42,42,0)", "rgba(42,42,42,1)"],
  );

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      style={{
        backgroundColor: headerBg,
        borderBottomColor: headerBorder,
      }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="site-container flex items-center justify-between py-3">
        <a
          href="#"
          className="group relative z-10 transition-opacity hover:opacity-85"
          aria-label="Sinclair Design Atelier home"
        >
          <Logo height={52} />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-muted transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background"
          >
            <span className="relative z-10">Start a project</span>
            <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 group-hover:translate-x-0" />
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 flex h-11 w-11 items-center justify-center md:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="h-px w-full bg-foreground"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-px w-full bg-foreground"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="h-px w-full bg-foreground"
            />
          </div>
        </button>
      </div>

      <motion.div
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: { height: "100dvh", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 top-0 overflow-hidden bg-background md:hidden"
      >
        <nav className="flex h-full flex-col justify-center gap-8 px-10 pt-20">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: -24 }}
              animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
              transition={{ delay: menuOpen ? 0.1 + i * 0.08 : 0 }}
              className="font-display text-4xl font-medium text-foreground"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
