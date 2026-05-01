import { AnimatePresence } from 'motion/react';
import { Project } from '../data/projects';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';

interface ProjectGridProps {
  projects: Project[];
}

const ITEMS_PER_PAGE = 8;

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when projects array changes (due to filters)
  useEffect(() => {
    setCurrentPage(1);
  }, [projects]);

  if (projects.length === 0) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-lg font-medium text-zinc-500">{t('empty.noProjects')}</p>
      </div>
    );
  }

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="mx-auto w-full max-w-screen-2xl px-6 py-12">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentPage(i + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                currentPage === i + 1
                  ? 'bg-zinc-900 text-white'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
