import { render, screen } from '@testing-library/react';
import { ContactPage } from './Contact';

jest.mock('@/components/sections/ContactSection', () => ({
  ContactSection: () => <div>Contact form section</div>,
}));

describe('ContactPage', () => {
  it('renders the contact hero and form section', () => {
    render(<ContactPage />);

    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument();
    expect(screen.getByText('Contact form section')).toBeInTheDocument();
  });
});
