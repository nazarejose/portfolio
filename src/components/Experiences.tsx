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
    title: "Desenvolvedor Full Stack Freelancer",
    titleEn: "Full Stack Developer Freelancer",
    company: "Freelancer · Remoto",
    description: "Desenvolvimento de aplicações web e landing pages estratégicas focadas em performance, responsividade e geração de leads. Construção de interfaces modernas com Next.js, utilizando SSR, SSG e otimizações de performance para melhorar SEO e escalabilidade. Otimização do tempo de carregamento das páginas em aproximadamente 40% por meio de melhoria na renderização, organização de componentes e otimização de assets. Principais tecnologias: Next.js, React, TypeScript, Tailwind CSS.",
    descriptionEn: "Development of web applications and strategic landing pages focused on performance, responsiveness, and lead generation. Building modern interfaces with Next.js, using SSR, SSG, and performance optimizations to improve SEO and scalability. Reduced page load time by approximately 40% through improved rendering, component organization, and asset optimization. Main technologies: Next.js, React, TypeScript, Tailwind CSS.",
    startDate: "dez de 2025",
    endDate: "Presente",
    current: true,
  },
  {
    id: 2,
    title: "Desenvolvedor Full Stack Voluntário",
    titleEn: "Full Stack Developer Volunteer",
    company: "Empresa Júnior de Tecnologia · Híbrido",
    description: "Gerenciamento de backlog de produto e coordenação de sprints utilizando metodologias Scrum e Kanban. Entrega de mais de 5 projetos para clientes com sucesso, assegurando prazos e padrões de qualidade. Implementação de arquiteturas modernas com React, garantindo escalabilidade e organização do código. Antecipação de entregas previstas para 2-3 meses, concluindo projetos em cerca de 1 mês através de planejamento técnico eficiente. Principais tecnologias: React, Node.js, Tailwind CSS.",
    descriptionEn: "Product backlog management and sprint coordination using Scrum and Kanban methodologies. Successfully delivered over 5 projects to clients, ensuring deadlines and quality standards. Implementation of modern architectures with React, ensuring scalability and code organization. Delivered projects ahead of schedule—anticipated 2-3 month timelines completed in about 1 month through efficient technical planning. Main technologies: React, Node.js, Tailwind CSS.",
    startDate: "ago de 2023",
    endDate: "ago de 2024",
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
          {experiences.map((exp) => (
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
