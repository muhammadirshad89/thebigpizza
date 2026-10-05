import { useEffect, useState } from 'react'
export function useScrolled(px = 40) {
  const [s, set] = useState(false)
  useEffect(() => { const f = () => set(window.scrollY > px); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [px])
  return s
}
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.12 })
    document.querySelectorAll('.rv').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}
// Index into HOURS (Mon=0..Sun=6) for the shift currently running in Karachi time.
// Before 5 AM we are still in the previous day's shift.
export function todayIndex() {
  const k = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }))
  let d = k.getDay(); if (k.getHours() < 5) d = (d + 6) % 7
  return (d + 6) % 7
}
