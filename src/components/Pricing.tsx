import { useEffect, useRef, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'For individuals and small projects.',
    priceId: 'price_1TEpbRPo4rWTtRjVDQpkWsOL',
    features: [
      'Up to 3 team members',
      '1 design system',
      '500 tokens',
      'Figma plugin',
      'Community support',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing design teams.',
    priceId: 'price_1TEpbUPo4rWTtRjVV7qWSWaG',
    features: [
      'Unlimited team members',
      '5 design systems',
      'Unlimited tokens',
      'Figma + Storybook sync',
      'Version control & branching',
      'Adoption analytics',
      'Priority support',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$79',
    period: '/month',
    description: 'For large organizations.',
    priceId: 'price_1TEpbXPo4rWTtRjVzpHiIrvI',
    features: [
      'Everything in Pro',
      'Unlimited design systems',
      'Multi-brand management',
      'SSO & SAML',
      'Advanced governance',
      'SLA & dedicated support',
      'Custom integrations',
    ],
    cta: 'Get started',
    highlighted: false,
  },
];

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

async function createCheckoutSession(priceId: string): Promise<string> {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/create-checkout-session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Apikey: SUPABASE_ANON_KEY,
    },
    body: JSON.stringify({ priceId }),
  });

  const data = await res.json();
  if (!res.ok || !data.url) throw new Error(data.error ?? 'Failed to create checkout session');
  return data.url;
}

function PlanButton({
  priceId,
  cta,
  highlighted,
}: {
  priceId: string;
  cta: string;
  highlighted: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleClick() {
    setLoading(true);
    setError('');
    try {
      const url = await createCheckoutSession(priceId);
      window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 text-[15px] font-medium py-3 rounded-full transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
          highlighted
            ? 'bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]'
            : 'bg-[#0071e3] text-white hover:bg-[#0077ed]'
        }`}
      >
        {loading && <Loader2 size={14} className="animate-spin" />}
        {loading ? 'Redirecting...' : cta}
      </button>
      {error && (
        <p className="text-[12px] text-red-500 mt-2 text-center">{error}</p>
      )}
    </div>
  );
}

export default function Pricing() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-[980px] mx-auto px-5">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#0071e3] text-[17px] font-semibold mb-3 tracking-tight">
            Simple pricing
          </p>
          <h2
            className="font-semibold text-[#1d1d1f] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
          >
            Start free, scale
            <br />
            when you're ready.
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-[340px] mx-auto">
            No hidden fees. Cancel or change plans anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-[22px] p-7 flex flex-col transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } ${
                plan.highlighted
                  ? 'bg-[#1d1d1f]'
                  : 'bg-[#f5f5f7]'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#0071e3] text-white text-[11px] font-semibold px-3.5 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-7">
                <p className={`text-[12px] font-semibold uppercase tracking-widest mb-3 ${plan.highlighted ? 'text-[#6e6e73]' : 'text-[#6e6e73]'}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`text-[40px] font-semibold tracking-tight leading-none ${
                      plan.highlighted ? 'text-white' : 'text-[#1d1d1f]'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-[15px] ${plan.highlighted ? 'text-[#6e6e73]' : 'text-[#6e6e73]'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-[14px] ${plan.highlighted ? 'text-[#8e8e93]' : 'text-[#6e6e73]'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-[#0071e3]' : 'text-[#0071e3]'}`}
                      strokeWidth={2.5}
                    />
                    <span className={`text-[14px] ${plan.highlighted ? 'text-[#aeaeb2]' : 'text-[#3a3a3c]'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <PlanButton
                priceId={plan.priceId}
                cta={plan.cta}
                highlighted={plan.highlighted}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
