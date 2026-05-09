import { fireEvent, render, screen } from '@testing-library/react';
import { ProductActions } from './ProductActions';

describe('ProductActions', () => {
  it('renders product action buttons and prints the page', () => {
    const print = jest.spyOn(window, 'print').mockImplementation(() => undefined);

    render(<ProductActions />);

    expect(screen.getByRole('button', { name: /save part/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /datasheet/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /print/i }));

    expect(print).toHaveBeenCalled();
  });
});
