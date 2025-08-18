'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  // set <html class="dark"> berdasar localStorage / system preference
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    const initial: Theme = stored ?? (systemPrefersDark ? 'dark' : 'light');
    setTheme(initial);
    root.classList.toggle('dark', initial === 'dark');

    // sinkron dengan perubahan system jika user belum set preferensi manual
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      const hasManual = localStorage.getItem('theme') !== null;
      if (!hasManual) {
        const next: Theme = e.matches ? 'dark' : 'light';
        setTheme(next);
        root.classList.toggle('dark', next === 'dark');
      }
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="ml-2 inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 
                 p-2 text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-800/70
                 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Sun / Moon */}
      {theme === 'dark' ? (
        // sun
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.45 12.02l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM12 4V1h-0v3h0zm0 19v-3h0v3h0zM4 12H1v0h3v0zm19 0h-3v0h3v0zM6.76 19.16l-1.42 1.42-1.79-1.8 1.41-1.41 1.8 1.79zM19.16 6.76l1.4-1.4-1.79-1.8-1.41 1.41 1.8 1.79zM12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
      ) : (
        // moon
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M21.75 15.5A9.75 9.75 0 0110.5 2.25 9 9 0 1021.75 15.5z" />
        </svg>
      )}
    </button>
  );
}
