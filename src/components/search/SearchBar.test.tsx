import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

describe('SearchBar', () => {
  beforeEach(() => {
    navigate.mockClear();
  });

  it('navigates with an encoded query when submitted from the default variant', () => {
    render(<SearchBar />);

    fireEvent.change(screen.getByPlaceholderText('SEARCH BY PART # OR KEYWORD'), {
      target: { value: 'connector A1' },
    });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(navigate).toHaveBeenCalledWith('/search?q=connector%20A1');
    expect(screen.getByPlaceholderText('SEARCH BY PART # OR KEYWORD')).toHaveValue('');
  });

  it('submits from the keyboard', () => {
    render(<SearchBar />);

    fireEvent.change(screen.getByPlaceholderText('SEARCH BY PART # OR KEYWORD'), {
      target: { value: 'terminal' },
    });
    fireEvent.keyDown(screen.getByPlaceholderText('SEARCH BY PART # OR KEYWORD'), {
      key: 'Enter',
    });

    expect(navigate).toHaveBeenCalledWith('/search?q=terminal');
  });

  it('does not navigate for whitespace-only searches', () => {
    render(<SearchBar variant="navbar" />);

    fireEvent.change(screen.getByPlaceholderText('SEARCH BY PART # OR KEYWORD'), {
      target: { value: '   ' },
    });
    fireEvent.click(screen.getByRole('button', { name: /submit search/i }));

    expect(navigate).not.toHaveBeenCalled();
  });
});
