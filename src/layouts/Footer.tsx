export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-600 text-gray-300 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-950 font-bold">
                IG
              </div>
              <span className="text-xl font-semibold text-white">Inertia Group</span>
            </div>
            <p className="text-sm">
              High-performance connection systems: terminals, connectors, eyelets & seals.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/catalog" className="hover:text-white transition-colors">
                  Catalog
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center md:text-left text-sm">
          <p>© {currentYear} Inertia Group.</p>
        </div>
      </div>
    </footer>
  );
}
