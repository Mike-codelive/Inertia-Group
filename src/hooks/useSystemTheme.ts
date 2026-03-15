import { useEffect } from 'react';

export function useSystemTheme() {
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    // Initial check
    applyTheme(media.matches);

    // Listen for changes
    const listener = (e: MediaQueryListEvent) => {
      applyTheme(e.matches);
    };

    media.addEventListener('change', listener);

    return () => {
      media.removeEventListener('change', listener);
    };
  }, []);
}
