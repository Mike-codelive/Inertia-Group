import { getSavedParts, isPartSaved, removePart, savePart, togglePart } from './savedParts';

describe('savedParts storage helpers', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns an empty list when storage is empty or invalid', () => {
    expect(getSavedParts()).toEqual([]);

    localStorage.setItem('saved-parts', 'not-json');

    expect(getSavedParts()).toEqual([]);
  });

  it('saves parts without duplicating existing ids', () => {
    savePart('connector-a');
    savePart('connector-a');
    savePart('terminal-b');

    expect(getSavedParts()).toEqual(['connector-a', 'terminal-b']);
    expect(isPartSaved('connector-a')).toBe(true);
    expect(isPartSaved('seal-c')).toBe(false);
  });

  it('removes saved parts', () => {
    localStorage.setItem('saved-parts', JSON.stringify(['connector-a', 'terminal-b']));

    removePart('connector-a');

    expect(getSavedParts()).toEqual(['terminal-b']);
  });

  it('toggles saved parts and reports the next state', () => {
    expect(togglePart('connector-a')).toBe(true);
    expect(getSavedParts()).toEqual(['connector-a']);

    expect(togglePart('connector-a')).toBe(false);
    expect(getSavedParts()).toEqual([]);
  });
});
