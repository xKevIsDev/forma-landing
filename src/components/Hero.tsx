import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(22, 163, 74, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-[0.03] bg-[#111110] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-[0.03] bg-[#16A34A] blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white border border-[#E7E5E4] rounded-full px-4 py-1.5 text-xs font-medium text-[#78716C] mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
            Now in public beta — join 12,000+ teams
          </div>
        </div>

        <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.08] tracking-tight text-[#111110] mb-6 animate-fade-in-up delay-100">
          Design systems that
          <br />
          <span className="italic text-[#44403C]">actually scale.</span>
        </h1>

        <p className="text-[clamp(1rem,2vw,1.2rem)] text-[#78716C] max-w-xl mx-auto leading-relaxed mb-10 animate-fade-in-up delay-200 font-light">
          Forma unifies your design tokens, components, and documentation
          into a single source of truth your whole team loves.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up delay-300">
          <a
            href="#"
            className="group flex items-center gap-2 bg-[#111110] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#292524] transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Start for free
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#"
            className="group flex items-center gap-2 bg-white border border-[#E7E5E4] text-[#111110] text-sm font-medium px-6 py-3 rounded-lg hover:border-[#A8A29E] transition-all duration-200 w-full sm:w-auto justify-center shadow-sm"
          >
            <Play size={13} fill="currentColor" className="text-[#78716C]" />
            Watch demo
          </a>
        </div>

        <p className="text-xs text-[#A8A29E] mt-5 animate-fade-in-up delay-400">
          Free forever · No credit card · Cancel anytime
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-6 mt-20 animate-scale-in delay-500">
        <div className="relative rounded-2xl overflow-hidden border border-[#E7E5E4] shadow-2xl shadow-black/5">
          <div className="h-8 bg-[#F5F5F4] border-b border-[#E7E5E4] flex items-center gap-1.5 px-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]" />
            <div className="flex-1 mx-4 h-4 bg-white rounded border border-[#E7E5E4] flex items-center px-2">
              <span className="text-[9px] text-[#A8A29E]">app.forma.design/tokens</span>
            </div>
          </div>
          <div className="bg-white p-8 grid grid-cols-4 gap-4 min-h-[300px] md:min-h-[380px]">
            <div className="col-span-1 space-y-2">
              <div className="h-3 bg-[#F5F5F4] rounded w-3/4" />
              {['Colors', 'Typography', 'Spacing', 'Shadows', 'Borders', 'Motion'].map((item, i) => (
                <div
                  key={item}
                  className={`h-8 rounded-lg flex items-center px-3 text-xs font-medium transition-colors ${
                    i === 0
                      ? 'bg-[#111110] text-white'
                      : 'bg-[#FAFAF9] text-[#78716C] hover:bg-[#F5F5F4]'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="col-span-3 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div className="h-3 bg-[#F5F5F4] rounded w-24" />
                <div className="h-6 bg-[#F5F5F4] rounded-lg w-16" />
              </div>
              <div className="grid grid-cols-5 gap-3">
                {[
                  { color: '#111110', name: '950' },
                  { color: '#292524', name: '900' },
                  { color: '#44403C', name: '800' },
                  { color: '#78716C', name: '600' },
                  { color: '#A8A29E', name: '400' },
                  { color: '#D6D3D1', name: '300' },
                  { color: '#E7E5E4', name: '200' },
                  { color: '#F5F5F4', name: '100' },
                  { color: '#FAFAF9', name: '50' },
                  { color: '#16A34A', name: 'green' },
                ].map(({ color, name }) => (
                  <div key={name} className="space-y-1">
                    <div
                      className="h-10 rounded-lg border border-black/5"
                      style={{ backgroundColor: color }}
                    />
                    <p className="text-[9px] text-[#A8A29E] text-center">{name}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-2.5 bg-[#F5F5F4] rounded-full w-full" />
                <div className="h-2.5 bg-[#F5F5F4] rounded-full w-4/5" />
                <div className="h-2.5 bg-[#F5F5F4] rounded-full w-3/5" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/5 blur-xl rounded-full" />
      </div>

      <div className="w-full border-t border-[#E7E5E4] mt-20 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-xs font-medium text-[#A8A29E] uppercase tracking-widest mb-8">
            Trusted by design teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
            {['Stripe', 'Vercel', 'Linear', 'Figma', 'Notion', 'Arc'].map((name) => (
              <span key={name} className="text-lg font-semibold text-[#44403C] tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
