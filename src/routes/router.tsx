import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { MainLayout } from '@/layouts/MainLayout';
import { NoFooterLayout } from '@/layouts/NoFooterLayout';

import { HomePage } from '@/pages/home/Home';
import { AboutPage } from '@/pages/about/About';
import { ContactPage } from '@/pages/contact/Contact';
import { ResourcesPage } from '@/pages/resources/Resources';
import { PartsPage } from '@/pages/parts/Parts';

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
          ],
        },
        {
          element: <NoFooterLayout />,
          children: [
            {
              path: '/saved-parts',
              element: <PartsPage />,
            },
          ],
        },
      ],
    },
  ]);
