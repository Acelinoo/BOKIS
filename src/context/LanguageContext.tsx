"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, DICTIONARY, I18nContent } from "@/lib/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: I18nContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("bokis_lang") as Language;
      if (savedLang === "id" || savedLang === "en") {
        setLanguageState(savedLang);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("bokis_lang", lang);
    } catch (e) {
      // ignore
    }
  };

  const t = DICTIONARY[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: "id" as Language,
      setLanguage: () => {},
      t: DICTIONARY.id,
    };
  }
  return context;
}
