import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const navTexts = [
  { nameKey: "nav.home", href: "#home" },
  { nameKey: "nav.projects", href: "#projects" },
  { nameKey: "nav.experiences", href: "#experiences" },
  { nameKey: "nav.contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full h-20 bg-white dark:bg-gray-900 text-slate-900 dark:text-white flex justify-between items-center px-4 md:px-8 lg:px-[15.5rem] fixed top-0 z-50 shadow-sm dark:shadow-gray-800 transition-colors duration-300">
      <a href="#home" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
        <i className="fa-solid fa-code text-xl lg:text-2xl"></i>
        <span className="font-bold text-xl lg:text-2xl">JN</span>
      </a>
      
      <div className="flex items-center gap-4 md:gap-8">
        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-4 lg:gap-8 text-base lg:text-lg font-medium">
          {navTexts.map((element, index) => (
            <li key={index}>
              <a 
                href={element.href} 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t(element.nameKey)}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle language"
            title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          >
            <i className="fa-solid fa-language text-lg"></i>
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <i className="fa-solid fa-moon text-lg"></i>
            ) : (
              <i className="fa-solid fa-sun text-lg"></i>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 md:hidden">
          <ul className="flex flex-col p-4 gap-4">
            {navTexts.map((element, index) => (
              <li key={index}>
                <a 
                  href={element.href} 
                  onClick={closeMenu}
                  className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
                >
                  {t(element.nameKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
