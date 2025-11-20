import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { Aurora } from './components/Decor'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <Aurora />
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Showcase />
      <Pricing />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
