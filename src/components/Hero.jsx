import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "./ui/Button";
import { MagneticButton } from "./ui/MagneticButton";
import { WordReveal } from "./ui/TextReveal";
import { BackgroundPaths } from "./ui/BackgroundPaths";
import { useLanguage } from "../hooks/useLanguage";
import { ArrowDownRight, ChevronDown } from "lucide-react";

export function Hero() {
  const { t, language } = useLanguage();
  const reduce = useReducedMotion();
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <BackgroundPaths>
      <section
        ref={containerRef}
        id="inicio"
        onMouseMove={handleMouseMove}
        className="relative w-full min-h-[100dvh] flex items-center overflow-hidden"
      >
        {/* Ambient cursor glow */}
        <div
          className="pointer-events-none absolute inset-0 z-[2] hidden lg:block opacity-70"
          style={{
            background: `radial-gradient(600px circle at calc(50% + ${mouse.x * 2}px) calc(50% + ${mouse.y * 2}px), rgba(110,135,183,0.1), transparent 45%)`,
          }}
        />

        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : opacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <motion.div
                key={`badge-${language}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-topo-blue/10 border border-topo-blue/20 text-topo-light text-sm font-medium mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-topo-blue opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-topo-blue" />
                </span>
                {t.hero.badge}
              </motion.div>

              <WordReveal
                key={`title-${language}`}
                as="h1"
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
                delay={0.2}
                stagger={0.08}
                duration={0.7}
              >
                {t.hero.title}
              </WordReveal>

              <motion.p
                key={`desc-${language}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-lg md:text-xl text-topo-light/85 max-w-xl leading-relaxed"
              >
                {t.hero.description}
              </motion.p>

              <motion.div
                key={`ctas-${language}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <MagneticButton strength={0.25}>
                  <Button
                    variant="primary"
                    as="a"
                    href="#contacto"
                    className="text-base px-8 py-4"
                  >
                    {t.hero.primaryCta}
                  </Button>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <Button
                    variant="secondary"
                    as="a"
                    href="#servicios"
                    className="text-base px-8 py-4"
                  >
                    {t.hero.secondaryCta}
                    <ArrowDownRight size={18} className="ml-2" />
                  </Button>
                </MagneticButton>
              </motion.div>

              <motion.div
                key={`social-${language}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="mt-12 flex items-center gap-6 text-sm text-topo-gray"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      className="w-8 h-8 rounded-full border-2 border-topo-black bg-topo-surface flex items-center justify-center text-xs font-medium text-topo-light"
                    >
                      {i === 1 ? "RP" : i === 2 ? "MA" : "JL"}
                    </motion.div>
                  ))}
                </div>
                <p>{t.hero.socialProof}</p>
              </motion.div>
            </div>

            {/* Visual composition */}
            <motion.div
              key={`visual-${language}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block relative"
              style={{
                transform: `perspective(1200px) rotateY(${-mouse.x * 0.06}deg) rotateX(${mouse.y * 0.06}deg)`,
                transition: "transform 0.15s ease-out",
              }}
            >
              <motion.div
                style={{ y: reduce ? 0 : imageY }}
                className="relative"
              >
                {/* Main image card */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-topo-surface/50 backdrop-blur-md shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                    alt="Desarrollo web"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-topo-black/80 via-topo-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 text-xs text-topo-gray mb-2">
                      <span className="w-2 h-2 rounded-full bg-topo-blue animate-pulse" />
                      {t.hero.stack}
                    </div>
                    <p className="text-lg font-semibold text-white">{t.hero.stackValue}</p>
                  </div>
                </div>

                {/* Floating secondary card */}
                <motion.div
                  animate={reduce ? undefined : { y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-48 rounded-xl overflow-hidden border border-white/10 bg-topo-surface/50 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=400&q=80"
                    alt="Diseño UI"
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>

                {/* Floating metric card */}
                <motion.div
                  animate={reduce ? undefined : { y: [0, 12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-8 bg-topo-surface/60 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  <div className="text-xs text-topo-gray uppercase tracking-wider">{t.hero.delivery}</div>
                  <div className="text-sm font-semibold text-topo-light">{t.hero.deliveryValue}</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-topo-border to-transparent origin-center"
        />

        {/* Scroll indicator */}
        <motion.a
          href="#servicios"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-topo-gray hover:text-topo-light transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.a>
      </section>
    </BackgroundPaths>
  );
}
