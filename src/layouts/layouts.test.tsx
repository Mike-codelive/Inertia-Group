import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './MainLayout';
import { NoFooterLayout } from './NoFooterLayout';
import { RootLayout } from './RootLayout';

jest.mock('@/components/navigation/Navbar', () => ({
  Navbar: () => <nav>Navbar</nav>,
}));

jest.mock('@/components/ui/ScrollToTop', () => ({
  ScrollToTop: () => null,
}));

describe('layouts', () => {
  it('renders main layout outlet and footer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<div>Page content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Page content')).toBeInTheDocument();
    expect(screen.getByText('Inertia Group')).toBeInTheDocument();
  });

  it('renders no-footer layout outlet only', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<NoFooterLayout />}>
            <Route index element={<div>Page content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Page content')).toBeInTheDocument();
  });

  it('renders root layout with ready opacity state', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<RootLayout isReady />}>
            <Route index element={<div>Root page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Navbar')).toBeInTheDocument();
    expect(screen.getByText('Root page')).toBeInTheDocument();
    expect(container.querySelector('main')).toHaveClass('opacity-100');
  });
});
