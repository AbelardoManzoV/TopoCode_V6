import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { MagneticButton } from "./ui/MagneticButton";
import { ThemeToggle } from "./ui/ThemeToggle";
import { LanguageToggle } from "./ui/LanguageToggle";
import { useLanguage } from "../hooks/useLanguage";
import { cn } from "../lib/utils";
import topoCodeLogoLight from "../assets/topocode-logo.webp";
import topoCodeLogoDark from "../assets/topocode-logo-dark.webp";

const getNavLinks = (t) => [
  { label: t.nav.home, href: "#inicio" },
  { label: t.nav.services, href: "#servicios" },
  { label: t.nav.process, href: "#proceso" },
  { label: t.nav.about, href: "#nosotros" },
  { label: t.nav.contact, href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const navLinks = getNavLinks(t);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-topo-black/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          <motion.a
            href="#inicio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center"
          >
            <img
              src={topoCodeLogoLight}
              alt="TopoCode"
              className="h-14 w-auto dark:hidden"
            />
            <img
              src={topoCodeLogoDark}
              alt="TopoCode"
              className="h-14 w-auto hidden dark:block"
            />
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-topo-light/80 hover:text-topo-text transition-colors group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-topo-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <MagneticButton strength={0.2}>
              <Button variant="primary" as="a" href="#contacto" className="px-6 py-2.5 text-sm">
                {t.nav.cta}
              </Button>
            </MagneticButton>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden p-2 text-topo-light hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-topo-black/90 backdrop-blur-3xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              <div className="flex items-center justify-between pb-4 border-b border-topo-border">
                <span className="text-sm font-medium text-topo-gray">{t.language.toggle}</span>
                <LanguageToggle />
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-topo-border">
                <span className="text-sm font-medium text-topo-gray">Tema</span>
                <ThemeToggle />
              </div>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-lg font-medium text-topo-light/80 hover:text-topo-text transition-colors py-2"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4">
                <Button
                  variant="primary"
                  as="a"
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="w-full"
                >
                  {t.nav.cta}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
