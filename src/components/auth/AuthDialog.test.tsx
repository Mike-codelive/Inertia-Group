import { render, screen } from '@testing-library/react';
import { AuthDialog } from './AuthDialog';
import { MemoryRouter } from 'react-router-dom';

describe('AuthDialog', () => {
  it('renders login and registration content when open', () => {
    render(
      <MemoryRouter>
        <AuthDialog open onOpenChange={jest.fn()} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Log In' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-MAIL*')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'go to registration' })).toBeInTheDocument();
  });

  it('does not render dialog content when closed', () => {
    render(
      <MemoryRouter>
        <AuthDialog open={false} onOpenChange={jest.fn()} />
      </MemoryRouter>
    );

    expect(screen.queryByRole('heading', { name: 'Log In' })).not.toBeInTheDocument();
  });
});
