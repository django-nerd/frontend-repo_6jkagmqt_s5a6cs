import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    highlight: 'Best for new stores',
    features: ['Up to 500 members', 'Points & rewards', 'Basic referrals', 'Email support']
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/mo',
    highlight: 'Most popular',
    features: ['10k members', 'VIP tiers', 'Advanced referrals', 'Shopify POS', 'Priority support']
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    highlight: 'For high-volume brands',
    features: ['Unlimited members', 'SLA + SSO', 'Dedicated CSM', 'Headless APIs']
  }
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-gradient-to-b from-slate-900/80 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_200px_at_70%_0%,rgba(234,88,12,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free, upgrade as you grow. No hidden fees.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur ${t.highlight === 'Most popular' ? 'ring-2 ring-white/20' : ''}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-white">{t.name}</h3>
                {t.highlight && <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-white/70">{t.highlight}</span>}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <div className="text-4xl font-semibold text-white">{t.price}</div>
                <div className="text-white/60">{t.period}</div>
              </div>
              <ul className="mt-6 space-y-3 text-white/80 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white text-slate-900 px-4 py-2 font-medium hover:bg-white/90 transition">Get started</a>
              <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-orange-500/25 to-blue-600/25 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
