import { act, render, screen } from '@testing-library/react';
import { useTheme } from './useTheme';

let mediaMatches = false;
let mediaListener: ((event: MediaQueryListEvent) => void) | undefined;
const addEventListener = jest.fn((_event: string, listener: (event: MediaQueryListEvent) => void) => {
  mediaListener = listener;
});
const removeEventListener = jest.fn();

function ThemeHarness() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <span data-testid="theme">{theme}</span>
      <button type="button" onClick={() => setTheme('dark')}>
        dark
      </button>
      <button type="button" onClick={() => setTheme('light')}>
        light
      </button>
      <button type="button" onClick={() => setTheme('system')}>
        system
      </button>
    </>
  );
}

describe('useTheme', () => {
  beforeEach(() => {
    mediaMatches = false;
    mediaListener = undefined;
    localStorage.clear();
    document.documentElement.className = '';
    addEventListener.mockClear();
    removeEventListener.mockClear();

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn(() => ({
        matches: mediaMatches,
        media: '(prefers-color-scheme: dark)',
        onchange: null,
        addEventListener,
        removeEventListener,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('defaults to system and follows the current media preference', () => {
    mediaMatches = true;

    render(<ThemeHarness />);

    expect(screen.getByTestId('theme')).toHaveTextContent('system');
    expect(document.documentElement).toHaveClass('dark');
  });

  it('persists explicit theme changes and toggles the dark class', () => {
    render(<ThemeHarness />);

    act(() => screen.getByRole('button', { name: 'dark' }).click());
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement).toHaveClass('dark');

    act(() => screen.getByRole('button', { name: 'light' }).click());
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('updates system theme when the media query changes', () => {
    render(<ThemeHarness />);

    act(() => mediaListener?.({ matches: true } as MediaQueryListEvent));

    expect(document.documentElement).toHaveClass('dark');
  });

  it('removes the media listener on unmount', () => {
    const { unmount } = render(<ThemeHarness />);

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith('change', expect.any(Function));
  });
});
