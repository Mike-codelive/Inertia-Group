import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/home/Home';
import { AboutPage } from '@/pages/about/About';
import { ContactPage } from '@/pages/contact/Contact';

export const router = (isReady: boolean) =>
  createBrowserRouter([
    {
      element: <RootLayout isReady={isReady} />,
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
      ],
    },
  ]);
