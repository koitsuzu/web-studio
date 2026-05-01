import { Category, Color, CATEGORIES, COLORS } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';

interface FilterBarProps {
  activeCategory: Category | 'All';
  setActiveCategory: (cat: Category | 'All') => void;
  activeColor: Color | 'All';
  setActiveColor: (col: Color | 'All') => void;
}

export default function FilterBar({
  activeCategory,
  setActiveCategory,
  activeColor,
  setActiveColor,
}: FilterBarProps) {
  const { t } = useLanguage();

  return (
    <div className="border-b border-zinc-200 bg-zinc-50/50 px-6 pt-4">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6">
        {/* Category Filters */}
        <div className="flex items-center justify-between gap-6 border-b border-zinc-200">
          <div className="flex items-center gap-6">
            <span className="mb-[2px] pb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {t('filter.category')}
            </span>
            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => setActiveCategory('All')}
                className={`pb-2 text-sm font-medium transition-colors border-b-2 -mb-[1px] ${
                  activeCategory === 'All'
                    ? 'border-zinc-900 text-zinc-900'
                    : 'border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-900'
                }`}
              >
                {t('filter.allCategories')}
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`pb-2 text-sm font-medium transition-colors border-b-2 -mb-[1px] ${
                    activeCategory === cat
                      ? 'border-zinc-900 text-zinc-900'
                      : 'border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-900'
                  }`}
                >
                  {t(`cat.${cat}`)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Color Filters */}
        <div className="flex items-center gap-6 border-b border-zinc-200">
          <span className="mb-[2px] pb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            {t('filter.color')}
          </span>
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => setActiveColor('All')}
              className={`pb-2 text-sm font-medium transition-colors border-b-2 -mb-[1px] ${
                activeColor === 'All'
                  ? 'border-zinc-900 text-zinc-900'
                  : 'border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-900'
              }`}
            >
              {t('filter.allColors')}
            </button>
            {COLORS.map((col) => (
              <button
                key={col}
                onClick={() => setActiveColor(col)}
                className={`pb-2 text-sm font-medium transition-colors border-b-2 -mb-[1px] ${
                  activeColor === col
                    ? 'border-zinc-900 text-zinc-900'
                    : 'border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-900'
                }`}
              >
                {t(`col.${col}`)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
