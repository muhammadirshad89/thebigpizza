import { MENU } from '../data.js'
export default function Menu() {
  return (
    <section className="mn" id="menu"><div className="w"><div className="eb">Menu</div><h2>Deals &amp; Favourites</h2>
      <div className="mg">{MENU.map(m => (
        <article className="card rv" key={m.name}><img src={m.img} alt={m.name} loading="lazy" />
          <div><h3>{m.name}{m.badge && <small style={{ color: 'var(--yel)', fontSize: '.6em' }}> {m.badge}</small>}</h3>
            {m.desc && <p>{m.desc}</p>}{m.price && <p><b>{m.price}</b></p>}</div></article>))}</div>
</div></section>
  )
}
