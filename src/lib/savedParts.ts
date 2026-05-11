const STORAGE_KEY = 'saved-parts';

export function getSavedParts(): string[] {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return [];

  try {
    return JSON.parse(saved) as string[];
  } catch {
    return [];
  }
}

export function savePart(id: string) {
  const current = getSavedParts();

  if (current.includes(id)) return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, id]));
}

export function removePart(id: string) {
  const current = getSavedParts();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(current.filter((item) => item !== id)));
}

export function isPartSaved(id: string) {
  return getSavedParts().includes(id);
}

export function togglePart(id: string) {
  if (isPartSaved(id)) {
    removePart(id);
    return false;
  }

  savePart(id);
  return true;
}
