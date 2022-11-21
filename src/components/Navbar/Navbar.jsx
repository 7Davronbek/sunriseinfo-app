import React, { useRef, useState } from 'react'
import './navbar.css'
import Logo from '../../image/Group.svg'
import { Link, useLocation } from 'react-router-dom'
import Logo_1 from '../../image/Group 1321.svg'
import { LANGUAGE } from '../../tools/constants'
import {getText, getLanguage} from '../locales/index'




export default function Navbar() {


  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbar);
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false);

  const [header, setHeader] = useState([])
    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        document.location.reload(true)
    }


  return (
    <>
    
      <div className={`navbar ${location.pathname === '/contact' || location.pathname === '/ourwork' || location.pathname === '/katalog' || location.pathname === '/inkatalog' || location.pathname === '/aboutUs' ? ' active rem2 ' : ''} ${navbar ? `active` : ``}`}>
      <div className="number_nav">
          <a data-aos="fade-top" href="tel: +998(97) 264-77-78">+998 97 264 77 78</a>
          <a data-aos="fade-top" href="tel: +998(90) 995-13-82">+998 90 995-13-82</a>
        </div>
        <div className={`navbar_2 ${isOpen && "open"}`}>
          <Link data-aos="fade-up" to='/'><img className='img-lols' src={location.pathname === '/' ? Logo : Logo_1} alt="" /></Link>
          <ul className='nav__list' data-aos="fade-up">
            <li><a href="" className="underline">
              <span className={`${location.pathname === '/' ? 'active2' : ''}`} >{getText("navbar1")}</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a></li>
            <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none" }} to='/aboutUs'>
              <li>
                <a href="" className="underline">
                  <span>{getText("navbar2")}</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
                </a>
              </li>
            </Link>
            <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none", color: "#ffffff" }} to='/katalog'>     <li className='nav__listitem'>
              <div className="resporns_org">
                <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none", color: "#ffffff", width: "100%" }} to='/katalog'><li>{getText("navbar3")}</li></Link>
                <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none", color: "#ffffff", width: "100%" }} to='/solnechnaya'><li id='solnechniy-elektro'>{getText("navbar4")}</li></Link>
              </div>
              <a href="" className="underline" id='undr_none'>
                <span className='resp_none_katalog'>{getText("navbar7")}</span><svg id='svg_for_none' viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
              </a>
              <ul className='nav__listitemdrop '>
                <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none", color: "#ffffff", width: "100%" }} to='/katalog'><li>{getText("navbar3")}</li></Link>
                <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none", color: "#ffffff", width: "100%" }} to='/solnechnaya'><li>{getText("navbar4")}</li></Link>
              </ul>

            </li></Link>
            <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none" }} to='/ourwork'><li>
              <a href="" className="underline bizning_ish">
                <span>{getText("navbar5")}</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
              </a>
            </li></Link>
            <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none" }} to='/contact'><li><a href="" className="underline">
              <span>{getText("navbar6")}</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a></li></Link>
            <select onChange={changeLanguage}>
                                        <option value="ru" selected={getLanguage() === "ru"} >РУ</option>
                                        <option value="uz" selected={getLanguage() === "uz"} >UZ</option>
                                    </select>

          </ul>
        </div>
        <Link data-aos="fade-up" to='/'><img className='abso_resp' src={location.pathname === '/' ? Logo : Logo_1} alt="" /></Link>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>

    </>
  )
}
