import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-600 py-8">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-950 font-bold">
                IG
              </div>
              <span className="text-xl font-semibold text-white">Inertia Group</span>
            </div>
            <p className="text-sm text-white dark:text-white">
              High-performance connection systems: terminals, connectors, eyelets & seals.
            </p>
          </div>

          <div className="text-white dark:text-white">
            <p className="font-medium mb-4">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-white transition-colors">
                  Catalog
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-white dark:text-white">
            <p className="font-medium mb-4">Legal</p>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors cursor-pointer">
                  Terms of Use
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors cursor-pointer">
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white dark:text-white pt-6 text-center md:text-left text-sm">
          <p>© {currentYear} Inertia Group.</p>
        </div>
      </div>
    </footer>
  );
}
