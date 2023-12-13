import React , { useEffect } from 'react';
import './subscribe.css';
// IMPORT AOS ANIMATION
import Aos from 'aos';
import "aos/dist/aos.css"; 

function Subscribe() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='Subscribe section container'>
      <div className="secContent">
        <h1 data-aos='fade-up'>Get Started With Homuz</h1>
        <p data-aos='fade-up'>
          Subscribe and find super attractive price quotes from us. Find your
          residence soon!
        </p>
        <button data-aos='fade-up' className='btn'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Subscribe
