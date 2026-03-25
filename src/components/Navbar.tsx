import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Features', 'Pricing', 'About', 'Blog'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAF9]/95 backdrop-blur-md border-b border-[#E7E5E4] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#111110] flex items-center justify-center">
            <Zap size={14} className="text-white" fill="white" />
          </div>
          <span className="font-semibold text-[#111110] tracking-tight text-lg">Forma</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-[#78716C] hover:text-[#111110] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-[#78716C] hover:text-[#111110] transition-colors duration-200 px-3 py-2">
            Sign in
          </a>
          <a
            href="#"
            className="text-sm font-medium bg-[#111110] text-white px-4 py-2 rounded-lg hover:bg-[#292524] transition-colors duration-200"
          >
            Get started
          </a>
        </div>

        <button
          className="md:hidden p-2 text-[#78716C] hover:text-[#111110] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#FAFAF9] border-b border-[#E7E5E4] px-6 pb-4">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-3 text-sm text-[#78716C] hover:text-[#111110] border-b border-[#E7E5E4] last:border-0 transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="mt-4 block text-center text-sm font-medium bg-[#111110] text-white px-4 py-2.5 rounded-lg"
          >
            Get started
          </a>
        </div>
      )}
    </nav>
  );
}
