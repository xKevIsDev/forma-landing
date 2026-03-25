import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% -20%, rgba(0, 113, 227, 0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-[980px] mx-auto px-5 pt-32 pb-20 text-center">
        <div className="animate-fade-in-up">
          <p className="text-[#0071e3] text-[17px] font-semibold mb-4 tracking-tight">
            Forma
          </p>
        </div>

        <h1
          className="animate-fade-in-up delay-100 text-[#1d1d1f] font-semibold leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}
        >
          Design systems
          <br />
          that actually scale.
        </h1>

        <p
          className="animate-fade-in-up delay-200 text-[#6e6e73] font-normal leading-relaxed mx-auto mb-10"
          style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)', maxWidth: '520px' }}
        >
          Forma unifies your design tokens, components, and documentation
          into a single source of truth your whole team loves.
        </p>

        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
          <a
            href="#"
            className="group flex items-center gap-1.5 bg-[#0071e3] text-white text-[17px] font-normal px-6 py-3 rounded-full hover:bg-[#0077ed] transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Start for free
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 text-[#0071e3] text-[17px] font-normal hover:underline transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Learn more
            <ArrowRight size={16} />
          </a>
        </div>

        <p className="animate-fade-in-up delay-400 text-[12px] text-[#6e6e73]">
          Free forever &middot; No credit card &middot; Cancel anytime
        </p>
      </div>

      <div className="relative w-full max-w-[900px] mx-auto px-5 pb-24 animate-scale-in delay-500">
        <div
          className="relative rounded-[18px] overflow-hidden"
          style={{
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)',
          }}
        >
          <div className="h-9 bg-[#f5f5f7] flex items-center gap-1.5 px-4 border-b border-black/[0.06]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <div className="flex-1 mx-6 h-5 bg-white rounded-md border border-black/[0.06] flex items-center px-3">
              <span className="text-[10px] text-[#6e6e73]">app.forma.design/tokens</span>
            </div>
          </div>
          <div className="bg-white p-8 grid grid-cols-4 gap-4 min-h-[300px] md:min-h-[360px]">
            <div className="col-span-1 space-y-1.5">
              <div className="h-2.5 bg-[#f5f5f7] rounded w-3/4 mb-3" />
              {['Colors', 'Typography', 'Spacing', 'Shadows', 'Borders', 'Motion'].map((item, i) => (
                <div
                  key={item}
                  className={`h-8 rounded-lg flex items-center px-3 text-[12px] font-medium transition-colors cursor-default ${
                    i === 0
                      ? 'bg-[#0071e3] text-white'
                      : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="col-span-3 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div className="h-2.5 bg-[#f5f5f7] rounded w-20" />
                <div className="h-6 bg-[#f5f5f7] rounded-lg w-14" />
              </div>
              <div className="grid grid-cols-5 gap-3">
                {[
                  { color: '#1d1d1f', name: '950' },
                  { color: '#3a3a3c', name: '900' },
                  { color: '#636366', name: '700' },
                  { color: '#8e8e93', name: '500' },
                  { color: '#aeaeb2', name: '400' },
                  { color: '#c7c7cc', name: '300' },
                  { color: '#d1d1d6', name: '200' },
                  { color: '#e5e5ea', name: '100' },
                  { color: '#f2f2f7', name: '50' },
                  { color: '#0071e3', name: 'blue' },
                ].map(({ color, name }) => (
                  <div key={name} className="space-y-1">
                    <div
                      className="h-10 rounded-lg"
                      style={{ backgroundColor: color, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }}
                    />
                    <p className="text-[9px] text-[#6e6e73] text-center">{name}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-2 bg-[#f5f5f7] rounded-full w-full" />
                <div className="h-2 bg-[#f5f5f7] rounded-full w-4/5" />
                <div className="h-2 bg-[#f5f5f7] rounded-full w-3/5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-black/[0.06] py-12">
        <div className="max-w-[980px] mx-auto px-5">
          <p className="text-center text-[12px] text-[#6e6e73] mb-8">
            Trusted by design teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-30">
            {['Stripe', 'Vercel', 'Linear', 'Figma', 'Notion', 'Arc'].map((name) => (
              <span key={name} className="text-[18px] font-semibold text-[#1d1d1f] tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
