import { useState, type FormEvent } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export function ContactSection() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailtoSubject = encodeURIComponent(`${subject} — from ${name}`);
    const mailtoBody = encodeURIComponent(message);
    window.location.href = `mailto:maa206@sussex.ac.uk?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact">
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 dark:bg-slate-900/90 text-white border border-slate-800 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6 space-y-4">
          <p className="text-xs font-semibold tracking-wide text-emerald-400">Connect &amp; Collaborate</p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight text-balance">
            Open to research partnerships, consulting &amp; doctoral dialogues.
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Reach out directly for collaborations in AI healthcare optimization, behavioral experiments, sustainable
            MSMEs, or EU/UK innovation projects. Academic references are available upon request.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2 text-xs font-semibold">
            <a
              href="mailto:maa206@sussex.ac.uk"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              maa206@sussex.ac.uk
            </a>
            <a
              href="mailto:asokmithursan@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              asokmithursan@gmail.com
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:col-span-6 space-y-3 bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10 no-print"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              aria-label="Your Name"
              className="px-3.5 py-2.5 rounded-xl bg-slate-950/60 border border-white/15 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-400"
            />
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Topic (e.g., Research Collaboration)"
              aria-label="Topic"
              className="px-3.5 py-2.5 rounded-xl bg-slate-950/60 border border-white/15 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-400"
            />
          </div>
          <textarea
            required
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a brief message..."
            aria-label="Message"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/60 border border-white/15 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-400"
          />
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-slate-950 font-semibold text-xs sm:text-sm hover:bg-emerald-400 transition-colors"
          >
            Compose Email to A. Mithursan
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
