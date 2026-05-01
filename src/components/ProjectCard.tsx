import { ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Key } from 'react';

interface ProjectCardProps {
  key?: Key;
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col gap-3"
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-zinc-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/0 opacity-0 transition-all duration-300 group-hover:bg-zinc-900/20 group-hover:opacity-100">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg transition-transform hover:scale-110"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex flex-col px-1">
        <h3 className="text-base font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          {project.categories.map((cat, i) => (
            <span key={i} className="text-xs font-medium text-zinc-500">
              {t(`cat.${cat}`)}{i < project.categories.length - 1 ? ' • ' : ''}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
