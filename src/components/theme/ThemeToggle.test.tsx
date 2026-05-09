import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeToggle, ThemeToggleMobile } from './ThemeToggle';
import { useTheme } from '@/hooks/useTheme';

jest.mock('@/hooks/useTheme', () => ({
  useTheme: jest.fn(),
}));

describe('ThemeToggle', () => {
  beforeEach(() => {
    jest.mocked(useTheme).mockReturnValue({
      theme: 'system',
      setTheme: jest.fn(),
    });
  });

  it('renders the desktop theme trigger', () => {
    render(<ThemeToggle />);

    expect(screen.getByRole('button', { name: 'change theme' })).toBeInTheDocument();
  });

  it('changes theme from the mobile controls', () => {
    const setTheme = jest.fn();
    jest.mocked(useTheme).mockReturnValue({ theme: 'system', setTheme });

    render(<ThemeToggleMobile />);

    fireEvent.click(screen.getByRole('button', { name: 'dark theme' }));

    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});
