import React from 'react'
import './solnechniyKatalog.css'
import card_1 from '../../../image/image 13.png'
import card_2 from '../../../image/image 14.png'
import card_3 from '../../../image/image 15.png'
import card_4 from '../../../image/image 17.png'
import card_5 from '../../../image/image 19.png'
import card_6 from '../../../image/image 20.png'
import card_7 from '../../../image/image 23.png'
import card_8 from '../../../image/image 25.png'
import ResponsiveSol from './Carousel/CarouselSlo'
import { Link } from 'react-router-dom'

export default function SolnechniyKatalog() {
  return (
    <>
    <div className="solnechniy_katLOG">
        <h2 data-aos="fade-up">Товары</h2>
        <div className="card_katalog" id='card-katalog'>
                <div data-aos="fade-up" className="card_image">
                    <h3>Солнечные панели</h3>
                    <img src={card_1} alt="" />
                </div>
                <div data-aos="fade-up" className="card_image">
                    <h3>Солнечные системы</h3>
                    <img src={card_2} alt="" />
                </div>
                <div data-aos="fade-up" className="card_image">
                    <h3>Инверторы</h3>
                    <img src={card_3} alt="" />
                </div>
                <div data-aos="fade-up" className="card_image">
                    <h3>Контроллеры</h3>
                    <img className='img_4_akk' src={card_4} alt="" />
                </div>
                <div data-aos="fade-up" className="card_image">
                    <h3>Аккумуляторы</h3>
                    <img className='img_5_akk' src={card_5} alt="" />
                </div>
                <div data-aos="fade-up" className="card_image">
                    <h3>Источники бесперебойного питания (ИБП)</h3>
                    <img src={card_6} alt="" />
                </div>
                <div data-aos="fade-up" className="card_image">
                    <h3>Преобразователи частоты</h3>
                    <img src={card_7} alt="" />
                </div>
                <div data-aos="fade-up" className="card_image">
                    <h3>Соединители</h3>
                    <img src={card_8} alt="" />
                </div>
                <div data-aos="fade-up" className="card_image">
                    <Link style={{textDecoration: "none", color: "#121212"}} to='/contact'><h3><a className='pereyti' href="#">Связаться с нами</a></h3></Link>
                </div>
        </div>
    </div>
    
    </>
  )
}
