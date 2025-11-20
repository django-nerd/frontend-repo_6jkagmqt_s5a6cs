import { motion } from 'framer-motion'

function Logos() {
  const brands = ['AURORA', 'NIMBUS', 'RIVET', 'KANVAS', 'ALTA', 'POLAR', 'MINTY', 'VANTAGE']
  return (
    <section aria-label="Trusted by modern Shopify brands" className="relative py-14 bg-gradient-to-b from-slate-900/60 to-slate-900/20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_150px_at_50%_-10%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center text-white/60 text-sm">Trusted by modern Shopify brands</div>
        <div className="mt-6 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="flex gap-10 whitespace-nowrap"
          >
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/70 backdrop-blur">
                <span className="size-2 rounded-full bg-gradient-to-br from-orange-500 to-blue-600" />
                <span className="tracking-widest text-xs md:text-sm">{b}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Logos
