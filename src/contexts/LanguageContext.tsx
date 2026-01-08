import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    'nav.home': 'Home',
    'nav.projects': 'Projetos',
    'nav.experiences': 'Experiências',
    'nav.contact': 'Contato',
    'hero.greeting': 'Olá! Eu sou',
    'hero.name': 'José Nazaré',
    'hero.role': 'Desenvolvedor Full Stack',
    'hero.description': 'Criando experiências digitais incríveis com código limpo e design moderno.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.contact': 'Entre em Contato',
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Alguns dos projetos que desenvolvi recentemente',
    'projects.inProgress': 'Em desenvolvimento',
    'projects.code': 'Código',
    'projects.demo': 'Demo',
    'experiences.title': 'Experiências',
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Vamos conversar sobre oportunidades e projetos',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.sending': 'Enviando...',
    'contact.success': 'Mensagem enviada com sucesso!',
    'contact.error': 'Erro ao enviar mensagem. Tente novamente.',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.experiences': 'Experiences',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hi there! I\'m',
    'hero.name': 'José Nazaré',
    'hero.role': 'Full Stack Developer',
    'hero.description': 'Creating incredible digital experiences with clean code and modern design.',
    'hero.viewProjects': 'View Projects',
    'hero.contact': 'Get in Touch',
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some of the projects I\'ve developed recently',
    'projects.inProgress': 'In Progress',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'experiences.title': 'Experiences',
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s talk about opportunities and projects',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'pt' ? 'en' : 'pt';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
