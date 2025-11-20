import { useEffect, useRef } from 'react'

// Canvas-based aurora ribbons for background flair
function Aurora() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let rafId

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const ribbons = new Array(3).fill(0).map((_, i) => ({
      hue: 200 + i * 40,
      t: Math.random() * Math.PI * 2,
      speed: 0.001 + Math.random() * 0.002
    }))

    function draw() {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      ribbons.forEach((r, idx) => {
        r.t += r.speed
        ctx.beginPath()
        for (let x = 0; x <= width; x += 6) {
          const y = height * 0.5 + Math.sin(x * 0.008 + r.t + idx) * 40 + Math.sin(x * 0.003 + r.t * 2) * 20
          const off = Math.sin(x * 0.002 + r.t) * 30
          if (x === 0) ctx.moveTo(x, y + off)
          else ctx.lineTo(x, y + off)
        }
        const grad = ctx.createLinearGradient(0, 0, width, 0)
        grad.addColorStop(0, `hsla(${r.hue},100%,60%,0)`)
        grad.addColorStop(0.5, `hsla(${r.hue + 120},100%,60%,0.12)`)
        grad.addColorStop(1, `hsla(${r.hue + 60},100%,60%,0)`)
        ctx.strokeStyle = grad
        ctx.lineWidth = 60
        ctx.lineCap = 'round'
        ctx.stroke()
      })

      rafId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950" />
    </div>
  )
}

export { Aurora }
