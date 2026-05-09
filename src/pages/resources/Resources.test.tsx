import { render, screen } from '@testing-library/react';
import { ResourcesPage } from './Resources';

describe('ResourcesPage', () => {
  it('renders resource hero and posts', () => {
    render(<ResourcesPage />);

    expect(screen.getByRole('heading', { name: 'MAK / MAS 1.2 Terminals' })).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('MAK 1.2 Series')).toBeInTheDocument();
  });
});
