import { useEffect, useRef, useState } from 'react';
import { Layers, GitBranch, Zap, Globe, Lock, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Token-first architecture',
    description:
      'Define your design decisions once as semantic tokens. Every component, every theme, every breakpoint inherits from a single source.',
  },
  {
    icon: GitBranch,
    title: 'Version-controlled design',
    description:
      'Branching, merging, and pull requests for your design system. Review changes before they ship, just like code.',
  },
  {
    icon: Zap,
    title: 'Zero-config integrations',
    description:
      'Connect to Figma, Storybook, or your codebase in minutes. Forma adapts to your workflow, not the other way around.',
  },
  {
    icon: Globe,
    title: 'Multi-brand at scale',
    description:
      'Manage dozens of brands or themes from one place. Share base components while customizing every brand-specific nuance.',
  },
  {
    icon: Lock,
    title: 'Governance & permissions',
    description:
      'Define who can edit tokens, publish releases, or consume the system. Fine-grained roles for design, engineering, and leadership.',
  },
  {
    icon: BarChart3,
    title: 'Adoption analytics',
    description:
      'See exactly which components are being used, by which teams, in which products. Drive adoption with data.',
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: (typeof features)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 60);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`p-7 rounded-[18px] bg-[#f5f5f7] transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-5" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <Icon size={18} className="text-[#0071e3]" />
      </div>
      <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2 tracking-tight leading-snug">{title}</h3>
      <p className="text-[15px] text-[#6e6e73] leading-relaxed">{description}</p>
    </div>
  );
}

export default function Features() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[980px] mx-auto px-5">
        <div
          ref={headingRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#0071e3] text-[17px] font-semibold mb-3 tracking-tight">
            Everything you need
          </p>
          <h2
            className="font-semibold text-[#1d1d1f] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
          >
            Built for design systems
            <br />
            at every stage.
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-[480px] mx-auto leading-relaxed">
            From a startup's first component library to an enterprise's global design language,
            Forma grows with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
