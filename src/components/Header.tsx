import { useState } from "react";
import blob from "../assets/blob.png";
import { IconButton } from "@material-tailwind/react";
import { useLanguage } from "../contexts/LanguageContext";

const iconsBtn = [
  {
    href: "https://www.linkedin.com/in/josenazare",
    iClass: "fa-brands fa-linkedin-in text-lg",
    label: "LinkedIn",
  },
  {
    href: "mailto:nazarejosecontact@gmail.com",
    iClass: "fa-solid fa-at text-lg",
    label: "Email",
  },
  {
    href: "https://github.com/nazarejose",
    iClass: "fab fa-github text-lg",
    label: "GitHub",
  },
];

export function Header() {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
  id="home"
  className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center px-4 md:px-8 lg:px-[15.5rem] pt-20 pb-12 bg-white dark:bg-gray-900 transition-colors duration-300"
>
  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 w-full max-w-7xl">
    
    {/* Conteúdo de Texto */}
    <div className="flex flex-col gap-4 lg:gap-6 order-2 lg:order-1 flex-1 relative">
      
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
        {t("hero.greeting")}{" "}
        <span className="text-blue-600 dark:text-blue-400">
          {t("hero.name")}
        </span>
      </div>

      <div className="text-2xl md:text-3xl lg:text-4xl">
        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-bold">
          {t("hero.role")}
        </span>
      </div>

      <p className="text-base md:text-lg lg:text-xl w-full lg:w-10/12 text-gray-700 dark:text-gray-300 leading-relaxed">
        {t("hero.description")}
      </p>

      {/* --- ÍCONES SOCIAIS --- */}
      {/* Configuração:
          - Mobile: Horizontal (flex-row), gap-5, logo abaixo do texto.
          - Desktop: Vertical (flex-col), Absoluto à esquerda (-left-28), Centralizado verticalmente.
      */}
      <div className="flex flex-row gap-8 justify-center lg:flex-col lg:gap-5 my-3 lg:my-0 lg:absolute lg:-left-28 lg:top-1/2 lg:-translate-y-1/2 z-20">
        {iconsBtn.map((element, index) => (
          <div
            key={index}
            onClick={() => window.open(element.href, "_blank")}
            // Apenas o scale-110 (zoom leve) ao passar o mouse. Sem cores extras.
            className="cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
            title={element.label}
          >
            <IconButton
              variant="text"
              // bg-transparent remove o fundo.
              // text-gray-700 mantém a cor padrão (sem ficar azul no hover).
              className="bg-transparent hover:bg-transparent shadow-none p-0 w-auto h-auto text-gray-700 dark:text-gray-300"
              ripple={false}
            >
              {/* text-lg devolve o tamanho original discreto */}
              <i className={`${element.iClass} text-lg`} />
            </IconButton>
          </div>
        ))}
      </div>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          onClick={() => scrollToSection("projects")}
          className="px-6 py-3 lg:px-8 lg:py-4 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {t("hero.viewProjects")}
          <i className="fa-solid fa-arrow-down"></i>
        </button>

        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => scrollToSection("contact")}
          className="px-6 py-3 lg:px-8 lg:py-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700"
        >
          {t("hero.contact")}
          <i
            className={`fa-regular fa-paper-plane transition-transform duration-300 ${
              isHovered ? "animate-paper-plane" : ""
            }`}
          ></i>
        </button>
      </div>
    </div>

    {/* Imagem (Blob) */}
    <div className="relative order-1 lg:order-2 w-full lg:w-auto flex justify-center items-center">
      <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]">
        <img
          src={blob}
          alt="blob background"
          className="absolute inset-0 w-full h-full object-contain animate-float z-0"
          style={{ transform: "scale(1.2)" }}
        />
      </div>
    </div>
  </div>
</section>
  );
}
