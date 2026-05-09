import { render, screen } from '@testing-library/react';
import { HomePage } from './Home';

jest.mock('./sections/Hero', () => ({
  HeroSection: () => <section>Home hero</section>,
}));

jest.mock('./sections/Resources', () => ({
  Resources: () => <section>Home resources</section>,
}));

jest.mock('./sections/Catalog', () => ({
  CatalogSections: () => <section>Home catalog</section>,
}));

jest.mock('./sections/Drive', () => ({
  Drive: () => <section>Home drive</section>,
}));

jest.mock('@/components/search/SearchBar', () => ({
  SearchBar: () => <div>Home search</div>,
}));

describe('HomePage', () => {
  it('renders the home sections and resets scroll', () => {
    render(<HomePage />);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'instant' });
    expect(screen.getByText('Home hero')).toBeInTheDocument();
    expect(screen.getByText('Home search')).toBeInTheDocument();
    expect(screen.getByText('Home drive')).toBeInTheDocument();
  });
});
