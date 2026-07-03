import { useState, useEffect, useCallback } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "es";
    const stored = localStorage.getItem("topocode-language");
    if (stored === "es" || stored === "en") return stored;
    const browserLang = navigator.language?.split("-")[0];
    return browserLang === "en" ? "en" : "es";
  });

  useEffect(() => {
    localStorage.setItem("topocode-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
