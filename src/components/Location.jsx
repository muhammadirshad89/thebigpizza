import { BIZ } from '../data.js'
import Hours from './Hours.jsx'
export default function Location() {
  return (
    <section id="location"><div className="w"><div className="eb">Location</div><h2>Find us in DHA</h2>
      <div className="lc"><div className="pn"><h3>The Big Pizza</h3>
        <p>Plot #17-C Khayaban-e-Ittehad Road<br />Phase 2 Ext, DHA<br />Karachi, 75500, Pakistan</p>
        <p>Phone: <a href={BIZ.phone}>{BIZ.phoneDisplay}</a></p>
        <div className="cta" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a className="btn" href={BIZ.phone}>Call Now</a>
          <a className="btn o" href={BIZ.directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a></div>
        <h3 style={{ margin: '28px 0 6px' }}>Opening Hours</h3><Hours /></div>
        <div className="lr"><img className="st" src="/images/store.webp" alt="The Big Pizza storefront on Khayaban-e-Ittehad Road, DHA" loading="lazy" width="765" height="1020" />
        <div className="map">{BIZ.mapEmbed
          ? <iframe src={BIZ.mapEmbed} title="Map to The Big Pizza" loading="lazy" />
          : <div>Plot #17-C Khayaban-e-Ittehad Road, Phase 2 Ext, DHA, Karachi<br /><br /><a className="btn" href={BIZ.directionsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></div>}</div></div></div></div></section>
  )
}
