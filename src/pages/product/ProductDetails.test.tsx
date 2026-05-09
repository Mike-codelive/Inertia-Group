import { render, screen } from '@testing-library/react';
import { ProductDetailsPage } from './ProductDetails';
import { useParams } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a>,
}));

describe('ProductDetailsPage', () => {
  it('renders a matching product detail page', () => {
    jest.mocked(useParams).mockReturnValue({ slug: 'connector-a1' });

    render(<ProductDetailsPage />);

    expect(screen.getByRole('heading', { name: 'Connector A1' })).toBeInTheDocument();
    expect(screen.getByText('Specifications')).toBeInTheDocument();
    expect(screen.getByText('Related Products')).toBeInTheDocument();
  });

  it('renders a not found message for an unknown product', () => {
    jest.mocked(useParams).mockReturnValue({ slug: 'missing-product' });

    render(<ProductDetailsPage />);

    expect(screen.getByRole('heading', { name: 'Product not found' })).toBeInTheDocument();
  });
});
