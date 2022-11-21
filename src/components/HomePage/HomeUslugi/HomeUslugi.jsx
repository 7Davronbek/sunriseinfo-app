import React from 'react'
import { Link } from 'react-router-dom'
import './homeUslugi.css'
import {getText} from '../../locales/index'

export default function HomeUslugi() {
  return (
    <>
      <div className="home_uslugi">
        <h1 data-aos="fade-up" className='text_uslugi'>{getText("about6")}</h1>
        <div className="home_flex_uslugi">
          <div data-aos="fade-right" className="home_uslugi_left">
            <h1>{getText("about7")}</h1>
            <p>{getText("about8")}</p>
            <Link to='/orgotexnika'><button className='button'>{getText("about9")}</button></Link>
          </div>
          <div data-aos="fade-left" className="home_uslugi_right">
            <h1>{getText("about10")}</h1>
            <p>{getText("about11")}</p>
            <Link to='/solnechnaya'> <button className='button'>{getText("about9")}</button></Link>
          </div>
        </div>
      </div>

    </>
  )
}
