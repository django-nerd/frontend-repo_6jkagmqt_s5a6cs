import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Now on Shopify App Store
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-white">
            Loyalty that pays back — for you and your customers
          </h1>

          <p className="mt-5 text-lg md:text-xl leading-relaxed text-white/80">
            Perq turns casual shoppers into repeat buyers with a modern, flexible loyalty platform built for Shopify. Points, tiers, referrals, and more — all in minutes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-medium hover:bg-white/90 transition">
              Add to Shopify
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition">
              See live demo
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70">
            <div>
              <div className="text-3xl font-semibold text-white">+18%</div>
              <div className="text-sm">avg. increase in repeat purchase rate</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">7 min</div>
              <div className="text-sm">to launch your first program</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">99.9%</div>
              <div className="text-sm">uptime with Shopify-native integration</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">CSAT 4.9</div>
              <div className="text-sm">merchants love Perq's simplicity</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero