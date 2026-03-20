import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

type RootLayoutProps = {
  isReady: boolean;
};

export function RootLayout({ isReady }: RootLayoutProps) {
  return (
    <main className={`transition-opacity duration-700 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
