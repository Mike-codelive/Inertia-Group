export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export const navItems: readonly NavItem[] = [
  { label: 'Catalog', href: '/search' },
  { label: 'Knowledge', href: '/resources' },
  { label: 'Saved Parts', href: '/saved-parts' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
