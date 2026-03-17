import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'system';
  });

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (value: Theme) => {
      if (value === 'system') {
        root.classList.toggle('dark', media.matches);
      } else {
        root.classList.toggle('dark', value === 'dark');
      }
    };

    applyTheme(theme);

    const listener = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        root.classList.toggle('dark', e.matches);
      }
    };

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [theme]);

  const setTheme = (value: Theme) => {
    localStorage.setItem('theme', value);
    setThemeState(value);
  };

  return { theme, setTheme };
}
