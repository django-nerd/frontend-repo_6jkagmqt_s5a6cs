import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_30%_0%,rgba(99,102,241,0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-800/70 p-10 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold text-white">Ready to grow repeat revenue?</h3>
              <p className="mt-3 text-white/70">Install Perq on your Shopify store and launch your loyalty program today.</p>
            </div>
            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              href="#"
              className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 px-6 py-4 font-medium hover:bg-white/90 transition w-full md:w-auto"
            >
              Add to Shopify
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA