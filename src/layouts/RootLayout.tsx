import { Footer } from './Footer';

type RootLayoutProps = {
  isReady: boolean;
  children: React.ReactNode;
};

export function RootLayout({ isReady, children }: RootLayoutProps) {
  return (
    <>
      <main className={`transition-opacity duration-700 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
