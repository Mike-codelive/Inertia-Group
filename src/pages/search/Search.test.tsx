import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from './Search';

jest.mock('./SearchResults', () => ({
  SearchResults: ({ query }: { query: string }) => <div>Search results for {query}</div>,
}));

describe('SearchPage', () => {
  it('passes the query string to search results', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=connector']}>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Search results for connector')).toBeInTheDocument();
  });
});
