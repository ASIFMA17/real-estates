import React , { useEffect } from 'react';
import './footer.css';
// IMPORT ICONS
import { SiTreehouse } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
// IMPORT AOS ANIMATION
import Aos from 'aos';
import "aos/dist/aos.css"; 

function Footer() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='Footer'>
      <div className="secContainer container grid">

        <div data-aos='fade-up' className="logoDiv">
          <div className="footerLogo">
            <SiTreehouse className='icon' />
            <span >Homuz</span>
          </div>
          <p>
            Our vision is to make the place place to live for
            people!
          </p>
          <div className="socials flex">
            <ImFacebook className='icon' />
            <BsTwitterX className='icon' />
            <AiFillInstagram className='icon' />
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='3000' className="footerLinks">
          <span className="linkTitle">information</span>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
          <a href="/">Explore</a>
          </li>
          <li>
          <a href="/">Travel</a>
          </li>
          <li>
          <a href="/">Blog</a>
          </li>

        </div>

        <div data-aos='fade-up' data-aos-duration='4000' className="footerLinks">
          <span className="linkTitle">Helpfull links</span>
          <li>
            <a href="/">Destination</a>
          </li>
          <li>
          <a href="/">Support</a>
          </li>
          <li>
          <a href="/">Travel & Condition</a>
          </li>
          <li>
          <a href="/">Privacy</a>
          </li>

        </div>

        <div data-aos='fade-up' data-aos-duration='5000' className="footerLinks">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">+0000000000</span>
          <span className="email">homuz007@gmail.com</span>
          <span className="site">www.homuz.com</span>

        </div>

      </div>

    </div>
  )
}

export default Footer
