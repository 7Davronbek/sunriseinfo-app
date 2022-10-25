import React, { useRef, useState } from 'react'
import './navbar.css'
import Logo from '../../image/Group.svg'
import { Link, useLocation } from 'react-router-dom'
import Logo_1 from '../../image/Group 1321.svg'




export default function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbar);
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div className={`navbar ${location.pathname === '/contact' || location.pathname === '/ourwork' || location.pathname === '/katalog' || location.pathname === '/inkatalog' || location.pathname === '/aboutUs' ? ' active rem2 ' : ''} ${navbar ? `active` : ``}`}>
        <div className="number_nav">
          <a data-aos="fade-top" href="tel: +998(91) 191-16-66">+998 91 191 16 66</a>
          <a data-aos="fade-top" href="tel: +998(71) 234-66-77">+998 71 234 66 77</a>
        </div>
        <div className={`navbar_2 ${isOpen && "open"}`}>
          <Link data-aos="fade-up" to='/'><img className='img-lols' src={location.pathname === '/' ? Logo : Logo_1} alt="" /></Link>
          <ul className='nav__list' data-aos="fade-up">
            <li><a href="" class="underline">
              <span className={`${location.pathname === '/' ? 'active2' : ''}`} >Главная</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a></li>
            <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none" }} to='/aboutUs'>
              <li>
                <a href="" class="underline">
                  <span>О нас</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
                </a>
              </li>
            </Link>
            <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none", color: "#ffffff" }} to='/katalog'>     <li className='nav__listitem'>
              <div className="resporns_org">
                <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none", color: "#ffffff", width: "100%" }} to='/katalog'><li>Орготехника</li></Link>
                <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none", color: "#ffffff", width: "100%" }} to='/solnechnaya'><li id='solnechniy-elektro'>Солнечные электростанции</li></Link>
              </div>
              <a href="" class="underline" id='undr_none'>
                <span className='resp_none_katalog'>Каталог</span><svg id='svg_for_none' viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
              </a>
              <ul className='nav__listitemdrop '>
                <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none", color: "#ffffff", width: "100%" }} to='/katalog'><li>Орготехника</li></Link>
                <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none", color: "#ffffff", width: "100%" }} to='/solnechnaya'><li>Солнечные электростанции</li></Link>
              </ul>

            </li></Link>
            <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none" }} to='/ourwork'><li>
              <a href="" class="underline">
                <span>Наши работы</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
              </a>
            </li></Link>
            <Link onClick={() => setIsOpen(!isOpen)} style={{ textDecoration: "none" }} to='/contact'><li><a href="" class="underline">
              <span>Контакты</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
            </a></li></Link>

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
