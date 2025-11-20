import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Perq made it ridiculously easy to launch a beautiful loyalty program. We saw repeat orders lift in the first month.',
    name: 'Alex Rivera',
    role: 'Founder, Nimbus Apparel'
  },
  {
    quote: 'The VIP tiers and Shopify-native discounts are exactly what we needed. Setup took minutes.',
    name: 'Sofia Park',
    role: 'COO, Kanvas Skin'
  },
  {
    quote: 'Clean design, fast performance, and our customers love the rewards. Highly recommend.',
    name: 'Marco Li',
    role: 'VP Ecommerce, Vantage Gear'
  }
]

function Testimonial() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[conic-gradient(at_0%_0%,rgba(37,99,235,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Loved by Shopify brands</h2>
          <p className="mt-3 text-white/70">Real results from teams growing LTV and repeat revenue with Perq.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-white/80">“{t.quote}”</p>
              <div className="mt-6 text-white">
                <div className="font-medium">{t.name}</div>
                <div className="text-white/60 text-sm">{t.role}</div>
              </div>
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-orange-500/20 to-blue-600/20 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
