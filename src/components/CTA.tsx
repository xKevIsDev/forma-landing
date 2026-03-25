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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 px-5 bg-white">
      <div
        ref={ref}
        className={`max-w-[980px] mx-auto rounded-[28px] overflow-hidden relative transition-all duration-700 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
        }`}
        style={{
          background: 'linear-gradient(145deg, #1d1d1f 0%, #2d2d2f 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 80% at 90% 50%, rgba(0, 113, 227, 0.2) 0%, transparent 60%)',
          }}
        />

        <div className="relative px-12 py-20 md:px-20 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left max-w-lg">
            <h2
              className="font-semibold text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
            >
              Ready to build something
              beautiful together?
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed">
              Join thousands of teams already using Forma to build better products, faster.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 flex-shrink-0">
            <a
              href="#"
              className="group flex items-center gap-2 bg-[#0071e3] text-white text-[17px] font-normal px-7 py-3.5 rounded-full hover:bg-[#0077ed] transition-all duration-200 whitespace-nowrap"
            >
              Start for free
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </a>
            <p className="text-[12px] text-[#6e6e73]">No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
