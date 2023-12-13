import React , { useEffect } from 'react';
import './listing.css';
// IMPORT ICONS
import { FaBed } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
// IMPORT IMAGE
import Image1 from '../../images/Listing-1.jpg';
import Image2 from '../../images/Listing-2.jpg';
import Image3 from '../../images/Listing-3.jpg';
import Image4 from '../../images/Listing-4.jpg';
import Image5 from '../../images/Listing-5.jpg';
// IMPORT AOS ANIMATION
import Aos from 'aos';
import "aos/dist/aos.css"; 

function Listing() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const properties = [
    {
      id: 1,
      image: Image1,
      name: "Countryside Estate, Italy",
      price: "3,445",
      desc: "A luxurious Balinese villa surrounded by lush gardens",
      beds: 6,
    },
    {
      id: 2,
      image: Image2,
      name: "Waterfront Mansion",
      price: "4,100",
      desc: "An opulent waterfront mansion in Miami Beach with a private dock.",
      beds: 4,
    },
    {
      id: 3,
      image: Image3,
      name: "Luxury Penthouse, NY",
      price: "5,000",
      desc: "A historic chateau in the Bordeaux wine region. Strategically in NY",
      beds: 5,
    },
    {
      id: 4,
      image: Image4,
      name: "Beachfront Villa, CA",
      price: "5,600",
      desc: "This beachfront villa in Malibu offers direct access to the ocean.",
      beds: 7,
    },
    {
      id: 5,
      image: Image5,
      name: "Elegant Chateau, France",
      price: "3,900",
      desc: "A historic chateau in the Bordeaux wine region, featuring vineyards.",
      beds: 8,
    }
  ]

  return (
    <div className='Listing container section'>
      <div className="secContainer">

        <div className="secHeader">
          <span data-aos='fade-up' className="orangeText">
            Our Listing
          </span>
          <h1 data-aos='fade-up' className="title">Buy And Sell Your Asset
            <span className="orangeDot"> .</span>
          </h1>
          <p data-aos='fade-up'>
            Your housing real estate agency is your key to uncovering hidden savings
          </p>
          <div data-aos='fade-up' className="btns flex">
            <button className="btn active">Exclusive</button>
            <button className="btn">Standard</button>
          </div>
        </div>

        <div className="secContent grid">
          {/* Use Map Array Method */}
          {properties && properties.map(({ id,image,name,price,desc,beds }) =>(

            <div key={id} className="singleListing">

            <div data-aos='fade-down' className="imgDiv">
              <img className='listImg' src={image} alt="HouseImage" />
            </div>
            <div data-aos='fade-up' className="info">
              <h2 className="name">{name}</h2>
              <span className="price">
                <span className="digits">{price}</span>
                <span className="orangeText">USD</span>
                <span className="duration">Day</span>
              </span>
              <p>
                {desc}
              </p>
              <div className="ammenities flex">

                <span className="flex">
                  <FaBed className='icon' />
                  <blockquote>x{beds}</blockquote>
                </span>

                <span className="flex">
                  <MdPool className='icon' />
                </span>

                <span className="flex">
                  <AiOutlineWifi className='icon' />
                </span>

                <span className="flex">
                  <MdFastfood className='icon' />
                </span>

              </div>
            </div>
          </div>
          
          ))}

        </div>

      </div>
    </div>
  )
}

export default Listing
