import { useEffect } from 'react';
import { Moon, Sun, User, Settings } from 'lucide-react';

export default function Navbar({ mode, setMode, onOpenAuth, onNavigate, currentView }) {
  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => onNavigate('welcome')}
          className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
        >
          Scholarly
          <span className="text-primary ml-1 text-indigo-600 dark:text-indigo-400">Edge</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle theme"
          >
            {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span className="hidden sm:inline">{mode === 'dark' ? 'Light' : 'Dark'} mode</span>
          </button>

          <button
            onClick={() => onOpenAuth('login')}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 text-sm transition"
          >
            <User size={18} />
            <span className="hidden sm:inline">Login</span>
          </button>

          <button
            onClick={() => onNavigate('settings')}
            className={`p-2 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition ${currentView === 'settings' ? 'bg-neutral-100 dark:bg-neutral-800' : ''}`}
            aria-label="Settings"
          >
            <Settings size={18} className="text-neutral-700 dark:text-neutral-200" />
          </button>
        </div>
      </div>
    </header>
  );
}
