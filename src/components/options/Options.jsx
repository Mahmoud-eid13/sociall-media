import { useLanguage } from "../../pages/contexts/langContext";
import { useTheme } from "../../pages/contexts/ThemeContext";
import "./options.css";

export default function Options() {
  const { language, changeLang } = useLanguage();
  const { theme } = useTheme();

  const handleClick = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    changeLang(newLanguage);
  };

  return (
    <div className="optionWrapper">
      <button
        onClick={handleClick}
        className={theme === "light" ? "lang" : "lang dark"}
      >
        {language === "en" ? "Arabic" : "English"}
      </button>
    </div>
  );
}
