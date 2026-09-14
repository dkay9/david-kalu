import Reveal from "@/components/Reveal";

const stats = [
  { value: "20+", label: "Projects shipped" },
  { value: "7+", label: "Years building" },
  { value: "3", label: "Creative disciplines" },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
        <Reveal>
          <h2 className="display text-5xl sm:text-6xl lg:vertical-rl lg:rotate-180 lg:text-7xl headline-fade">
            About
          </h2>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p className="max-w-2xl text-lg leading-relaxed sm:text-xl">
              DK is a creative technologist from Abuja, Nigeria. Engineer by trade, visual
              storyteller by instinct, and AI builder by obsession. From
              full-stack web platforms to brand photography and cinematography campaigns to AI-powered
              tools, the thread is the same: make things that work beautifully
              and ship them into the real world.
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-12">
            <dl className="grid border border-ink sm:grid-cols-3">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-2 p-6 sm:p-8 ${
                    i > 0 ? "border-t border-ink sm:border-t-0 sm:border-l" : ""
                  }`}
                >
                  <dd className="display text-4xl sm:text-5xl">{stat.value}</dd>
                  <dt className="timecode text-smoke">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}