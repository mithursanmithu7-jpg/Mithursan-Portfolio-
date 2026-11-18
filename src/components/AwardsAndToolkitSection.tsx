import { AWARDS_LIST, RESEARCH_STACK } from '../data/portfolioData';

export function AwardsAndToolkitSection() {
  return (
    <section id="awards" className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
          Distinctions &amp; Capabilities
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 text-slate-950 dark:text-white">
          Awards, Leadership &amp; Technical Toolkit
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-4 print-card">
          <h3 className="font-bold text-lg text-slate-950 dark:text-white">Academic Distinctions &amp; Honours</h3>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {AWARDS_LIST.map((award) => (
              <li key={award} className="flex items-start gap-2">
                <span aria-hidden="true" className="text-emerald-600 dark:text-emerald-400 font-bold">
                  ·
                </span>
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-6 print-card">
          <div>
            <h3 className="font-bold text-lg text-slate-950 dark:text-white">Research &amp; Finance Stack</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
              {RESEARCH_STACK.map((tool, index) => (
                <span key={tool}>
                  {index > 0 && <span className="text-slate-400 mx-1.5">·</span>}
                  <span className={index < 4 ? 'font-semibold text-emerald-700 dark:text-emerald-400' : ''}>
                    {tool}
                  </span>
                </span>
              ))}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">Languages</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              <strong className="text-slate-900 dark:text-slate-100">Tamil</strong> (Native){' '}
              <span aria-hidden="true">·</span>{' '}
              <strong className="text-slate-900 dark:text-slate-100">English</strong> (Fluent, British Council Diploma){' '}
              <span aria-hidden="true">·</span>{' '}
              <strong className="text-slate-900 dark:text-slate-100">Sinhala</strong> (Fluent){' '}
              <span aria-hidden="true">·</span>{' '}
              <strong className="text-slate-900 dark:text-slate-100">Japanese</strong> (Beginner, Saitama Univ. &apos;A&apos;)
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              Memberships &amp; Panels
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              Association for Asian Studies (769116) <span aria-hidden="true">·</span> Associate Member, CPM Sri Lanka
              (ACPM02641) <span aria-hidden="true">·</span> Investigator, Behavioral Experimental Research Group (BERG){' '}
              <span aria-hidden="true">·</span> iPURSE 2024 Editorial Board <span aria-hidden="true">·</span> Volunteer
              Student Counsellor <span aria-hidden="true">·</span> President, Org. Mgmt Students&apos; Society
              (2021–2022)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
