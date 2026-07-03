import { Marquee } from "./ui/Marquee";

const tech = [
  "React",
  "Next.js",
  "Vite",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Stripe",
  "Supabase",
  "Figma",
];

export function TechMarquee() {
  return (
    <section className="relative py-10 bg-topo-bg border-y border-topo-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-topo-bg via-transparent to-topo-bg z-10 pointer-events-none" />
      <Marquee speed={35} pauseOnHover>
        {tech.map((item) => (
          <div key={item} className="flex items-center gap-4 px-6">
            <span className="text-2xl md:text-3xl font-bold text-topo-gray/30 dark:text-topo-border hover:text-topo-blue transition-colors duration-300 whitespace-nowrap cursor-default">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-topo-blue/40" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
