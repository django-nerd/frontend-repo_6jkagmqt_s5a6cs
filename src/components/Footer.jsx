function Footer() {
  return (
    <footer id="faq" className="relative py-12 text-center text-white/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">© {new Date().getFullYear()} Perq — All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer