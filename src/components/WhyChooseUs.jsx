const W = [['Freshly Baked', 'Fast food treats baked fresh.'], ['Hot Delivery', 'Delivered hot to your door.'], ['Big Slices', "Karachi's biggest slice."], ['Dine In', 'Sit down at our DHA spot.'], ['Order & Enjoy', "Call and it's on the way."]]
export default function WhyChooseUs() {
  return (
    <section><div className="w"><div className="eb">Why The Big Pizza</div><h2>Everything you came for</h2>
      <div className="wy">{W.map((w, i) => <div className="rv" key={w[0]}><b>0{i + 1}</b><h3>{w[0]}</h3><p>{w[1]}</p></div>)}</div></div></section>
  )
}
