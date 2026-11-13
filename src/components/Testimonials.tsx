import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote:
      "Forma cut our design-to-code handoff time by 60%. The token sync with Figma alone was worth it. I genuinely don't know how we shipped without it.",
    author: 'Maya Chen',
    role: 'Head of Design',
    company: 'Loom',
    avatar: 'MC',
    color: '#DBEAFE',
    textColor: '#1D4ED8',
  },
  {
    quote:
      'Finally, a design system tool that engineers actually want to use. The API is clean, the docs are excellent, and the versioning model makes total sense.',
    author: 'James Okafor',
    role: 'Principal Engineer',
    company: 'Ramp',
    avatar: 'JO',
    color: '#D1FAE5',
    textColor: '#065F46',
  },
  {
    quote:
      "We manage 14 brands across 3 continents. Forma's multi-brand architecture is the only thing that's ever made that feel manageable.",
    author: 'Sophie Dubois',
    role: 'Design Systems Lead',
    company: 'Contentsquare',
    avatar: 'SD',
    color: '#FEF3C7',
    textColor: '#92400E',
  },
  {
    quote:
      "The adoption analytics feature changed how we talk to stakeholders. We went from 'we think it's going well' to showing real data. Night and day.",
    author: 'Carlos Reyes',
    role: 'Product Designer',
    company: 'Brex',
    avatar: 'CR',
    color: '#FCE7F3',
    textColor: '#9D174D',
  },
  {
    quote:
      "Onboarding a new designer used to take weeks just to understand our system. With Forma's living docs, it takes an afternoon.",
    author: 'Nina Hartman',
    role: 'VP Design',
    company: 'Mercury',
    avatar: 'NH',
    color: '#EDE9FE',
    textColor: '#5B21B6',
  },
  {
    quote:
      'The PR workflow for design tokens sounds intimidating, but the UX makes it completely natural. Our design and engineering teams finally speak the same language.',
    author: 'Takeshi Yamamoto',
    role: 'Frontend Lead',
    company: 'Retool',
    avatar: 'TY',
    color: '#FFEDD5',
    textColor: '#9A3412',
  },
];

function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  color,
  textColor,
  index,
}: (typeof testimonials)[0] & { index: number }) {
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
      className={`p-6 rounded-2xl border border-[#E7E5E4] bg-white hover-lift transition-all duration-500 flex flex-col gap-4 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <p className="text-sm text-[#44403C] leading-relaxed font-light flex-1">"{quote}"</p>
      <div className="flex items-center gap-3 pt-2 border-t border-[#F5F5F4]">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-semibold flex-shrink-0"
          style={{ backgroundColor: color, color: textColor }}
        >
          {avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-[#111110]">{author}</p>
          <p className="text-xs text-[#A8A29E]">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
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
    <section className="py-28 bg-[#FFFBEB] border-y border-[#FDE68A]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs font-medium text-[#B45309] uppercase tracking-widest mb-4">
            What teams say
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-[#111110] leading-tight">
            Loved by design teams
            <br />
            <span className="italic text-[#B45309]">across the world.</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <div key={t.author} className="break-inside-avoid">
              <TestimonialCard {...t} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
