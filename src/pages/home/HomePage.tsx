import { useEffect } from 'react';
import { HeroSection } from './sections/Hero';
import { Resources } from './sections/Resources';
import { Search } from './sections/Search';
import { CatalogSections } from './sections/Catalog';
import { Drive } from './sections/drive';

export function HomePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <>
      <HeroSection />
      <Resources />
      <Search />
      <CatalogSections />
      <Drive />
    </>
  );
}
