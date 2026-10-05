// ===== EDIT BUSINESS DETAILS HERE =====
export const BIZ = {
  logo: '/images/logo.webp', // replace with the original logo file (keep transparency, e.g. /images/logo.png)
  phone: 'tel:03088892244',
  phoneDisplay: '0308 8892244',
  orderUrl: 'tel:03088892244', // replace with an online ordering link when available
  directionsUrl: 'https://share.google/SUSuc234tK9cgPDbb', // replace if needed
  mapEmbed: '', // paste a Google Maps embed URL to show a live map
  videoSrc: '', // e.g. '/videos/hero.mp4' (put file in public/videos/)
  videoPoster: '/images/hero.webp',
  restaurantWhatsapp: '', // e.g. 'https://wa.me/923088892244' ONLY once confirmed
  devWhatsapp: 'https://wa.me/923218100537',
}
// Closing time is 5:00 AM on the FOLLOWING calendar day.
export const HOURS = [
  ['Monday', '11:00 AM – 5:00 AM'], ['Tuesday', '11:00 AM – 5:00 AM'],
  ['Wednesday', '11:00 AM – 5:00 AM'], ['Thursday', '11:00 AM – 5:00 AM'],
  ['Friday', '2:00 PM – 5:00 AM'], ['Saturday', '11:00 AM – 5:00 AM'],
  ['Sunday', '11:00 AM – 5:00 AM'],
]
// Add price/desc when you have them; empty fields are hidden.
export const MENU = [
  { img: '/images/deal1.webp', name: 'All Day Big Value Deals', desc: 'Lunch & Midnight deal — see poster', price: '', badge: 'Deals' },
  { img: '/images/deal2.webp', name: 'Big Value Deals', desc: 'Pizza, garlic bread & drinks combos', price: '', badge: 'Combo' },
  { img: '/images/side.webp', name: 'Lava Cake & Chicken Wings', desc: 'Which side are you?', price: '', badge: 'Sides' },
  { img: '/images/pay.webp', name: 'Online Orders', desc: 'Pay via credit card', price: '', badge: '' },
]
export const GALLERY = [
  { cls: 'g1', img: '/images/hero.webp', alt: 'Cheese and chicken pizza slices with dipping sauces', pos: '40% 50%' },
  { cls: 'g2', img: '/images/p7.webp', alt: 'Extra-large pizza in a box' },
  { cls: 'g3', img: '/images/p9.webp', alt: 'Pepperoni pizza in a The Big Pizza box' },
  { cls: 'g4', img: '/images/p6.webp', alt: 'Chicken pizza with creamy drizzle' },
  { cls: 'g5', img: '/images/p8.webp', alt: 'Chicken pizza with garlic bread and dip', pos: '50% 30%' },
  { cls: 'g6', img: '/images/lava.webp', alt: 'Chocolate lava cake with sauce', cap: 'Lava Cake' },
]
export const LINKS = ['Home', 'About', 'Menu', 'Gallery', 'Location', 'Contact']
