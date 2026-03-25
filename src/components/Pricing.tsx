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
        className={`w-full flex items-center justify-center gap-2 text-sm font-medium py-3 rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed ${
          highlighted
            ? 'bg-white text-[#111110] hover:bg-[#F5F5F4]'
            : 'bg-[#111110] text-white hover:bg-[#292524]'
        }`}
      >
        {loading && <Loader2 size={14} className="animate-spin" />}
        {loading ? 'Redirecting...' : cta}
      </button>
      {error && (
        <p className="text-xs text-red-500 mt-2 text-center">{error}</p>
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-28 px-6 max-w-6xl mx-auto">
      <div
        ref={ref}
        className={`text-center mb-16 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-xs font-medium text-[#16A34A] uppercase tracking-widest mb-4">
          Simple pricing
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-[#111110] leading-tight mb-4">
          Start free, scale
          <br />
          <span className="italic text-[#44403C]">when you're ready.</span>
        </h2>
        <p className="text-[#78716C] max-w-sm mx-auto text-base font-light">
          No hidden fees. Cancel or change plans anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-6 flex flex-col transition-all duration-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            } ${
              plan.highlighted
                ? 'bg-[#111110] text-white border border-[#111110]'
                : 'bg-white border border-[#E7E5E4] hover-lift'
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#16A34A] text-white text-[10px] font-semibold px-3 py-1 rounded-full">
                  Most popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-widest mb-2 text-[#A8A29E]">
                {plan.name}
              </p>
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className={`text-4xl font-semibold tracking-tight ${
                    plan.highlighted ? 'text-white' : 'text-[#111110]'
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? 'text-[#A8A29E]' : 'text-[#78716C]'
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`text-sm font-light ${
                  plan.highlighted ? 'text-[#D6D3D1]' : 'text-[#78716C]'
                }`}
              >
                {plan.description}
              </p>
            </div>

            <div className="flex-1 space-y-3 mb-8">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <Check
                    size={14}
                    className="mt-0.5 flex-shrink-0 text-[#16A34A]"
                    strokeWidth={2.5}
                  />
                  <span
                    className={`text-sm font-light ${
                      plan.highlighted ? 'text-[#D6D3D1]' : 'text-[#44403C]'
                    }`}
                  >
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
    </section>
  );
}
