import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter, Routes, Route, Link
} from 'react-router-dom'
import './index.css'
import aboutImg from './assets/images/about.png'

function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to="/vans" className="link-button">Find your van</Link>
      </div>
      <footer className='footer'>Ⓒ 2022 #VANLIFE</footer>
    </div>
  )
}

function About() {
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
      <footer className='footer'>Ⓒ 2022 #VANLIFE</footer>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <nav>
        <Link to="/" className='van'>#VANLIFE</Link>
        <section className='sec'>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </section>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
