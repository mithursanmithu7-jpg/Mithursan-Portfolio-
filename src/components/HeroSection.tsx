import { useRef, useState, type ChangeEvent } from 'react';
import { ArrowRight, ArrowUpRight, Moon, Printer, RotateCcw, Sun, Upload } from 'lucide-react';
import { LINKEDIN_URL, ORCID_URL, PUBLICATIONS, SCHOLAR_PROFILE, SSRN_URL } from '../data/portfolioData';

const PRIMARY_PORTRAIT = '/src/assets/images/regenerated_image_1795008022892.jpg';
const CUSTOM_PORTRAIT_STORAGE_KEY = 'mithursan_custom_portrait';

interface HeroSectionProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function HeroSection({ isDark, onToggleTheme }: HeroSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [customPortrait, setCustomPortrait] = useState<string | null>(() => {
    try {
      return localStorage.getItem(CUSTOM_PORTRAIT_STORAGE_KEY);
    } catch {
      return null;
    }
  });

  // Fallback chain: custom uploaded photo -> regenerated portrait -> /profile.jpg -> /profile.png -> monogram
  const [fallbackStep, setFallbackStep] = useState<number>(0);

  const getPortraitSrc = (): string | null => {
    if (customPortrait) return customPortrait;
    if (fallbackStep === 0) return PRIMARY_PORTRAIT;
    if (fallbackStep === 1) return '/profile.jpg';
    if (fallbackStep === 2) return '/profile.png';
    return null;
  };

  const handleImageError = () => {
    if (customPortrait) {
      setCustomPortrait(null);
      return;
    }
    setFallbackStep((prev) => prev + 1);
  };

  const handlePortraitUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCustomPortrait(reader.result);
        try {
          localStorage.setItem(CUSTOM_PORTRAIT_STORAGE_KEY, reader.result);
        } catch {
          // Ignore storage quota issues; image still renders for current session
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPortrait = () => {
    setCustomPortrait(null);
    setFallbackStep(0);
    try {
      localStorage.removeItem(CUSTOM_PORTRAIT_STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const portraitSrc = getPortraitSrc();

  return (
    <section className="pt-4 md:pt-8 space-y-10">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Typographic Hierarchy & Scholar Links */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">
              UK Commonwealth Scholar <span aria-hidden="true">·</span> University of Sussex Business School
            </p>

            {/* Clean utility actions (Theme & PDF Print) kept out of the 3-zone header */}
            <div className="flex items-center gap-2 no-print">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-emerald-500/60 transition-colors whitespace-nowrap shrink-0"
              >
                <Printer className="w-3.5 h-3.5" />
                Save PDF
              </button>
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-emerald-500/60 transition-colors whitespace-nowrap shrink-0"
              >
                {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                {isDark ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.08] text-slate-950 dark:text-white text-balance">
            Entrepreneurship,{' '}
            <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">
              AI Innovation
            </span>{' '}
            &amp; Human Behaviour.
          </h1>

          <div className="space-y-3.5 text-base sm:text-[1.03rem] text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            <p>
              I am a <strong className="font-semibold text-slate-900 dark:text-white">Commonwealth Scholar</strong> and
              multidisciplinary researcher working at the intersection of entrepreneurship, innovation, technology, and
              human behaviour. My academic background spans an{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">
                MSc in Entrepreneurship and Innovation
              </strong>{' '}
              at the University of Sussex, an{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">
                MSc in Management and Digital Technology
              </strong>{' '}
              at the Technical University of Munich, and an MPhil in Economics and BBA (Honours) in Organisational
              Management from the University of Peradeniya.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300/95 leading-relaxed">
              My research interests centre on{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">social entrepreneurship</strong>,{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">
                entrepreneurship and innovation in the age of AI
              </strong>
              , and{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">
                behavioural and experimental research
              </strong>
              —exploring how emerging technologies reshape entrepreneurial processes, decision-making, and social value
              creation to investigate complex economic and societal challenges.
            </p>
          </div>

          {/* Primary CTA & Academic Profiles */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a
              href="#publications"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-sm transition-colors whitespace-nowrap shrink-0"
            >
              Explore Publications
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={SCHOLAR_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-700 dark:text-blue-300 hover:bg-blue-600/20 font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0"
            >
              Google Scholar
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-emerald-500/60 font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0"
            >
              LinkedIn
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={ORCID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-emerald-500/60 font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0"
            >
              ORCID
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={SSRN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-emerald-500/60 font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0"
            >
              SSRN
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Circular Portrait Frame with Blue-Emerald Ring */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="relative p-2 rounded-full bg-gradient-to-tr from-blue-500 via-emerald-400 to-amber-300 shadow-xl shadow-blue-500/15">
            <div className="w-60 h-60 sm:w-68 sm:h-68 rounded-full overflow-hidden bg-slate-900 relative flex items-center justify-center">
              {portraitSrc ? (
                <img
                  src={portraitSrc}
                  alt="A. Mithursan — Commonwealth Scholar and Multidisciplinary Researcher"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                  className="w-full h-full object-cover scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 text-slate-200">
                  <span className="font-serif text-5xl font-semibold tracking-tight text-emerald-400">AM</span>
                  <span className="text-xs text-slate-400 mt-1">A. Mithursan</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-5 py-3 rounded-2xl text-center">
            <p className="text-sm font-bold tracking-tight text-slate-950 dark:text-white">
              Mithursan Asokkumar
            </p>
            <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mt-0.5">
              Commonwealth Scholar UK
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[17rem] leading-relaxed">
              MSc. Mgt &amp; Digital Tech (Germany), MSc. Entre &amp; Innov (UK), BERG Researcher &amp; Member (AAS, CIPM)
            </p>
          </div>

          {/* Optional browser-side portrait photo switcher */}
          <div className="mt-2.5 flex items-center gap-2 no-print">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePortraitUpload}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              {customPortrait ? 'Change Photo' : 'Upload Portrait'}
            </button>
            {customPortrait && (
              <button
                type="button"
                onClick={handleResetPortrait}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                title="Restore default portrait"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Metric Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 print-card">
          <p className="font-mono tabular-nums text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            3.80<span className="text-sm font-normal text-slate-400 dark:text-slate-500">/4.00</span>
          </p>
          <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
            BBA (Hons) CGPA · 2nd of 162
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 print-card">
          <p className="font-mono tabular-nums text-2xl font-bold text-amber-600 dark:text-amber-400">16+</p>
          <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
            Awards &amp; Best Paper Honours
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 print-card">
          <p className="font-mono tabular-nums text-2xl font-bold text-blue-600 dark:text-blue-400">
            {PUBLICATIONS.length}
          </p>
          <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
            Indexed Works &amp; Essays
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 print-card">
          <p className="font-mono tabular-nums text-2xl font-bold text-purple-600 dark:text-purple-400">EU / UN</p>
          <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
            CIRCULATE · Erasmus+ · IFPRI
          </p>
        </div>
      </div>
    </section>
  );
}
