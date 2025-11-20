import { motion } from 'framer-motion'
import { Menu, Star } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="size-9 rounded-xl bg-gradient-to-br from-orange-500 via-rose-500 to-blue-600 shadow-[0_10px_30px_rgba(0,0,0,0.35)]" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
            </div>
            <span className="text-white text-xl font-semibold tracking-tight">perq</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-medium hover:bg-white/90 transition shadow-[0_6px_30px_rgba(255,255,255,0.15)]"
            >
              <Star className="w-4 h-4 text-yellow-500" />
              Add to Shopify
            </a>
            <button className="md:hidden rounded-xl border border-white/20 p-2 text-white/90">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar