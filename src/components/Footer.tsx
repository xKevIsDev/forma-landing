const links = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Security'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Community', 'Status', 'Support'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses'],
};

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-black/[0.06] pt-14 pb-8 px-5">
      <div className="max-w-[980px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-10">
          <div className="col-span-2">
            <span className="text-[17px] font-semibold text-[#1d1d1f] tracking-tight block mb-4">
              Forma
            </span>
            <p className="text-[13px] text-[#6e6e73] leading-relaxed max-w-[220px]">
              The design system platform for teams who care about quality.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-black/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#6e6e73]">
            Copyright &copy; {new Date().getFullYear()} Forma, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Use', 'Site Map'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
