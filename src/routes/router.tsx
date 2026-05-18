import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '@/routes/ProtectedRoute';

import { RootLayout } from '@/layouts/RootLayout';
import { MainLayout } from '@/layouts/MainLayout';
import { NoFooterLayout } from '@/layouts/NoFooterLayout';

import { HomePage } from '@/pages/home/Home';
import { AboutPage } from '@/pages/about/About';
import { ContactPage } from '@/pages/contact/Contact';
import { ResourcesPage } from '@/pages/resources/Resources';

import { SearchPage } from '@/pages/search/Search';
import { PartsPage } from '@/pages/parts/Parts';

import { ProductDetailsPage } from '@/pages/product/ProductDetails';
import { RegisterPage } from '@/pages/auth/RegisterPage';
import { AccountPage } from '@/pages/account/AccountPage';
import { CategoryPage } from '@/pages/category/CategoryPage';

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
            // {
            //   path: '/catalog/:category/:slug',
            //   element: <ProductDetailsPage />,
            // },

            {
              path: '/products/:slug',
              element: <ProductDetailsPage />,
            },
          ],
        },
        {
          element: <NoFooterLayout />,
          children: [
            // {
            //   path: '/search',
            //   element: <SearchPage />,
            // },
            {
              path: '/search',
              element: <SearchPage />,
            },
            {
              path: '/saved-parts',
              element: <PartsPage />,
            },
            {
              path: '/register',
              element: <RegisterPage />,
            },
            {
              path: '/category/:categorySlug',
              element: <CategoryPage />,
            },
          ],
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: '/account',
              element: <AccountPage />,
            },
          ],
        },
      ],
    },
  ]);
