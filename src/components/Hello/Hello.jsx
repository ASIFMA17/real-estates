import React, { useEffect } from 'react'
import './hello.css'
// IMPORTED ICONS
import { HiLocationMarker } from "react-icons/hi";
// IMPORTED IMAGE
import Image from '../../images/hero-img.jpg';
// IMPORT AOS ANIMATION
import Aos from 'aos';
import "aos/dist/aos.css";

function Hello() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div>
      <h1 className='Hello'>
        <div className="secContainer container flex">

          <div className="textDiv">

            <h1 data-aos='fade-up' className='hello-head'>Discover Most Suitable Property</h1>
            <span data-aos='fade-up' className='design'></span>
            <p data-aos='fade-up' className='hello-text'>Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you.</p>

            <div data-aos='fade-up' className="searchBar flex">
              <div className="inputBox flex">
                <HiLocationMarker className='icon' />
                <input className='input' type="text" placeholder='Search by location' />
              </div>
              <button className='btn'>Search</button>
            </div>

            <div data-aos='fade-up' className="numbers flex">
              <div className="singleNumber">
                <span className='number-span'>
                  9K <blockquote className='blockquote'>+</blockquote>
                </span>
                <small className='number-small'>Premium Product</small>
              </div>

              <div className="singleNumber">
                <span className='number-span'>
                  2K <blockquote className='blockquote'>+</blockquote>
                </span>
                <small className='number-small'>Happy Customers</small>
              </div>

              <div className="singleNumber">
                <span className='number-span'>
                  48K <blockquote className='blockquote'>+</blockquote>
                </span>
                <small className='number-small'>Awards Winnings</small>
              </div>
            </div>

          </div>

          <div data-aos='fade-up' className="imgDiv">
            <img className='img' src={Image} alt="HelloImage" />
          </div>

        </div>
      </h1>
    </div>
  )
}

export default Hello
