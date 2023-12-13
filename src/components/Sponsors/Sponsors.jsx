import React , { useEffect } from 'react'
import './sponsors.css'
// IMPORT IMAGE
import Logo1 from '../../images/Logo-1.png'
import Logo2 from '../../images/Logo2.png'
import Logo3 from '../../images/Logo-3.webp'
import Logo4 from '../../images/Logo4.png';
// IMPORT AOS ANIMATION
import Aos from 'aos';
import "aos/dist/aos.css";

function Sponsors() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='Sponsors'>
      <div data-aos='fade-up' className="secContainer flex">
        <span className='span'>
          <img className='img' src={Logo1} alt="LogoImage" />
        </span>
        <span className='span'>
          <img className='img' src={Logo2} alt="LogoImage" />
        </span>
        <span className='span'>
          <img className='img ' src={Logo3} alt="LogoImage" />
        </span>
        <span className='span'>
          <img className='img hide' src={Logo4} alt="LogoImage" />
        </span>
      </div>
    </div>
  )
}

export default Sponsors
