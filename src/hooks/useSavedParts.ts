import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'saved-parts';

function readSavedParts(): string[] {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function useSavedParts() {
  const [savedParts, setSavedParts] = useState<string[]>(() => readSavedParts());

  const togglePart = useCallback(
    (id: string) => {
      const exists = savedParts.includes(id);

      const updated = exists ? savedParts.filter((item) => item !== id) : [...savedParts, id];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      setSavedParts(updated);

      window.dispatchEvent(new Event('saved-parts-updated'));

      return !exists;
    },
    [savedParts]
  );

  useEffect(() => {
    const sync = () => {
      setSavedParts(readSavedParts());
    };

    window.addEventListener('saved-parts-updated', sync);

    return () => {
      window.removeEventListener('saved-parts-updated', sync);
    };
  }, []);

  return {
    savedParts,
    togglePart,
  };
}
