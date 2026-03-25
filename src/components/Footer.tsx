import { Zap } from 'lucide-react';

const links = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Security'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Community', 'Status', 'Support'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses'],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#E7E5E4] pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#111110] flex items-center justify-center">
                <Zap size={14} className="text-white" fill="white" />
              </div>
              <span className="font-semibold text-[#111110] tracking-tight text-lg">Forma</span>
            </div>
            <p className="text-sm text-[#78716C] font-light leading-relaxed max-w-xs">
              The design system platform for teams who care about quality.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {['X', 'GH', 'LI'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-[#F5F5F4] border border-[#E7E5E4] flex items-center justify-center text-[10px] font-semibold text-[#78716C] hover:bg-[#E7E5E4] hover:text-[#111110] transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-semibold text-[#111110] uppercase tracking-wider mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#78716C] hover:text-[#111110] transition-colors duration-200 font-light"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#E7E5E4] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#A8A29E]">
            &copy; {new Date().getFullYear()} Forma, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
            <p className="text-xs text-[#A8A29E]">All systems operational</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
