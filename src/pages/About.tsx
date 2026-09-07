import {
   Link
} from 'react-router-dom'
import aboutImg from '../assets/images/about.png'

export default function About() {
  return (
    <div className="about-page">
      <img src={aboutImg} alt="about" />
      <div className="about-hero">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br></br> (Hitch costs extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        <div className='about-hero-buttons'>
          <p>Your destination is waiting.<br></br>
            Your van is ready.</p>
          <Link to="/vans" className="link-button-about">Explore our vans</Link>
        </div>
      </div>
    </div>
  )
}