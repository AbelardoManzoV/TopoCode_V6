import { motion } from "framer-motion";
import {
  Monitor,
  Settings,
  MessageCircle,
  MapPin,
  TrendingUp,
  LifeBuoy,
} from "lucide-react";
import { WordReveal } from "./ui/TextReveal";
import { useLanguage } from "../hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/AnimatedSection";

const icons = [Monitor, Settings, MessageCircle, MapPin, TrendingUp, LifeBuoy];

export function WhyUs() {
  const { t, language } = useLanguage();
  const reasons = t.whyUs.reasons.map((reason, index) => ({
    ...reason,
    icon: icons[index],
  }));

  return (
    <section className="py-28 md:py-40 bg-topo-surface border-y border-topo-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedSection key={`why-header-${language}`} className="lg:sticky lg:top-32 lg:self-start">
            <WordReveal
              key={`why-title-${language}`}
              as="h2"
              className="text-4xl md:text-6xl font-bold tracking-tight text-topo-text leading-[1.05]"
              stagger={0.05}
              duration={0.6}
            >
              {t.whyUs.title}
            </WordReveal>
            <motion.p
              key={`why-desc-${language}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg text-topo-gray max-w-md leading-relaxed"
            >
              {t.whyUs.description}
            </motion.p>

            <motion.div
              key={`why-line-${language}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 hidden lg:block"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-topo-blue to-transparent rounded-full" />
            </motion.div>
          </AnimatedSection>

          <StaggerContainer key={`why-list-${language}`} className="space-y-4">
            {reasons.map((reason, index) => (
              <StaggerItem key={reason.title}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex gap-5 p-6 rounded-2xl border border-transparent hover:border-topo-border bg-transparent hover:bg-topo-surface-soft/60 dark:hover:bg-topo-surface/40 transition-colors duration-300"
                >
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-topo-blue/10 text-topo-blue dark:text-topo-light group-hover:bg-topo-blue group-hover:text-white transition-all duration-300 shadow-lg shadow-black/8 dark:shadow-black/10 group-hover:shadow-[0_10px_30px_rgba(110,135,183,0.25)]">
                    <reason.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-topo-border group-hover:text-topo-blue transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold text-topo-text">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-sm text-topo-gray leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
