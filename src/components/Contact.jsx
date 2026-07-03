import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { MagneticButton } from "./ui/MagneticButton";
import { Input, Textarea, Select } from "./ui/Input";
import { WordReveal } from "./ui/TextReveal";
import { useLanguage } from "../hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/AnimatedSection";
import { GlassCard, GlassPanel } from "./ui/GlassCard";
import { ScrollTextReveal } from "./gsap/ScrollTextReveal";

const icons = [Mail, Phone, MapPin];

export function Contact() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = t.contact.contactInfo.map((item, index) => ({
    ...item,
    icon: icons[index],
    href: index === 0 ? `mailto:${item.value}` : "#",
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const projectTypes = [
    { key: "landing", label: t.contact.form.projectTypes.landing },
    { key: "store", label: t.contact.form.projectTypes.store },
    { key: "webApp", label: t.contact.form.projectTypes.webApp },
    { key: "mobileApp", label: t.contact.form.projectTypes.mobileApp },
    { key: "admin", label: t.contact.form.projectTypes.admin },
    { key: "other", label: t.contact.form.projectTypes.other },
  ];

  return (
    <section id="contacto" className="py-28 md:py-40 bg-topo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection key={`contact-header-${language}`} className="max-w-3xl mb-16">
          <WordReveal
            key={`contact-title-${language}`}
            as="h2"
            className="text-4xl md:text-6xl font-bold tracking-tight text-topo-text leading-[1.05]"
            stagger={0.05}
            duration={0.6}
          >
            {t.contact.title}
          </WordReveal>
          <ScrollTextReveal
            key={`contact-desc-${language}`}
            className="mt-6 text-lg text-topo-gray leading-relaxed"
            start="top 85%"
            end="top 55%"
          >
            {t.contact.description}
          </ScrollTextReveal>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          <AnimatedSection key={`contact-form-${language}`} className="lg:col-span-3">
            <StaggerContainer key={`contact-form-stagger-${language}`}>
              <GlassPanel className="p-6 md:p-10">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <StaggerItem>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Input label={t.contact.form.name} type="text" placeholder={t.contact.form.namePlaceholder} required />
                    <Input label={t.contact.form.email} type="email" placeholder={t.contact.form.emailPlaceholder} required />
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Input label={t.contact.form.phone} type="tel" placeholder={t.contact.form.phonePlaceholder} />
                    <Select label={t.contact.form.projectType} required>
                      <option value="">{t.contact.form.projectTypePlaceholder}</option>
                      {projectTypes.map((type) => (
                        <option key={type.key} value={type.key}>
                          {type.label}
                        </option>
                      ))}
                    </Select>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <Textarea
                    label={t.contact.form.message}
                    rows={4}
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                  />
                </StaggerItem>
                <StaggerItem>
                  <MagneticButton strength={0.15} className="w-full">
                    <Button
                      variant="form"
                      type="submit"
                      className="flex items-center justify-center gap-2"
                    >
                      {submitted ? (
                        <>
                          <CheckCircle size={18} />
                          {t.contact.form.submitted}
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          {t.contact.form.submit}
                        </>
                      )}
                    </Button>
                  </MagneticButton>
                </StaggerItem>
              </form>
              </GlassPanel>
            </StaggerContainer>
          </AnimatedSection>

          <AnimatedSection key={`contact-info-${language}`} className="lg:col-span-2" delay={0.2}>
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  <GlassCard className="group flex items-start gap-4 p-5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-topo-blue/15 text-topo-light shrink-0 group-hover:bg-topo-blue/25 group-hover:text-topo-blue transition-colors">
                      <item.icon size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-topo-gray">{item.label}</p>
                      <p className="text-lg font-semibold text-topo-text group-hover:text-topo-light transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </GlassCard>
                </motion.a>
              ))}

              <GlassCard hover={false} className="p-6 border-topo-blue/20 bg-topo-blue/[0.03]">
                <h4 className="text-lg font-semibold text-topo-text mb-2">
                  {t.contact.response.title}
                </h4>
                <p className="text-sm text-topo-gray leading-relaxed">
                  {t.contact.response.description}
                </p>
              </GlassCard>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
