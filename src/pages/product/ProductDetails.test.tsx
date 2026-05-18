import { render, screen } from '@testing-library/react';
import { ProductDetailsPage } from './ProductDetails';
import { useParams } from 'react-router-dom';
import { useProduct } from '@/hooks/useProducts';

const product = {
  id: '1',
  slug: 'connector-a1',
  name: 'Connector A1',
  category: {
    id: 'connectors',
    name: 'Connectors',
    slug: 'connectors',
  },
  image: '/connector.webp',
  description: 'Connector',
  cavities: 2,
  productFamily: 'HCP',
  terminalSize: 1.5,
  sealable: true,
  created_at: '2026-01-01T00:00:00.000Z',
};

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a>,
}));

jest.mock('@/hooks/useProducts', () => ({
  useProduct: jest.fn(),
}));

describe('ProductDetailsPage', () => {
  it('renders a matching product detail page', () => {
    jest.mocked(useParams).mockReturnValue({ slug: 'connector-a1' });
    jest.mocked(useProduct).mockReturnValue({ product, loading: false, error: null });

    render(<ProductDetailsPage />);

    expect(screen.getByRole('heading', { name: 'Connector A1' })).toBeInTheDocument();
    expect(screen.getByText('Specifications')).toBeInTheDocument();
    expect(screen.getByText('Related products coming soon')).toBeInTheDocument();
  });

  it('renders a not found message for an unknown product', () => {
    jest.mocked(useParams).mockReturnValue({ slug: 'missing-product' });
    jest.mocked(useProduct).mockReturnValue({ product: null, loading: false, error: null });

    render(<ProductDetailsPage />);

    expect(screen.getByRole('heading', { name: 'Product not found' })).toBeInTheDocument();
  });
});
