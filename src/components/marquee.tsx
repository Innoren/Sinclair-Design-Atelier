const items = [
  "Custom Software",
  "Workflow Systems",
  "Websites",
  "Internal Tools",
  "CRM & Ops",
  "Client Portals",
  "Automations",
  "Integrations",
  "Dashboards",
  "Product Design",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-border py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 flex items-center gap-8 text-sm font-medium uppercase tracking-[0.25em] text-muted"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
