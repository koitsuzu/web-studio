/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ProjectGrid from './components/ProjectGrid';
import AiAssistantModal from './components/AiAssistantModal';
import { projects, Category, Color } from './data/projects';
import { useLanguage } from './contexts/LanguageContext';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [activeColor, setActiveColor] = useState<Color | 'All'>('All');
  const [aiRecommendedIds, setAiRecommendedIds] = useState<string[] | null>(null);
  const { t } = useLanguage();

  const filteredProjects = useMemo(() => {
    // If AI recommended projects exist, show only those and ignore regular filters
    if (aiRecommendedIds !== null) {
      return projects.filter(p => aiRecommendedIds.includes(p.id));
    }

    return projects.filter((project) => {
      const matchCategory = activeCategory === 'All' || project.categories.includes(activeCategory);
      const matchColor = activeColor === 'All' || project.color === activeColor;
      return matchCategory && matchColor;
    });
  }, [activeCategory, activeColor, aiRecommendedIds]);

  // When user uses normal filters, clear AI recommendations
  const handleCategoryChange = (cat: Category | 'All') => {
    setActiveCategory(cat);
    setAiRecommendedIds(null);
  };

  const handleColorChange = (col: Color | 'All') => {
    setActiveColor(col);
    setAiRecommendedIds(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white pb-20">
      <Header />
      <main>
        <FilterBar
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
          activeColor={activeColor}
          setActiveColor={handleColorChange}
        />
        <ProjectGrid projects={filteredProjects} />
      </main>
      
      {/* Simple Footer */}
      <footer className="border-t border-zinc-200 py-12 text-center text-sm font-medium text-zinc-500">
        <p>© {new Date().getFullYear()} {t('footer.copyright')}</p>
      </footer>

      {/* Ai Assistant Modal */}
      <AiAssistantModal onSelectProjects={setAiRecommendedIds} />
    </div>
  );
}

