import { useState } from 'react';
import { EXPERIENCE_DATA, type ExperienceTabKey } from '../data/portfolioData';

const EXPERIENCE_TABS: { key: ExperienceTabKey; label: string }[] = [
  { key: 'research', label: 'Research Grants' },
  { key: 'consulting', label: 'EU & Global Consulting' },
  { key: 'teaching', label: 'Teaching' },
  { key: 'banking', label: 'Banking & Admin' },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<ExperienceTabKey>('research');
  const items = EXPERIENCE_DATA[activeTab];

  return (
    <section id="experience" className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
            Career Timeline
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 text-slate-950 dark:text-white">
            Professional &amp; Research Experience
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Experience categories"
          className="flex flex-wrap p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 gap-1 no-print"
        >
          {EXPERIENCE_TABS.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className={`grid gap-4 ${activeTab === 'banking' ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
        {items.map((item) => (
          <article
            key={item.role}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 print-card"
          >
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h3 className="font-bold text-base text-slate-950 dark:text-white">{item.role}</h3>
              <span
                className={`font-mono tabular-nums text-xs font-semibold shrink-0 ${
                  item.isCurrent ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {item.period}
              </span>
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">{item.organization}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
