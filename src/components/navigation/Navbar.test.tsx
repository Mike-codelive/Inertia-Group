import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

jest.mock('@/components/auth/AuthDialog', () => ({
  AuthDialog: ({ open }: { open: boolean }) => (open ? <div>Auth dialog</div> : null),
}));

jest.mock('@/components/theme/ThemeToggle', () => ({
  ThemeToggle: () => <button>Theme toggle</button>,
  ThemeToggleMobile: () => <div>Mobile theme toggle</div>,
}));

jest.mock('@/components/search/SearchBar', () => ({
  SearchBar: ({ variant }: { variant?: string }) => <div>Search bar {variant}</div>,
}));

describe('Navbar', () => {
  it('renders navigation controls and opens auth dialog', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: 'IG' })).toHaveAttribute('href', '/');
    expect(screen.getByText('Theme toggle')).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole('button', { name: 'LOG IN / SIGN UP' })[0]);

    expect(screen.getByText('Auth dialog')).toBeInTheDocument();
  });

  it('opens the mobile search overlay', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: 'search' }));

    expect(screen.getByRole('button', { name: 'close search bar' })).toBeInTheDocument();
    expect(screen.getAllByText('Search bar navbar')[0]).toBeInTheDocument();
  });
});
