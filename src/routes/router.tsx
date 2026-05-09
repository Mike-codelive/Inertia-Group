import { MainLayout } from '@/layouts/MainLayout';
import { NoFooterLayout } from '@/layouts/NoFooterLayout';
import { RootLayout } from '@/layouts/RootLayout';
import { createBrowserRouter } from 'react-router-dom';

import { AboutPage } from '@/pages/about/About';
import { ContactPage } from '@/pages/contact/Contact';
import { HomePage } from '@/pages/home/Home';
import { PartsPage } from '@/pages/parts/Parts';
import { ProductDetailsPage } from '@/pages/product/ProductDetails';
import { ResourcesPage } from '@/pages/resources/Resources';
import { SearchPage } from '@/pages/search/Search';

export const router = (isReady: boolean) =>
  createBrowserRouter([
    {
      element: <RootLayout isReady={isReady} />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: '/',
              element: <HomePage />,
            },
            {
              path: '/about',
              element: <AboutPage />,
            },
            {
              path: '/contact',
              element: <ContactPage />,
            },
            {
              path: '/resources',
              element: <ResourcesPage />,
            },
            {
              path: '/catalog/:category/:slug',
              element: <ProductDetailsPage />,
            },
          ],
        },
        {
          element: <NoFooterLayout />,
          children: [
            {
              path: '/search',
              element: <SearchPage />,
            },
            {
              path: '/saved-parts',
              element: <PartsPage />,
            },
          ],
        },
      ],
    },
  ]);
