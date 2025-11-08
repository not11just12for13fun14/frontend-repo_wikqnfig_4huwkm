import { BookOpen, Rocket, Play, FileText } from 'lucide-react';

export default function Welcome({ onNavigate, onOpenAuth }) {
  return (
    <section className="min-h-[70vh] grid place-items-center bg-gradient-to-b from-indigo-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Learn smart. Score higher.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg">
            A focused learning app for grades 6-12 and JEE aspirants. Watch concept videos, read notes & PDFs, practice PYQs, and get doubts resolved by real teachers.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenAuth('register')}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 text-sm md:text-base transition"
            >
              <Rocket size={18} /> Get Started
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-5 py-2.5 text-sm md:text-base transition"
            >
              <BookOpen size={18} /> Explore Dashboard
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <Feature icon={<Play size={18} />} title="Videos" />
            <Feature icon={<FileText size={18} />} title="PDFs" />
            <Feature icon={<BookOpen size={18} />} title="Notes" />
            <Feature icon={<BookOpen size={18} />} title="PYQ Tests" />
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-2xl bg-white dark:bg-neutral-950 grid place-items-center">
              <div className="text-center p-6">
                <div className="text-6xl">📱</div>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300">Designed mobile-first for distraction-free study.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 px-3 py-2 bg-white/60 dark:bg-neutral-900/60">
      <div className="text-indigo-600 dark:text-indigo-400">{icon}</div>
      <span className="text-sm text-neutral-700 dark:text-neutral-200">{title}</span>
    </div>
  );
}
