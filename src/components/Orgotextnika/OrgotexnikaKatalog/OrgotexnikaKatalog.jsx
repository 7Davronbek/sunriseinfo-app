import React from 'react'
import './orgotexnikaKatalog.css'
import img1 from '../../../image/image 10.png'
import img2 from '../../../image/image 9.png'
import img3 from '../../../image/image 11.png'
import img4 from '../../../image/image 12.png'
import img5 from '../../../image/image 8.png'
import img6 from '../../../image/image 7.png'
import img7 from '../../../image/image 6.png'
// import img8 from '../../../image/Без имени-1 1.png'
// import img9 from '../../../image/image 10.png'
// import Responsive from './Carousel/Carousel'
import Swiper2 from './Swiper/Swiper'

export default function OrgotexnikaKatalog() {
    return (
        <>
            <div className="orgotexnika_katalog">
                <h1 className='tovar_h1'>Товары</h1>
                <div className="card_katalog">
                    <div data-aos="fade-up" className="card_image">
                        <h3>Компьютеры</h3>
                        <img src={img7} alt="" />
                    </div>
                    {/* <div data-aos="fade-up" className="card_image">
                        <h3>Ноутбуки</h3>
                        <img src={img8} alt="" />
                    </div> */}
                    <div data-aos="fade-up" className="card_image">
                        <h3>Проекторы</h3>
                        <img src={img6} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3>Сканеры</h3>
                        <img src={img5} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3>Серверы</h3>
                        <img src={img2} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3>Принтеры</h3>
                        <img src={img1} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3>Комплектующие</h3>
                        <img src={img3} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3>Расходные материалы и запасные части</h3>
                        <img src={img4} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3><a className='pereyti' href="#">Перейти в каталог</a></h3>
                    </div>
                </div>
                <h1 data-aos="fade-up" className='popular_text'>Популярные Товары</h1>

                <div className="carousel_boot">
                    <Swiper2 />
                </div>
            </div>
        </>
    )
}
