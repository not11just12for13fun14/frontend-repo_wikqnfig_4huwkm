import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import AuthModals from './components/AuthModals';
import Footer from './components/Footer';

export default function App() {
  const [mode, setMode] = useState('light');
  const [view, setView] = useState('welcome'); // welcome | dashboard | settings
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') setMode(saved);
  }, []);

  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-neutral-950`}>
      <Navbar mode={mode} setMode={setMode} onOpenAuth={openAuth} onNavigate={setView} currentView={view} />

      {view === 'welcome' && (
        <Welcome onNavigate={setView} onOpenAuth={openAuth} />
      )}

      {view === 'dashboard' && <Dashboard />}

      {view === 'settings' && (
        <section className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Settings</h2>
          <div className="grid gap-4">
            <div className="flex items-center justify-between rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900">
              <div>
                <p className="font-medium text-neutral-900 dark:text-neutral-100">Theme</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Switch between light and dark.</p>
              </div>
              <button
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 text-sm"
              >
                {mode === 'dark' ? 'Use Light' : 'Use Dark'}
              </button>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900">
              <p className="text-sm text-neutral-700 dark:text-neutral-200">Logged in as: {user?.name || 'Guest'}</p>
            </div>
          </div>
        </section>
      )}

      <Footer />

      <AuthModals
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onSwitch={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
        onVerified={() => setUser({ name: 'Student' })}
      />
    </div>
  );
}
