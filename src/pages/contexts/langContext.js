import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const getInitialLang = () => localStorage.getItem("language") || "En";

  const [language, setLanguage] = useState("getInitialLang");

  const changeLang = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    document.body.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
  }, [language]);

  return (
    <LangContext.Provider value={{ language, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLanguage = () => useContext(LangContext);
