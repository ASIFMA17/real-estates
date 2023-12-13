import React, { useState , useEffect } from 'react';
import Accordion from './Accordion';
import './about.css';
// IMPORT IMAGE
import aboutImg from '../../images/About.jpg';
// IMPORT AOS ANIMATION
import Aos from 'aos';
import "aos/dist/aos.css"; 

function About() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [active, setActive] = useState("Proven Track Record");

  return (
    <div className='About section container'>
      <div className="secContainer flex">
        <div data-aos='fade-up' className="imgDiv">
          <img className='aboutImg' src={aboutImg} alt="AboutImage" />
        </div>

        <div className="textDiv">
          <div data-aos='fade-down' className="secHeader">

            <div className="secTitle">
              <span className="orangeText">
                Our Values
              </span>
              <h1>Value We Give You
                <span className="orangeDot"> .</span>
              </h1>
              <p>
                We always ready to help by holding the best services for
                you. We belive a good place to live can make your life better!
              </p>
            </div>

          </div>

          <div data-aos='fade-up' className="accordion grid">
            <Accordion
              title="Proven Track Record"
              desc="Our agency has a demonstrated track record of successfully
              helping clients buy and sell properties. We have a history of
              achieving excellent results, whether it's securing the best
              deals for buyers or maximizing the sale price for sellers."
              active={active}
              setActive={setActive}
            />
            {/* Let's add more cards */}

            <Accordion title="Local Market Knowledge"
              desc="We possess in-depth knowledge of the local real estate market.
              Our agents are well-versed in current market trends, pricing, and
              neighborhood specifics. This expertise allows us to provide valuable
              insights to clients"
              active={active}
              setActive={setActive} />

            <Accordion title="Personalized Service"
              desc="We understand that every client has unique needs and goals.
              That's why we offer personalized service tailored to each
              individual. "
              active={active}
              setActive={setActive} />

            <Accordion title="Ethical Practices"
              desc=" Integrity is at the core of our agency. We uphold the highest
              ethical standards and maintain transparency throughout the real
              estate process. "
              active={active}
              setActive={setActive} />

          </div>

        </div>
      </div>
    </div>
  )
}

export default About
