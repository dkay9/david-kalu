import { ArrowUpRight, Code2, Camera, Bot } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const worlds = [
  {
    icon: <Code2 size={24} strokeWidth={1.5} />,
    title: "Software",
    subtitle: "Engineering",
    description:
      "Full-stack web apps, PWAs, and interfaces built with modern tooling.",
    href: "/projects?filter=software",
    tags: ["Next.js", "TypeScript", "React", "Node.js", "Prisma"],
  },
  {
    icon: <Camera size={24} strokeWidth={1.5} />,
    title: "Visual",
    subtitle: "Media",
    description:
      "Photography and videography. Capturing stories, brands, and moments through lens and motion.",
    href: "/projects?filter=visual",
    tags: ["Photography", "Cinematography", "Content Creation", "Editing", "Storytelling"],
  },
  {
    icon: <Bot size={24} strokeWidth={1.5} />,
    title: "AI &",
    subtitle: "Automation",
    description:
      "AI-powered tools, automation workflows, and intelligent products that work smarter.",
    href: "/projects?filter=ai",
    tags: ["AI/ML", "Automation", "LLMs", "Agents", "Integrations"],
  },
];

export default function Worlds() {
  return (
    <section
      id="worlds"
      className="border-t border-ink px-5 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <Reveal className="mb-14">
        <h2 className="display text-5xl sm:text-7xl">
          Three <span className="outline-text">Worlds</span>
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-smoke">
          Every project lives at the intersection of technology and creativity.
          Pick a world or let them collide.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {worlds.map((world, i) => (
          <Reveal key={world.title} delay={i * 120}>
            <Link
              href={world.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line p-6 transition-all duration-500 hover:border-rec hover:bg-ink/4 sm:p-8 min-h-80"
            >
              {/* Icon */}
              <div className="mb-6 flex size-12 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-rec group-hover:bg-rec group-hover:text-white">
                {world.icon}
              </div>

              {/* Title */}
              <div className="mb-4">
                <h3 className="display text-4xl sm:text-5xl transition-transform duration-300 group-hover:translate-x-1">
                  <span className="block headline-fade">{world.title}</span>
                  <span className="block outline-text">{world.subtitle}</span>
                </h3>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-smoke">
                {world.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {world.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-wider transition-colors duration-300 group-hover:border-smoke"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <span className="absolute top-6 right-6 flex size-10 items-center justify-center rounded-full border border-line opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-rec group-hover:text-rec">
                <ArrowUpRight size={16} className="arrow-launch" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}