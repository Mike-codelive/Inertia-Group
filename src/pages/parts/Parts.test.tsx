import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PartsPage } from './Parts';

describe('PartsPage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the empty saved parts state', () => {
    render(
      <MemoryRouter>
        <PartsPage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'THERE ARE NO SAVED PARTS' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /browse catalog/i })).toHaveAttribute('href', '/search');
  });

  it('renders saved catalog parts from localStorage', () => {
    localStorage.setItem('saved-parts', JSON.stringify(['1']));

    render(
      <MemoryRouter>
        <PartsPage />
      </MemoryRouter>
    );

    expect(screen.getByText('SAVED PARTS')).toBeInTheDocument();
    expect(screen.getByText('Connector A1')).toBeInTheDocument();
  });
});
