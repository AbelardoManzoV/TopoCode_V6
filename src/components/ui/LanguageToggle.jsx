import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();
  const isSpanish = language === "es";

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center gap-1.5 px-3 h-10 rounded-full border border-topo-border bg-topo-surface text-topo-text hover:bg-topo-surface-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-topo-blue"
      aria-label={t.language.toggle}
    >
      <Globe size={16} className="text-topo-light" />
      <span className="text-sm font-semibold min-w-[1.5rem]">
        {isSpanish ? t.language.en : t.language.es}
      </span>
    </motion.button>
  );
}
