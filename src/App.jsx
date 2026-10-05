import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import FoodShowcase from './components/FoodShowcase.jsx'
import VideoSection from './components/VideoSection.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import CTA from './components/CTA.jsx'
import Location from './components/Location.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { BIZ } from './data.js'
import { useReveal } from './hooks.js'
export default function App() {
  useReveal()
  return (
    <>
      <a className="skip" href="#about">Skip to content</a><Navbar /><Hero />
      <div className="mqw" aria-hidden="true"><div className="mq"><div>Karachi's Biggest Pizza ✦ Karachi's Biggest Slice ✦ Freshly Baked ✦ Hot To Your Door ✦ Dine In ✦ Karachi's Biggest Pizza ✦ Karachi's Biggest Slice ✦ Freshly Baked ✦ Hot To Your Door ✦ Dine In ✦ </div></div></div>
      <main><About /><Menu /><FoodShowcase /><VideoSection /><WhyChooseUs /><CTA /><Location /><Contact /></main>
      <Footer />
      <div className="mb"><a className="btn y" href={BIZ.phone}>Call Now</a><a className="btn" href={BIZ.orderUrl}>Order Now</a></div>
    </>
  )
}
