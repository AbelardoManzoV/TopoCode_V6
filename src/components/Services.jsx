import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingCart,
  Globe,
  Smartphone,
  Database,
  Wrench,
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";
import { WordReveal } from "./ui/TextReveal";
import { useLanguage } from "../hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/AnimatedSection";

const icons = [LayoutDashboard, ShoppingCart, Globe, Smartphone, Database, Wrench];

export function Services() {
  const { t, language } = useLanguage();
  const services = t.services.items.map((item, index) => ({
    ...item,
    icon: icons[index],
    featured: index === 0,
  }));

  return (
    <section id="servicios" className="py-28 md:py-40 bg-topo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection key={`services-header-${language}`} className="max-w-3xl mb-20">
          <WordReveal
            key={`services-title-${language}`}
            as="h2"
            className="text-4xl md:text-6xl font-bold tracking-tight text-topo-text leading-[1.05]"
            delay={0}
            stagger={0.06}
            duration={0.65}
          >
            {t.services.title}
          </WordReveal>
          <motion.p
            key={`services-desc-${language}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg text-topo-gray max-w-2xl leading-relaxed"
          >
            {t.services.description}
          </motion.p>
        </AnimatedSection>

        <StaggerContainer
          key={`services-grid-${language}`}
          staggerChildren={0.1}
          delayChildren={0.2}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr"
        >
          {services.map((service) => (
            <StaggerItem key={service.title} className={service.featured ? "md:row-span-2" : ""}>
              <SpotlightCard
                className={`h-full flex flex-col ${
                  service.featured ? "justify-between min-h-[340px]" : ""
                }`}
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-topo-blue/12 text-topo-light mb-5"
                  >
                    <service.icon size={24} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-topo-text mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-topo-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {service.featured && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 pt-6 border-t border-topo-border"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-topo-gray">{service.label}</span>
                      <span className="text-topo-light font-medium">
                        {service.value}
                      </span>
                    </div>
                  </motion.div>
                )}
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
