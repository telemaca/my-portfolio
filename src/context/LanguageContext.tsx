"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 1. Definimos las traducciones nostálgicas de Windows/MSN
import { locales } from "@/data/translations";

type Language = "es" | "en";
type TranslationKeys = keyof typeof locales.es;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("es");

  // Función traductora que busca la clave en el idioma actual
  const t = (key: TranslationKeys) => {
    return locales[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLang debe usarse dentro de un LanguageProvider");
  }
  return context;
};
