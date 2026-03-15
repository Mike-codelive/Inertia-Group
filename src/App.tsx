import { useEffect, useState } from 'react';
import { IntroOverlay } from '@/components/intro/IntroOverlay';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/home/HomePage';
import { masterTimeline } from '@/animations/masterTimeline';
import { useSystemTheme } from '@/hooks/useSystemTheme';
import { useScrollLock } from './hooks/useScrollLock';

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);

  useSystemTheme();
  useScrollLock(scrollLocked);

  useEffect(() => {
    window.scrollTo(0, 0);

    const unlock = () => {
      setScrollLocked(false);
    };

    masterTimeline.add(unlock, 'heroEnd');
    masterTimeline.play();
  }, []);

  return (
    <>
      {/* {!introDone && <IntroOverlay onComplete={() => setIntroDone(true)} />} */}

      <RootLayout isReady={true}>
        <HomePage />
      </RootLayout>
    </>
  );
}
