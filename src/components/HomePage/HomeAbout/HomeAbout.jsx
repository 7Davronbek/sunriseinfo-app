import React from 'react'
import { Link } from 'react-router-dom'
import './homeAbout.css'

export default function HomeAbout() {
  return (
    <>
    <div className="home_about">
        <div data-aos="fade-right" data-duration-aos="3000" className="text_home">
            <h3>Sun Rise</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <ul className='takrorlanmas'>
                <Link style={{textDecoration: "none", color: "#ffffff"}} to="/contact"><li>Contact us</li></Link>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sed eget facilisi at iaculi. </li>
            </ul>
        </div>
    </div>
    </>
  )
}
