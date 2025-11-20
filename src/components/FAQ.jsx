import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'How long does setup take?',
    a: 'Most stores launch in under 10 minutes. Perq auto-syncs customers, orders, and discounts with Shopify.'
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. Start free and upgrade as you grow.'
  },
  {
    q: 'Does it work with Shopify POS?',
    a: 'Yes, you can reward and redeem points in-store with POS.'
  },
  {
    q: 'Can I migrate from another loyalty app?',
    a: 'Absolutely. Our team helps import members and point balances.'
  }
]

function FAQ() {
  return (
    <section id="faq" className="relative py-28 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_200px_at_30%_0%,rgba(2,132,199,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">FAQs</h2>
          <p className="mt-3 text-white/70">Quick answers to common questions</p>
        </div>

        <div className="mt-12 mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group open:bg-white/5 px-5 py-4"
            >
              <summary className="cursor-pointer list-none text-white/90 font-medium">
                {f.q}
              </summary>
              <p className="mt-2 text-white/70">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
