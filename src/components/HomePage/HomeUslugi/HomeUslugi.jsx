import React from 'react'
import { Link } from 'react-router-dom'
import './homeUslugi.css'

export default function HomeUslugi() {
  return (
    <>
      <div className="home_uslugi">
        <h1 data-aos="fade-up" className='text_uslugi'>Услуги</h1>
        <div className="home_flex_uslugi">
          <div data-aos="fade-right" className="home_uslugi_left">
            <h1>Орготехника</h1>
            <p> Scelerisque pellentesque felis, lorem aliquet nam.</p>
            <Link to='/orgotexnika'><button className='button'>Перейти</button></Link>
          </div>
          <div data-aos="fade-left" className="home_uslugi_right">
            <h1>Солнечные электростанции</h1>
            <p>Hendrerit sagittis turpis at nec posuere blandit montes. Scelerisque pellentesque felis, lorem.</p>
            <Link to='/solnechnaya'> <button className='button'>Перейти</button></Link>
          </div>
        </div>
      </div>

    </>
  )
}
