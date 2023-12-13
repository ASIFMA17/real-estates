import React , { useEffect } from 'react';
import './contact.css';
// IMPORT ICONS
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidVideo } from "react-icons/bi";
import { BiSolidMessageAltDetail } from "react-icons/bi";
// IMPORT IMAGE
import contactImg from '../../images/Contact.jpg';
// IMPORT AOS ANIMATION
import Aos from 'aos';
import "aos/dist/aos.css"; 

function Contact() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='Contact container section'>
      <div className="secContainer flex">
        <div data-aos='fade-down' className="imgDiv">
          <img className='contactImg' src={contactImg} alt="contactImg" />
        </div>

        <div data-aos='fade-down' className="textDiv">
          <div className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText">
                Contact Us
              </span>
              <h1>Easy way to contact us <span className='orangeDot'> .</span></h1>
              <p>Is there a problem finding your dream home?
                Need a giude in
                buying your first home? Just contact us!</p>
            </div>
          </div>
          <div className="secContent grid">
            <div data-aos='fade-up' className="phone active">
              <div className="info flex">
                <BiSolidPhoneCall className='icon' />
                <span>
                  <h4>Phone call </h4>
                  <p>24/7 support</p>
                </span>
              </div>
              <button>Call Now</button>
            </div>

            <div data-aos='fade-up' className="chat ">
              <div className="info flex">
                <AiFillMessage className='icon' />
                <span>
                  <h4>Chat</h4>
                  <p>24/7 support</p>
                </span>
              </div>
              <button>Chat Now</button>
            </div>

            <div data-aos='fade-up' className="videoCall">
              <div className="info flex">
                <BiSolidVideo className='icon' />
                <span>
                  <h4>Video Call </h4>
                  <p>24/7 support</p>
                </span>
              </div>
              <button>Video Call Now</button>
            </div>

            <div data-aos='fade-up' className="message ">
              <div className="info flex">
                <BiSolidMessageAltDetail className='icon' />
                <span>
                  <h4>Message </h4>
                  <p>24/7 support</p>
                </span>
              </div>
              <button>Message Now</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
