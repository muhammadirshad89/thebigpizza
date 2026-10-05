import { BIZ } from '../data.js'
export default function Contact() {
  return (
    <section className="ct" id="contact"><div className="w"><div className="eb">Contact</div><h2>Order or visit</h2>
      <p style={{ color: 'var(--mu)', marginTop: 18 }}><strong style={{ color: '#fff' }}>The Big Pizza</strong><br />Plot #17-C Khayaban-e-Ittehad Road, Phase 2 Ext DHA, Karachi<br />Call: <a href={BIZ.phone}>{BIZ.phoneDisplay}</a></p>
      <div className="cta" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a className="btn" href={BIZ.phone}>Call Now</a>
        {BIZ.restaurantWhatsapp && <a className="btn o" href={BIZ.restaurantWhatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
        <a className="btn o" href={BIZ.directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a></div></div></section>
  )
}
