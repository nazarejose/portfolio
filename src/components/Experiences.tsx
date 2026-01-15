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
    title: "Estagiário de TI",
    titleEn: "IT Intern",
    company: "Tribunal Regional do Trabalho da 7ª Região",
    description: "Atendimento e suporte técnico a usuários, atuando na resolução de incidentes relacionados a hardware, software e sistemas internos. Gestão de chamados utilizando Jira Service Management e AssystWeb, aplicando práticas ITIL, garantindo organização, comunicação eficiente e cumprimento de SLAs.",
    descriptionEn: "Technical support and assistance to users, working on resolving incidents related to hardware, software, and internal systems. Ticket management using Jira Service Management and AssystWeb, applying ITIL practices, ensuring organization, efficient communication, and SLA compliance.",
    startDate: "ago de 2024",
    endDate: "Presente",
    current: true,
  },
  {
    id: 2,
    title: "Diretor de Projetos",
    titleEn: "Project Director",
    company: "AutoTech - Empresa Júnior",
    description: "Coordenação de projetos de desenvolvimento web utilizando Scrum, com organização de backlog, dailies e acompanhamento de sprints. Liderança de equipes de desenvolvimento, definição de escopo técnico, revisão de código e tomada de decisões tecnológicas. Desenvolvimento de landing pages e websites estratégicos focados em captação de leads, performance e visibilidade online.",
    descriptionEn: "Coordination of web development projects using Scrum, with backlog organization, dailies, and sprint tracking. Leading development teams, defining technical scope, code review, and making technological decisions. Development of strategic landing pages and websites focused on lead generation, performance, and online visibility.",
    startDate: "jan de 2024",
    endDate: "ago de 2024",
    current: false,
  },
  {
    id: 3,
    title: "Assessor de Projetos",
    titleEn: "Project Advisor",
    company: "AutoTech - Empresa Júnior",
    description: "Desenvolvimento de landing pages focadas em captação de leads e responsividade. Participação em projetos de desenvolvimento web, aplicando boas práticas de código e design responsivo.",
    descriptionEn: "Development of landing pages focused on lead capture and responsiveness. Participation in web development projects, applying code best practices and responsive design.",
    startDate: "ago de 2023",
    endDate: "dez de 2023",
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
