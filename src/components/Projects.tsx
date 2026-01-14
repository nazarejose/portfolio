import { useLanguage } from "../contexts/LanguageContext";

interface Project {
  id: number;
  title: string;
  description: string;
  descriptionEn: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  inProgress?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "LifeTrack",
    description: "Sistema de rastreamento e gestão de vida desenvolvido com NestJS. Aplicação backend completa com APIs REST, autenticação e gerenciamento de dados.",
    descriptionEn: "Life tracking and management system developed with NestJS. Complete backend application with REST APIs, authentication, and data management.",
    technologies: ["NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/nazarejose/lifetrack",
    inProgress: true,
  },
  {
    id: 2,
    title: "E-commerce Frontend",
    description: "Plataforma frontend completa de e-commerce desenvolvida com React e TypeScript. Interface moderna e responsiva com carrinho de compras e integração com APIs.",
    descriptionEn: "Complete e-commerce frontend platform developed with React and TypeScript. Modern and responsive interface with shopping cart and API integration.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vercel"],
    githubUrl: "https://github.com/nazarejose/e-commerce",
    demoUrl: "https://e-commerce-frontend-omega-gray.vercel.app/",
    inProgress: false,
  },
  {
    id: 3,
    title: "E-commerce Backend",
    description: "Backend completo para plataforma de e-commerce desenvolvido com Node.js. APIs RESTful para gerenciamento de produtos, usuários, pedidos e pagamentos.",
    descriptionEn: "Complete backend for e-commerce platform developed with Node.js. RESTful APIs for product, user, order, and payment management.",
    technologies: ["Node.js", "JavaScript", "Express", "MySQL"],
    githubUrl: "https://github.com/nazarejose/ecommerce-backend",
    inProgress: false,
  },
  {
    id: 4,
    title: "Note Creator",
    description: "Aplicação web para criação e gerenciamento de notas desenvolvida durante a NLW. Interface intuitiva com funcionalidades de criação, edição e organização de notas.",
    descriptionEn: "Web application for creating and managing notes developed during NLW. Intuitive interface with note creation, editing, and organization features.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vercel"],
    githubUrl: "https://github.com/nazarejose/note-creator-nlw",
    demoUrl: "https://note-creator-nlw.vercel.app/",
    inProgress: false,
  },
];

export function Projects() {
  const { t, language } = useLanguage();

  return (
    <section 
      id="projects" 
      className="w-full py-20 px-4 md:px-8 lg:px-[15.5rem] bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 relative"
            >
              {/* In Progress Badge */}
              {project.inProgress && (
                <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  {t('projects.inProgress')}
                </div>
              )}

              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 flex items-center justify-center">
                <i className="fa-solid fa-code text-6xl text-white opacity-50"></i>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {language === 'pt' ? project.description : project.descriptionEn}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <i className="fab fa-github"></i>
                      {t('projects.code')}
                    </a>
                  )}
                  
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <i className="fa-solid fa-external-link"></i>
                      {t('projects.demo')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
