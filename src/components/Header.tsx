import { Search, Menu, LayoutGrid, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh-TW' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white">
            <LayoutGrid className="h-4 w-4" />
          </div>
          <a href="#" className="text-xl font-bold tracking-tight text-zinc-900">
            {t('nav.title')}
          </a>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
              {t('nav.gallery')}
            </a>
            <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
              {t('nav.about')}
            </a>
            <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
              {t('nav.contact')}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:flex"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? '中' : 'EN'}
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900">
              <Search className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
