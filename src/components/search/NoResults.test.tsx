import { render, screen } from '@testing-library/react';
import { NoResults } from './NoResults';

describe('NoResults', () => {
  it('shows the missing query when one is provided', () => {
    render(<NoResults query="connector x" />);

    expect(screen.getByText('No results found')).toBeInTheDocument();
    expect(screen.getByText(/connector x/)).toBeInTheDocument();
  });

  it('shows the empty catalog message without a query', () => {
    render(<NoResults query="" />);

    expect(screen.getByText('No products available.')).toBeInTheDocument();
  });
});
