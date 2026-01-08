import { useLanguage } from "../contexts/LanguageContext";

interface Experience {
  id: number;
  title: string;
  titleEn: string;
  company: string;
  description: string;
  descriptionEn: string;
  startDate: string;
  endDate: string;
  current?: boolean;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Desenvolvedor Full Stack",
    titleEn: "Full Stack Developer",
    company: "Freelancer",
    description: "Desenvolvimento de aplicações web completas utilizando React, Node.js e tecnologias modernas. Criação de interfaces responsivas e APIs RESTful.",
    descriptionEn: "Development of complete web applications using React, Node.js and modern technologies. Creation of responsive interfaces and RESTful APIs.",
    startDate: "2023",
    endDate: "Presente",
    current: true,
  },
  {
    id: 2,
    title: "Desenvolvedor Front End",
    titleEn: "Front End Developer",
    company: "Empresa Tech",
    description: "Desenvolvimento de interfaces de usuário modernas e responsivas. Trabalho com equipes ágeis para entregar produtos de alta qualidade.",
    descriptionEn: "Development of modern and responsive user interfaces. Working with agile teams to deliver high-quality products.",
    startDate: "2021",
    endDate: "2023",
    current: false,
  },
];

export function Experiences() {
  const { t, language } = useLanguage();

  return (
    <section 
      id="experiences" 
      className="w-full py-20 px-4 md:px-8 lg:px-[15.5rem] bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('experiences.title')}
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 md:pl-12 border-l-4 border-blue-600 dark:border-blue-400"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {language === 'pt' ? exp.title : exp.titleEn}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="mt-2 md:mt-0 text-right">
                    <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      {exp.startDate} - {exp.current ? (language === 'pt' ? 'Presente' : 'Present') : exp.endDate}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                  {language === 'pt' ? exp.description : exp.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
