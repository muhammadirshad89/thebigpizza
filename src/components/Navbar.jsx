import { useState, useEffect } from 'react'
import { BIZ, LINKS } from '../data.js'
import { useScrolled } from '../hooks.js'
export default function Navbar() {
  const s = useScrolled(), [o, setO] = useState(false)
  useEffect(() => { const k = e => e.key === 'Escape' && setO(false); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [])
  useEffect(() => { document.body.style.overflow = o ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [o])
  useEffect(() => { const m = matchMedia('(min-width:861px)'), f = () => m.matches && setO(false); m.addEventListener('change', f); return () => m.removeEventListener('change', f) }, [])
  return (
    <nav className={'site-nav' + (s ? ' s' : '')} aria-label="Main"><div className="w">
      <a className="lg" href="#home" aria-label="The Big Pizza home"><img src={BIZ.logo} alt="The Big Pizza logo" width="44" height="44" /><span>The Big Pizza</span></a>
      <div id="site-menu" className={'nl' + (o ? ' o' : '')} onClick={e => e.target.tagName === 'A' && setO(false)}>
        {LINKS.map(l => <a key={l} href={'#' + l.toLowerCase()}>{l}</a>)}
        <a className="btn" href={BIZ.orderUrl}>Order Now</a>
      </div>
      <button className="bg" aria-label="Toggle menu" aria-expanded={o} aria-controls="site-menu" onClick={() => setO(!o)}><span /><span /></button>
    </div></nav>
  )
}
