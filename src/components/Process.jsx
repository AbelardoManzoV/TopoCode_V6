import { Ear, PenTool, Code, Rocket } from "lucide-react";
import { HorizontalScroll } from "./gsap/HorizontalScroll";
import { WordReveal } from "./ui/TextReveal";
import { useLanguage } from "../hooks/useLanguage";
import { AnimatedSection } from "./ui/AnimatedSection";
import { ScrollTextReveal } from "./gsap/ScrollTextReveal";

const icons = [Ear, PenTool, Code, Rocket];

export function Process() {
  const { t, language } = useLanguage();
  const steps = t.process.steps.map((step, index) => ({
    ...step,
    icon: icons[index],
  }));

  return (
    <section id="proceso" className="bg-topo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-40 pb-16">
        <AnimatedSection key={`process-header-${language}`} className="max-w-3xl">
          <WordReveal
            key={`process-title-${language}`}
            as="h2"
            className="text-4xl md:text-6xl font-bold tracking-tight text-topo-text leading-[1.05]"
            stagger={0.05}
            duration={0.6}
          >
            {t.process.title}
          </WordReveal>
          <ScrollTextReveal
            key={`process-desc-${language}`}
            className="mt-6 text-lg md:text-xl text-topo-gray leading-relaxed"
            start="top 85%"
            end="top 55%"
          >
            {t.process.description}
          </ScrollTextReveal>
        </AnimatedSection>
      </div>

      <HorizontalScroll key={`process-scroll-${language}`} className="bg-topo-surface border-y border-topo-border">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex-shrink-0 w-screen md:w-[60vw] lg:w-[45vw] h-full flex items-center justify-center px-6 md:px-12"
          >
            <div className="w-full max-w-lg p-8 md:p-12 rounded-3xl border border-topo-border bg-topo-surface dark:bg-topo-black shadow-[0_40px_80px_rgba(0,0,0,0.12)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.35)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-topo-blue to-transparent opacity-50" />
              
              <div className="flex items-start justify-between mb-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-topo-blue/10 text-topo-blue dark:text-topo-light group-hover:bg-topo-blue group-hover:text-white transition-all duration-500 shadow-lg shadow-black/10 dark:shadow-black/20">
                  <step.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="text-7xl font-bold text-topo-border/50 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-topo-text mb-4">
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-topo-gray leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </HorizontalScroll>
    </section>
  );
}
