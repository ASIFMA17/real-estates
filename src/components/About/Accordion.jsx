import React , { useEffect } from 'react'
import './about.css';
// IMPORT ICONS
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
// IMPORT AOS ANIMATION
import Aos from 'aos';
import "aos/dist/aos.css"; 


function Accordion({ title, desc, active, setActive }) {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])

    return (
        <div className={(active === title ? "activeAccordion" : "")+" singleAccordion"}>
            <span onClick={() => setActive(title)} className={(active === title ? "activeTitle" : "") + " accordionTitle" + " flex"}>
                <span className="flex">
                    <AiFillCheckCircle className='icon' />
                    <span className="titleText">{title}</span>
                </span>
                <span className="dropDownIcon">
                    {active === title ? (<BiSolidDownArrow className='icon' />):(<BiSolidUpArrow className='icon'/>)}
                </span>
            </span>
            <p className={(active === title ? "show" : "hide") + " description"}>
                {desc}
            </p>
        </div>
    )
}

export default Accordion
