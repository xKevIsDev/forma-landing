import { useEffect, useRef, useState } from 'react';
import { Layers, GitBranch, Zap, Globe, Lock, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Token-first architecture',
    description:
      'Define your design decisions once as semantic tokens. Every component, every theme, every breakpoint inherits from a single source.',
    tag: 'Tokens',
  },
  {
    icon: GitBranch,
    title: 'Version-controlled design',
    description:
      'Branching, merging, and pull requests for your design system. Review changes before they ship, just like code.',
    tag: 'Versioning',
  },
  {
    icon: Zap,
    title: 'Zero-config integrations',
    description:
      'Connect to Figma, Storybook, or your codebase in minutes. Forma adapts to your workflow, not the other way around.',
    tag: 'Integrations',
  },
  {
    icon: Globe,
    title: 'Multi-brand at scale',
    description:
      'Manage dozens of brands or themes from one place. Share base components while customizing every brand-specific nuance.',
    tag: 'Multi-brand',
  },
  {
    icon: Lock,
    title: 'Governance & permissions',
    description:
      'Define who can edit tokens, publish releases, or consume the system. Fine-grained roles for design, engineering, and leadership.',
    tag: 'Governance',
  },
  {
    icon: BarChart3,
    title: 'Adoption analytics',
    description:
      'See exactly which components are being used, by which teams, in which products. Drive adoption with data.',
    tag: 'Analytics',
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  tag,
  index,
}: (typeof features)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`group p-6 rounded-2xl border border-[#E7E5E4] bg-white hover-lift transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#F5F5F4] flex items-center justify-center group-hover:bg-[#111110] transition-colors duration-200">
          <Icon size={18} className="text-[#78716C] group-hover:text-white transition-colors duration-200" />
        </div>
        <span className="text-[10px] font-medium text-[#A8A29E] bg-[#F5F5F4] px-2.5 py-1 rounded-full border border-[#E7E5E4]">
          {tag}
        </span>
      </div>
      <h3 className="font-medium text-[#111110] text-[0.95rem] mb-2 leading-snug">{title}</h3>
      <p className="text-sm text-[#78716C] leading-relaxed font-light">{description}</p>
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
      { threshold: 0.3 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">
      <div
        ref={headingRef}
        className={`text-center mb-16 transition-all duration-700 ${
          headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-xs font-medium text-[#16A34A] uppercase tracking-widest mb-4">
          Everything you need
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-[#111110] leading-tight mb-4">
          Built for design systems
          <br />
          <span className="italic text-[#44403C]">at every stage.</span>
        </h2>
        <p className="text-[#78716C] max-w-lg mx-auto text-base font-light leading-relaxed">
          From a startup's first component library to an enterprise's global design language,
          Forma grows with you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}
