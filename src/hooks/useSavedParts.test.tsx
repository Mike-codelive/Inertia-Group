import { act, render, screen } from '@testing-library/react';
import { useSavedParts } from './useSavedParts';

function SavedPartsHarness() {
  const { savedParts, togglePart } = useSavedParts();

  return (
    <>
      <span data-testid="saved-parts">{savedParts.join(',')}</span>
      <button type="button" onClick={() => togglePart('connector-a')}>
        Toggle connector
      </button>
      <button type="button" onClick={() => togglePart('terminal-b')}>
        Toggle terminal
      </button>
    </>
  );
}

describe('useSavedParts', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('initializes from localStorage', () => {
    localStorage.setItem('saved-parts', JSON.stringify(['connector-a']));

    render(<SavedPartsHarness />);

    expect(screen.getByTestId('saved-parts')).toHaveTextContent('connector-a');
  });

  it('toggles parts, persists them, and dispatches an update event', () => {
    const dispatchEvent = jest.spyOn(window, 'dispatchEvent');

    render(<SavedPartsHarness />);

    act(() => screen.getByRole('button', { name: /toggle connector/i }).click());

    expect(screen.getByTestId('saved-parts')).toHaveTextContent('connector-a');
    expect(localStorage.getItem('saved-parts')).toBe(JSON.stringify(['connector-a']));
    expect(dispatchEvent).toHaveBeenCalledWith(expect.objectContaining({ type: 'saved-parts-updated' }));

    act(() => screen.getByRole('button', { name: /toggle connector/i }).click());

    expect(screen.getByTestId('saved-parts')).toBeEmptyDOMElement();
    expect(localStorage.getItem('saved-parts')).toBe(JSON.stringify([]));
  });

  it('syncs when another saved-parts-updated event is received', () => {
    render(<SavedPartsHarness />);

    act(() => {
      localStorage.setItem('saved-parts', JSON.stringify(['terminal-b']));
      window.dispatchEvent(new Event('saved-parts-updated'));
    });

    expect(screen.getByTestId('saved-parts')).toHaveTextContent('terminal-b');
  });
});
