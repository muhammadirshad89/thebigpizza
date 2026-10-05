import { GALLERY, BIZ } from '../data.js'
export default function FoodShowcase() {
  return (
    <section id="gallery"><div className="w"><div className="eb">Gallery</div><h2>Made to make you hungry</h2>
      <div className="gl">
        {GALLERY.map(g => (
          <figure className={g.cls + ' rv'} key={g.img}><img src={g.img} alt={g.alt} loading="lazy" style={g.pos ? { objectPosition: g.pos } : undefined} />{g.cap && <figcaption>{g.cap}</figcaption>}</figure>))}
        <div className="g7 rv"><h3>Dine in or order</h3><p>Freshly baked, hot to your door.</p><a className="btn y" href={BIZ.orderUrl}>Order Now</a></div>
      </div></div></section>
  )
}
