import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote:
      "Forma cut our design-to-code handoff time by 60%. The token sync with Figma alone was worth it. I genuinely don't know how we shipped without it.",
    author: 'Maya Chen',
    role: 'Head of Design',
    company: 'Loom',
    avatar: 'MC',
  },
  {
    quote:
      'Finally, a design system tool that engineers actually want to use. The API is clean, the docs are excellent, and the versioning model makes total sense.',
    author: 'James Okafor',
    role: 'Principal Engineer',
    company: 'Ramp',
    avatar: 'JO',
  },
  {
    quote:
      "We manage 14 brands across 3 continents. Forma's multi-brand architecture is the only thing that's ever made that feel manageable.",
    author: 'Sophie Dubois',
    role: 'Design Systems Lead',
    company: 'Contentsquare',
    avatar: 'SD',
  },
  {
    quote:
      "The adoption analytics feature changed how we talk to stakeholders. We went from 'we think it's going well' to showing real data. Night and day.",
    author: 'Carlos Reyes',
    role: 'Product Designer',
    company: 'Brex',
    avatar: 'CR',
  },
  {
    quote:
      "Onboarding a new designer used to take weeks just to understand our system. With Forma's living docs, it takes an afternoon.",
    author: 'Nina Hartman',
    role: 'VP Design',
    company: 'Mercury',
    avatar: 'NH',
  },
  {
    quote:
      'The PR workflow for design tokens sounds intimidating, but the UX makes it completely natural. Our design and engineering teams finally speak the same language.',
    author: 'Takeshi Yamamoto',
    role: 'Frontend Lead',
    company: 'Retool',
    avatar: 'TY',
  },
];

function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  index,
}: (typeof testimonials)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 50);
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
      className={`p-7 rounded-[18px] bg-white flex flex-col gap-5 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)' }}
    >
      <p className="text-[15px] text-[#1d1d1f] leading-relaxed flex-1">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#0071e3] flex items-center justify-center text-[11px] font-semibold text-white flex-shrink-0">
          {avatar}
        </div>
        <div>
          <p className="text-[14px] font-semibold text-[#1d1d1f]">{author}</p>
          <p className="text-[12px] text-[#6e6e73]">
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
      { threshold: 0.2 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-5">
        <div
          ref={headingRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#0071e3] text-[17px] font-semibold mb-3 tracking-tight">
            What teams say
          </p>
          <h2
            className="font-semibold text-[#1d1d1f] leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
          >
            Loved by design teams
            <br />
            across the world.
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-3 space-y-3">
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
