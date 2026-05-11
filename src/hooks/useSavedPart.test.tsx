import { act, render, screen } from '@testing-library/react';
import { toast } from 'sonner';
import { useSavedPart } from './useSavedPart';

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    info: jest.fn(),
  },
}));

function SavedPartHarness() {
  const { saved, toggleSaved } = useSavedPart('connector-a', 'Connector A');

  return (
    <>
      <span data-testid="saved">{saved ? 'saved' : 'unsaved'}</span>
      <button type="button" onClick={toggleSaved}>
        Toggle saved
      </button>
    </>
  );
}

describe('useSavedPart', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('reports saved state and shows toast messages when toggled', () => {
    render(<SavedPartHarness />);

    expect(screen.getByTestId('saved')).toHaveTextContent('unsaved');

    act(() => screen.getByRole('button', { name: /toggle saved/i }).click());

    expect(screen.getByTestId('saved')).toHaveTextContent('saved');
    expect(toast.success).toHaveBeenCalledWith('Connector A has been saved', {
      position: 'bottom-center',
      duration: 1500,
    });

    act(() => screen.getByRole('button', { name: /toggle saved/i }).click());

    expect(screen.getByTestId('saved')).toHaveTextContent('unsaved');
    expect(toast.info).toHaveBeenCalledWith('Connector A has been removed', {
      position: 'bottom-center',
      duration: 1500,
    });
  });
});
