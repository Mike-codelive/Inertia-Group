import { render, screen } from '@testing-library/react';
import { AboutPage } from './About';

describe('AboutPage', () => {
  it('renders about content sections', () => {
    render(<AboutPage />);

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument();
    expect(screen.getAllByText('Connection Systems')[0]).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Manufacturing Capabilities' })).toBeInTheDocument();
  });
});
