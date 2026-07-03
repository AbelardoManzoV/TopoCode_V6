import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "./ui/Button";
import { MagneticButton } from "./ui/MagneticButton";
import { WordReveal } from "./ui/TextReveal";
import { useLanguage } from "../hooks/useLanguage";
import { AnimatedSection } from "./ui/AnimatedSection";
import { GlassPanel } from "./ui/GlassCard";
import { ScrollTextReveal } from "./gsap/ScrollTextReveal";

export function CTA() {
  const { t, language } = useLanguage();
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 md:py-52 bg-topo-black overflow-hidden"
    >
      {/* Subtle ambient light */}
      <motion.div
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.25, 0.15],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-topo-blue blur-[160px]"
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ scale: reduce ? 1 : scale, opacity: reduce ? 1 : opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <AnimatedSection key={`cta-content-${language}`}>
          <GlassPanel className="p-10 md:p-16 lg:p-20 text-center">
          <WordReveal
            key={`cta-title-${language}`}
            as="h2"
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.02]"
            stagger={0.04}
            duration={0.6}
          >
            {t.cta.title}
          </WordReveal>
          <ScrollTextReveal
            key={`cta-desc-${language}`}
            className="mt-8 text-lg md:text-2xl text-topo-light/80 max-w-2xl mx-auto leading-relaxed"
            start="top 85%"
            end="top 55%"
          >
            {t.cta.description}
          </ScrollTextReveal>
          <motion.div
            key={`cta-buttons-${language}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-14 flex flex-col sm:flex-row justify-center gap-4"
          >
            <MagneticButton strength={0.3}>
              <Button
                variant="dark"
                as="a"
                href="#contacto"
                className="text-lg px-10 py-5 shadow-[0_20px_50px_rgba(213,222,235,0.18)]"
              >
                {t.cta.primaryCta}
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Button variant="secondary" as="a" href="#servicios" className="text-lg px-10 py-5">
                {t.cta.secondaryCta}
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-8 text-sm text-topo-gray"
          >
            {t.cta.note}
          </motion.p>
          </GlassPanel>
        </AnimatedSection>
      </motion.div>
    </section>
  );
}
