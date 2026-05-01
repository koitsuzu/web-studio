import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh-TW';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.title': 'Portfolio',
    'nav.gallery': 'Gallery',
    'nav.about': 'About Me',
    'nav.contact': 'Contact',
    'filter.category': 'Category',
    'filter.allCategories': 'All Categories',
    'filter.color': 'Color',
    'filter.allColors': 'All Colors',
    'empty.noProjects': 'No projects found matching the filters.',
    'footer.copyright': 'DesignClip Portfolio. All rights reserved.',
    'cat.Corporate': 'Corporate',
    'cat.E-Commerce': 'E-Commerce',
    'cat.Portfolio': 'Portfolio',
    'cat.Landing Page': 'Landing Page',
    'cat.Web App': 'Web App',
    'col.Blue': 'Blue',
    'col.Dark': 'Dark',
    'col.Light': 'Light',
    'col.Colorful': 'Colorful',
    'col.Monochrome': 'Monochrome',
  },
  'zh-TW': {
    'nav.title': '作品集',
    'nav.gallery': '作品展示',
    'nav.about': '關於我',
    'nav.contact': '聯絡我',
    'filter.category': '分類',
    'filter.allCategories': '所有分類',
    'filter.color': '顏色',
    'filter.allColors': '所有顏色',
    'empty.noProjects': '找不到符合篩選條件的專案。',
    'footer.copyright': 'DesignClip 作品集. 保留所有權利。',
    'cat.Corporate': '企業',
    'cat.E-Commerce': '電子商務',
    'cat.Portfolio': '作品集',
    'cat.Landing Page': '登陸頁面',
    'cat.Web App': '網頁應用',
    'col.Blue': '藍色',
    'col.Dark': '深色',
    'col.Light': '淺色',
    'col.Colorful': '彩色',
    'col.Monochrome': '單色',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh-TW');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
