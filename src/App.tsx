import { useEffect, useMemo, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/router';
import { IntroOverlay } from '@/components/intro/IntroOverlay';
import { masterTimeline } from '@/animations/masterTimeline';
import { useTheme } from '@/hooks/useTheme';
import { useScrollLock } from '@/hooks/useScrollLock';
import { Toaster } from '@/components/ui/sonner';

import { getProducts } from '@/services/products/products.service';

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);

  useTheme();
  useScrollLock(scrollLocked);

  useEffect(() => {
    window.scrollTo(0, 0);

    const unlock = () => {
      setScrollLocked(false);
    };

    masterTimeline.add(unlock, 'heroEnd');
    masterTimeline.play();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await getProducts();

        console.log(products);
      } catch (error) {
        console.error(error);
      }
    }

    loadProducts();
  }, []);

  const appRouter = useMemo(() => router(true), []);

  return (
    <>
      {introDone && <IntroOverlay onComplete={() => setIntroDone(true)} />}

      <RouterProvider router={appRouter} />
      <Toaster />
    </>
  );
}
