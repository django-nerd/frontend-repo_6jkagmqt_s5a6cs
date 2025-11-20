import { motion } from 'framer-motion'
import { Gift, Crown, Share2, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Gift,
    title: 'Points & Rewards',
    desc: 'Give points for purchases, signups, reviews, and more. Redeem for discounts, gifts, or perks.'
  },
  {
    icon: Crown,
    title: 'VIP Tiers',
    desc: 'Create Bronze, Silver, Gold levels with automatic upgrades and exclusive benefits.'
  },
  {
    icon: Share2,
    title: 'Referrals',
    desc: 'Turn customers into advocates with one-click share links and double-sided rewards.'
  },
  {
    icon: Sparkles,
    title: 'Shopify-Native',
    desc: 'Install in minutes. Works with your checkout, customer accounts, discounts, and POS.'
  }
]

function Features() {
  return (
    <section id="features" className="relative py-28 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_70%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
          >
            Everything you need to drive repeat purchases
          </motion.h2>
          <p className="mt-4 text-white/70 text-lg">
            Purpose-built for modern Shopify brands. No bloat, no complexity — just results.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-2">
                    {f.icon && <f.icon className="w-5 h-5 text-white" />}
                  </div>
                  <h3 className="text-white font-medium">{f.title}</h3>
                </div>
                <div className="text-white/40 text-sm">Perq</div>
              </div>
              <p className="mt-4 text-white/70 leading-relaxed text-sm">{f.desc}</p>
              <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-orange-500/20 to-blue-600/20 blur-2xl transition-all duration-500 group-hover:bottom-0 group-hover:right-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features