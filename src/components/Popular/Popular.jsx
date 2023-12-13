import React , { useEffect } from 'react';
import './popular.css';
// IMPORT ICONS
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
// IMPORT IMAGE
import House1 from '../../images/House -1.jpg';
import House2 from '../../images/House-2.jpg';
import House3 from '../../images/House-3.jpg';
// IMPORT AOS ANIMATION
import Aos from 'aos';
import "aos/dist/aos.css";

function Popular() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='Popular container section'>
      <div className="secContainer">

        {/* This is a header div */}

        <div className="secHeader flex">

          <div data-aos='fade-down' className="textDiv">
            <span className="orangeText">Best Choice</span>
            <h1 className="title">Popular Residences
              <span className='orangeDot'> .</span>
            </h1>
          </div>

          <div data-aos='fade-down' className="icons flex">
            <BiLeftArrowAlt className='icon' />
            <BiRightArrowAlt className='icon' />
          </div>

        </div>

        {/* header div end */}


        {/* This is a content div */}

        <div className="secContent grid">
          {/* House one */}
          <div className="singleProperty">

            <div data-aos='fade-down' className="imgDiv">
              <img className='houseImg' src={House1} alt="HouseImage" />
            </div>

            <div data-aos='fade-up' className="info">
              <span className="price">
                <span className="orangeText">$ </span>
                <span className="digits">48,885</span>
              </span>
              <h2 className='name'>Alivia Prica Jarfin</h2>
              <p>
                A stunning renthouse with skyline view and private terrace. 
              </p>
            </div>

          </div>
          {/* House two */}
          <div className="singleProperty">

            <div data-aos='fade-down' className="imgDiv">
              <img className='houseImg' src={House2} alt="HouseImage" />
            </div>

            <div data-aos='fade-up' className="info">
              <span className="price">
                <span className="orangeText">$ </span>
                <span className="digits">68,454</span>
              </span>
              <h2 className='name'>Mountain Retreat, Aspen</h2>
              <p>
                A secluded mountain retreat in Aspen with ski-in/ski-out access, a private spa.
              </p>
            </div>

          </div>
          {/* House three */}
          <div className="singleProperty">

            <div data-aos='fade-down' className="imgDiv">
              <img className='houseImg' src={House3} alt="HouseImage" />
            </div>

            <div data-aos='fade-up' className="info">
              <span className="price">
                <span className="orangeText">$ </span>
                <span className="digits">48,500</span>
              </span>
              <h2 className='name'>Contemporary Condo</h2>
              <p>
                A sleek and modern condo in downtown Los Angeles.
              </p>
            </div>

          </div>
        </div>

        {/* content div end */}

      </div>
    </div>
  )
}

export default Popular
