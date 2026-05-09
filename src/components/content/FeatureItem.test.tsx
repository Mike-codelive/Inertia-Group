import { render, screen } from '@testing-library/react';
import { FeatureItem } from './FeatureItem';

describe('FeatureItem', () => {
  it('renders a feature title and description', () => {
    render(<FeatureItem title="Systems Integration" description="Reliable vehicle architecture." />);

    expect(screen.getByText('Systems Integration')).toBeInTheDocument();
    expect(screen.getByText('Reliable vehicle architecture.')).toBeInTheDocument();
  });
});
