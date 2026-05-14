import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CatalogSections } from './Catalog';
import { Drive } from './Drive';
import { HeroSection } from './Hero';
import { Resources } from './Resources';

describe('home page sections', () => {
  beforeEach(() => {
    SVGElement.prototype.getTotalLength = jest.fn(() => 100);
  });

  it('renders the animated hero artwork', () => {
    render(<HeroSection />);

    expect(document.querySelector('svg')).toBeInTheDocument();
  });

  it('renders catalog cards', () => {
    render(
      <MemoryRouter>
        <CatalogSections />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /connectors/i })).toBeInTheDocument();
  });

  it('renders drive section content', () => {
    render(
      <MemoryRouter>
        <Drive />
      </MemoryRouter>
    );

    expect(screen.getByRole('region', { name: 'Drive section' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /learn about our solutions/i })).toHaveAttribute(
      'href',
      '/about'
    );
  });

  it('renders resource cards', () => {
    render(<Resources />);

    expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument();
    expect(screen.getByText('MAK / MAS 1.2 Terminals')).toBeInTheDocument();
  });
});
