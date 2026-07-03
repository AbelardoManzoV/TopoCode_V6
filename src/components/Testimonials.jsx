import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { WordReveal } from "./ui/TextReveal";
import { ScrollTextReveal } from "./gsap/ScrollTextReveal";
import { GlassCard } from "./ui/GlassCard";
import { useLanguage } from "../hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/AnimatedSection";

export function Testimonials() {
  const { t, language } = useLanguage();
  const reduce = useReducedMotion();
  const testimonials = t.testimonials?.items || [];

  return (
    <section className="py-28 md:py-40 bg-topo-surface border-y border-topo-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection key={`testimonials-header-${language}`} className="max-w-3xl mb-20">
          <WordReveal
            key={`testimonials-title-${language}`}
            as="h2"
            className="text-4xl md:text-6xl font-bold tracking-tight text-topo-text leading-[1.05]"
            stagger={0.05}
            duration={0.6}
          >
            {t.testimonials?.title || "Lo que dicen nuestros clientes"}
          </WordReveal>
          <ScrollTextReveal
            key={`testimonials-desc-${language}`}
            className="mt-6 text-lg text-topo-gray max-w-2xl leading-relaxed"
            start="top 85%"
            end="top 55%"
          >
            {t.testimonials?.description ||
              "Negocios locales que confiaron en nosotros para crecer en el mundo digital."}
          </ScrollTextReveal>
        </AnimatedSection>

        <StaggerContainer
          key={`testimonials-grid-${language}`}
          staggerChildren={0.15}
          delayChildren={0.2}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((item) => (
            <StaggerItem key={item.name}>
              <motion.div
                whileHover={reduce ? undefined : { y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <GlassCard className="h-full flex flex-col p-6 md:p-8">
                  {/* Quote icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full border-2 border-white/10 object-cover"
                      whileHover={reduce ? undefined : { scale: 1.05 }}
                    />
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-topo-blue/15 text-topo-blue group-hover:bg-topo-blue group-hover:text-white transition-colors duration-300">
                      <Quote size={18} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-1 text-base md:text-lg text-topo-light/90 leading-relaxed mb-8">
                    “{item.quote}”
                  </blockquote>

                  {/* Author */}
                  <div className="pt-6 border-t border-white/10">
                    <p className="font-semibold text-topo-text">{item.name}</p>
                    <p className="text-sm text-topo-gray">{item.role}</p>
                  </div>
                </GlassCard>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
