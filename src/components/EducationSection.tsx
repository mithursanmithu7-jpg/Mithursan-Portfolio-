import { EDUCATION_LIST, type EducationItem } from '../data/portfolioData';

const ACCENT_CLASSES: Record<NonNullable<EducationItem['accent']>, string> = {
  emerald: 'text-emerald-600 dark:text-emerald-400',
  blue: 'text-blue-600 dark:text-blue-400',
  purple: 'text-purple-600 dark:text-purple-400',
  amber: 'text-amber-600 dark:text-amber-400',
  neutral: 'text-slate-500 dark:text-slate-400',
};

export function EducationSection() {
  return (
    <section id="education" className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
          Academic Foundation
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 text-slate-950 dark:text-white">
          Degrees &amp; Professional Qualifications
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {EDUCATION_LIST.map((item) => (
          <article
            key={item.degree}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 print-card"
          >
            <p className={`text-xs font-semibold ${ACCENT_CLASSES[item.accent ?? 'neutral']}`}>{item.kicker}</p>
            <h3 className="font-bold text-lg text-slate-950 dark:text-white mt-1.5 leading-snug">{item.degree}</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              {item.institution}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
