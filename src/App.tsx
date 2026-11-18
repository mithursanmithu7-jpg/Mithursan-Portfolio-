import { useEffect, useState } from 'react';
import { AwardsAndToolkitSection } from './components/AwardsAndToolkitSection';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FootprintSection } from './components/FootprintSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PublicationsSection } from './components/PublicationsSection';
import { ORCID_URL, SCHOLAR_PROFILE } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const handleShowToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 2400);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070b14] dark:text-slate-100 grid-bg transition-colors duration-200">
      {/* Subtle Ambient Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none no-print">
        <div className="absolute -top-48 -right-48 w-[30rem] h-[30rem] bg-blue-500/12 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-48 w-[28rem] h-[28rem] bg-emerald-500/12 rounded-full blur-3xl" />
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 text-xs font-bold shadow-2xl"
        >
          {toastMessage}
        </div>
      )}

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-24 space-y-20">
        <HeroSection isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
        <FootprintSection />
        <EducationSection />
        <ExperienceSection />
        <PublicationsSection onCiteCopied={handleShowToast} />
        <AwardsAndToolkitSection />
        <ContactSection />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-4 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} A. Mithursan <span aria-hidden="true">·</span> Commonwealth Scholar
          (University of Sussex, UK) <span aria-hidden="true">·</span>{' '}
          <a
            href={ORCID_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 underline underline-offset-2"
          >
            ORCID: 0009-0009-2423-4729
          </a>{' '}
          <span aria-hidden="true">·</span>{' '}
          <a
            href={SCHOLAR_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 underline underline-offset-2"
          >
            Google Scholar
          </a>
        </p>
      </footer>
    </div>
  );
}
