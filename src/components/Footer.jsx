import { BIZ, LINKS, HOURS } from '../data.js'
const short = t => t.replace(/:00/g, '').replace(' – ', '–')
export default function Footer() {
  return (
    <footer>
      <div className="w"><div className="fg">
        <div><img className="fl" src={BIZ.logo} alt="The Big Pizza logo" width="64" height="64" />
          <h3>The Big Pizza</h3>
          <p>Karachi's Biggest Pizza · Karachi's Biggest Slice. Freshly baked fast food treats delivered hot to your door. Dine in or order!</p></div>
        <nav aria-label="Footer"><h3>Quick Links</h3>{LINKS.map(l => <a key={l} href={'#' + l.toLowerCase()}>{l}</a>)}</nav>
        <div><h3>Contact</h3>
          <p>Plot #17-C Khayaban-e-Ittehad Road<br />Phase 2 Ext DHA<br />Karachi, 75500</p>
          <a href={BIZ.phone}>{BIZ.phoneDisplay}</a></div>
        <div><h3>Opening Hours</h3>
          <ul className="fh">{HOURS.map(h => <li key={h[0]}><span>{h[0]}</span><span>{short(h[1])}</span></li>)}</ul>
          <p className="fn">Closing at 5 AM is the following morning.</p></div>
      </div></div>
      <div className="fbar"><div className="w">
        <span>© The Big Pizza. All rights reserved.</span>
        <span className="dev">Design &amp; Developed by Syyed Muhammad Irshad <i aria-hidden="true">·</i> <a href={BIZ.devWhatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: +92 321 8100537</a></span>
      </div></div>
    </footer>
  )
}
