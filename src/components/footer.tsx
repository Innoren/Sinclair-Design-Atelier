"use client";

import { motion } from "framer-motion";
import { Logo } from "./logo";

const links = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="site-container py-20">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Logo height={72} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              Crafted digital experiences for brands that demand excellence.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Sinclair Design Atelier. All rights
            reserved.
          </p>
          <motion.a
            href="#"
            whileHover={{ y: -4 }}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
