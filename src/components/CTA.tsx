import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto rounded-3xl bg-[#111110] overflow-hidden relative transition-all duration-700 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
        }`}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(217, 119, 6, 0.35) 0%, transparent 60%)',
          }}
        />

        <div className="relative px-10 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-white leading-tight mb-3">
              Ready to build something
              <br />
              <span className="italic text-[#FCD34D]">beautiful together?</span>
            </h2>
            <p className="text-[#78716C] text-base font-light max-w-md">
              Join thousands of teams already using Forma to build better products, faster.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 flex-shrink-0">
            <a
              href="#"
              className="group flex items-center gap-2 bg-[#F59E0B] text-[#111110] text-sm font-medium px-7 py-3.5 rounded-xl hover:bg-[#FBBF24] transition-all duration-200 whitespace-nowrap"
            >
              Start for free
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </a>
            <p className="text-xs text-[#57534E]">No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
