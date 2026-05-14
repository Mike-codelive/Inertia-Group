import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { SearchSidebar } from './SearchSidebar';
import type { CatalogFilters } from '@/types/search';

function SidebarHarness() {
  const [filters, setFilters] = useState<CatalogFilters>({
    categories: [],
    productFamilies: [],
  });

  return (
    <SearchSidebar
      filters={filters}
      setFilters={setFilters}
      categories={['Connectors', 'Seals']}
      productFamilies={['HCP', 'SCP']}
      onFilterChange={jest.fn()}
    />
  );
}

describe('SearchSidebar', () => {
  it('renders categories and product families', () => {
    render(<SidebarHarness />);

    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Connectors' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'HCP' })).toBeInTheDocument();
  });

  it('toggles filters and clears active filters', () => {
    render(<SidebarHarness />);

    fireEvent.click(screen.getByRole('button', { name: 'Connectors' }));

    expect(screen.getByRole('button', { name: 'Clear all filters' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Clear all filters' }));

    expect(screen.queryByRole('button', { name: 'Clear all filters' })).not.toBeInTheDocument();
  });
});
