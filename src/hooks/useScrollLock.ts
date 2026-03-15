import { useLayoutEffect } from 'react';

export function useScrollLock(locked: boolean) {
  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (locked) {
      html.classList.add('scroll-locked');
      body.classList.add('scroll-locked');
    } else {
      html.classList.remove('scroll-locked');
      body.classList.remove('scroll-locked');
    }
  }, [locked]);
}
