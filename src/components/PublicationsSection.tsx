import { useMemo, useState } from 'react';
import { ArrowUpRight, Check, Copy, Search, X } from 'lucide-react';
import {
  getPublicationOpenUrl,
  PUBLICATIONS,
  SCHOLAR_PROFILE,
  type Publication,
  type PublicationType,
} from '../data/portfolioData';

type FilterType = 'all' | PublicationType;

const FILTER_OPTIONS: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'journal', label: 'Peer-Reviewed Journals' },
  { key: 'book', label: 'Book Chapters' },
  { key: 'award', label: 'Best Paper Awards' },
  { key: 'conference', label: 'Conferences' },
  { key: 'magazine', label: 'Magazine Articles' },
];

interface PublicationsSectionProps {
  onCiteCopied: (message: string) => void;
}

export function PublicationsSection({ onCiteCopied }: PublicationsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const counts = useMemo(() => {
    const map: Record<FilterType, number> = {
      all: PUBLICATIONS.length,
      journal: 0,
      book: 0,
      award: 0,
      conference: 0,
      magazine: 0,
    };
    for (const pub of PUBLICATIONS) {
      map[pub.type] += 1;
    }
    return map;
  }, []);

  const filteredPublications = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return PUBLICATIONS.map((pub, idx) => ({ pub, idx })).filter(({ pub }) => {
      const matchesCategory = activeFilter === 'all' || pub.type === activeFilter;
      if (!matchesCategory) return false;
      if (!query) return true;
      const haystack = `${pub.title} ${pub.authors} ${pub.venue} ${pub.badge}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [activeFilter, searchQuery]);

  const handleCopyCitation = async (pub: Publication, idx: number) => {
    const citation = `${pub.authors}. ${pub.title}. ${pub.venue}.${pub.url ? ` ${pub.url}` : ''}`;
    try {
      await navigator.clipboard.writeText(citation);
      setCopiedIndex(idx);
      onCiteCopied('Citation copied to clipboard!');
      setTimeout(() => {
        setCopiedIndex((prev) => (prev === idx ? null : prev));
      }, 2000);
    } catch {
      onCiteCopied('Select and copy citation text manually.');
    }
  };

  return (
    <section id="publications" className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
            Google Scholar &amp; Verified DOIs
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 text-slate-950 dark:text-white">
            Published Research &amp; Presentations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Open any article directly via publisher DOI or view the live index on{' '}
            <a
              href={SCHOLAR_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-blue-600 dark:text-blue-400 underline underline-offset-2 font-semibold hover:text-blue-500"
            >
              Google Scholar
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            .
          </p>
        </div>

        <div className="relative w-full md:w-80 no-print">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search title, year, co-author..."
            aria-label="Search publications"
            className="w-full pl-10 pr-9 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear publication search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Interactive Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 no-print" role="tablist" aria-label="Publication categories">
        {FILTER_OPTIONS.map((option) => {
          const isActive = activeFilter === option.key;
          return (
            <button
              key={option.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(option.key)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-200/75 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300/70 dark:hover:bg-slate-700/80'
              }`}
            >
              {option.label} <span className="font-mono tabular-nums opacity-80">({counts[option.key]})</span>
            </button>
          );
        })}
      </div>

      {/* Publications List */}
      {filteredPublications.length > 0 ? (
        <div className="grid gap-3">
          {filteredPublications.map(({ pub, idx }) => {
            const openUrl = getPublicationOpenUrl(pub);
            const hasDirectDoi = Boolean(pub.url);
            const isCopied = copiedIndex === idx;

            return (
              <article
                key={`${pub.title}-${idx}`}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 print-card"
              >
                <div className="space-y-1.5 min-w-0">
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{pub.badge}</p>
                  <h3 className="font-bold text-sm sm:text-base leading-snug text-slate-950 dark:text-white">
                    <a
                      href={openUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {pub.title}
                    </a>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pub.authors} <span aria-hidden="true">·</span> <span className="italic">{pub.venue}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 no-print">
                  <a
                    href={openUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600/10 text-blue-700 dark:text-blue-300 hover:bg-blue-600/20 text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
                  >
                    {hasDirectDoi ? 'Open Paper' : 'Find on Scholar'}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopyCitation(pub, idx)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-500/15 hover:text-emerald-700 dark:hover:text-emerald-400 text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    {isCopied ? 'Copied' : 'Cite'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="p-10 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center space-y-2">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            No publications match &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
            }}
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Reset search and filters
          </button>
        </div>
      )}
    </section>
  );
}
