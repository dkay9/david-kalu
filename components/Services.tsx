import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  { n: "1", title: "Web Applications", note: "Next.js · full-stack · PWAs" },
  { n: "2", title: "Frontend Engineering", note: "React · TypeScript · Tailwind" },
  { n: "3", title: "Photography", note: "Brand · portrait · event" },
  { n: "4", title: "Videography", note: "Content · reels · storytelling" },
  { n: "5", title: "AI & Automation", note: "LLMs · agents · intelligent tools" },
  { n: "6", title: "Product Design", note: "UI/UX · design systems" },
];

export default function Services() {
  return (
    <section className="border-t border-ink px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
      <Reveal className="mb-12">
        <p className="timecode mb-3 text-rec">// 04 — capabilities</p>
        <h2 className="display text-5xl sm:text-7xl">
          What I <span className="outline-text">Do</span>
        </h2>
      </Reveal>

      <ul>
        {services.map((service, i) => (
          <Reveal
            key={service.n}
            as="li"
            delay={i * 80}
            className="group border-b border-line first:border-t"
          >
            <div className="flex items-center gap-5 py-6 transition-colors duration-300 sm:gap-8 sm:py-7">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink font-mono text-sm transition-colors duration-300 group-hover:bg-rec group-hover:border-rec group-hover:text-white">
                {service.n}
              </span>
              <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="display text-2xl transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                  {service.title}
                </h3>
                <p className="timecode text-smoke">{service.note}</p>
              </div>
              <ArrowRight
                size={20}
                className="hidden shrink-0 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-rec sm:block"
              />
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}