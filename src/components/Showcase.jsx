import { motion } from 'framer-motion'

function Showcase() {
  return (
    <section id="how" className="relative py-28 bg-gradient-to-b from-slate-900 to-slate-900/80">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">Setup</div>
            <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-white">Launch in minutes</h3>
            <p className="mt-3 text-white/70">Connect your store, choose rewards, and publish. Perq auto-syncs customers, orders, and discounts.</p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex gap-3"><span className="mt-1 size-1.5 rounded-full bg-emerald-400" />Works with Shopify discounts</li>
              <li className="flex gap-3"><span className="mt-1 size-1.5 rounded-full bg-emerald-400" />POS support for in-store rewards</li>
              <li className="flex gap-3"><span className="mt-1 size-1.5 rounded-full bg-emerald-400" />Headless-ready APIs</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center text-white/60">
                <div>
                  <div className="text-center text-sm">Perq Admin Preview</div>
                  <div className="mt-3 h-1.5 w-40 rounded-full bg-white/10 mx-auto" />
                  <div className="mt-2 h-1.5 w-20 rounded-full bg-white/10 mx-auto" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-orange-500/25 to-blue-600/25 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Showcase