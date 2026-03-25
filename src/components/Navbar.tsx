import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Features', 'Pricing', 'About', 'Blog'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'apple-glass border-b border-black/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[980px] mx-auto px-5 h-[44px] flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-[17px] font-semibold text-[#1d1d1f] tracking-tight">Forma</span>
        </div>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors duration-200">
            Sign in
          </a>
          <a
            href="#"
            className="text-[12px] font-medium bg-[#0071e3] text-white px-[14px] py-[6px] rounded-full hover:bg-[#0077ed] active:bg-[#006edb] transition-colors duration-200"
          >
            Get started
          </a>
        </div>

        <button
          className="md:hidden p-1 text-[#1d1d1f] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden apple-glass border-t border-black/[0.06] px-5 py-4">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-3 text-[14px] text-[#1d1d1f] border-b border-black/[0.06] last:border-0 transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="mt-4 block text-center text-[14px] font-medium bg-[#0071e3] text-white px-5 py-2.5 rounded-full"
          >
            Get started
          </a>
        </div>
      )}
    </nav>
  );
}
