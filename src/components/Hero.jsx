import { useState } from 'react'
import { BIZ } from '../data.js'
export default function Hero() {
  const [failed, setFailed] = useState(false)
  return (
    <header className="hero" id="home">
      <img src="/images/hero.webp" alt="Cheese and chicken pizza slices from The Big Pizza with dipping sauces" fetchpriority="high" width="1080" height="758" />
      {BIZ.videoSrc && !failed && (
        <video autoPlay muted loop playsInline preload="metadata" poster={BIZ.videoPoster} aria-hidden="true" tabIndex={-1}
          onError={() => setFailed(true)}><source src={BIZ.videoSrc} type="video/mp4" onError={() => setFailed(true)} /></video>)}
      <div className="w"><div className="hc">
        <div className="hbrand rv"><img src={BIZ.logo} alt="" width="56" height="56" /><span>The Big Pizza</span></div>
        <h1 className="rv"><span className="sr">The Big Pizza: </span>Karachi's<br />Biggest Pizza<span className="sl">Karachi's Biggest Slice</span></h1>
        <p className="lead rv">Freshly baked fast food treats delivered hot to your door.</p>
        <div className="cta rv">
          <a className="btn" href={BIZ.orderUrl}>Order Now</a>
          <a className="btn y" href={BIZ.phone}>Call Now</a>
          <a className="btn o" href={BIZ.directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
        </div>
      </div></div>
    </header>
  )
}
