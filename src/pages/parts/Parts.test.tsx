import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PartsPage } from './Parts';

describe('PartsPage', () => {
  it('renders the empty saved parts state', () => {
    render(
      <MemoryRouter>
        <PartsPage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'THERE ARE NO SAVED PARTS' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /browse catalog/i })).toHaveAttribute('href', '/search');
  });
});
