import { BIZ } from '../data.js'
export default function CTA() {
  return (
    <section className="or"><div className="w rv"><h2>Craving Karachi's biggest slice?</h2><p>Get your pizza hot and fresh.</p>
      <div className="cta"><a className="btn y" href={BIZ.phone}>Call {BIZ.phoneDisplay}</a><a className="btn o" href={BIZ.orderUrl}>Order Now</a></div></div></section>
  )
}
