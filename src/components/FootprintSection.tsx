import { useState } from 'react';
import { REGIONS, type RegionKey } from '../data/portfolioData';

export function FootprintSection() {
  const [selectedKey, setSelectedKey] = useState<RegionKey>('uk');
  const activeRegion = REGIONS.find((r) => r.key === selectedKey) ?? REGIONS[0];

  return (
    <section id="footprint" className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
          International Footprint
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 text-slate-950 dark:text-white">
          Cross-Border Research &amp; Academic Reach
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Select any region below to inspect active programmes and international collaborations.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-5 items-stretch">
        <div className="md:col-span-5 flex flex-col gap-2.5">
          {REGIONS.map((region) => {
            const isSelected = region.key === selectedKey;
            return (
              <button
                key={region.key}
                type="button"
                onClick={() => setSelectedKey(region.key)}
                aria-pressed={isSelected}
                className={`text-left p-4 rounded-2xl border transition-colors ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-500/8 dark:bg-emerald-500/10'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-emerald-500/50'
                }`}
              >
                <div className="flex justify-between items-center gap-3 font-semibold text-sm text-slate-900 dark:text-slate-100">
                  <span>
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 mr-2">
                      {region.code}
                    </span>
                    {region.country} — {region.institution}
                  </span>
                  <span
                    className={`font-mono tabular-nums text-xs shrink-0 ${
                      isSelected ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {region.period}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">{region.shortDesc}</p>
              </button>
            );
          })}
        </div>

        <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col justify-between print-card">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  {activeRegion.code} <span aria-hidden="true">·</span> {activeRegion.period}
                </p>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white mt-1">{activeRegion.title}</h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">{activeRegion.subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{activeRegion.desc}</p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
              {activeRegion.tags.map((tag, index) => (
                <span key={tag} className="inline-flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">·</span>}
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{tag}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
