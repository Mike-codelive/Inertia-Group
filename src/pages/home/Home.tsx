import { useEffect } from 'react';
import { HeroSection } from './sections/Hero';
import { Resources } from './sections/Resources';
import { CatalogSections } from './sections/Catalog';
import { Drive } from './sections/Drive';
import { SearchBar } from '@/components/search/SearchBar';

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
      <SearchBar />
      <CatalogSections />
      <Drive />
    </>
  );
}
