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
import {getText} from '../../locales/index'


export default function OrgotexnikaKatalog() {
    return (
        <>
            <div className="orgotexnika_katalog">
                <h1 className='tovar_h1'>{getText("soln13")}</h1>
                <div className="card_katalog">
                    <div data-aos="fade-up" className="card_image">
                        <h3>{getText("org6")}</h3>
                        <img src={img7} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3>{getText("org7")}</h3>
                        <img src={img6} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3>{getText("org8")}</h3>
                        <img src={img5} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3>{getText("org9")}</h3>
                        <img src={img2} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3>{getText("org10")}</h3>
                        <img src={img1} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3>{getText("org11")}</h3>
                        <img src={img3} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3>{getText("org12")}</h3>
                        <img src={img4} alt="" />
                    </div>
                    <div data-aos="fade-up" className="card_image">
                        <h3><a className='pereyti' href="#">{getText("org4")}</a></h3>
                    </div>
                </div>
                <h1 data-aos="fade-up" className='popular_text'>{getText("org5")}</h1>

                <div className="carousel_boot">
                    <Swiper2 />
                    
                </div>
            </div>
        </>
    )
}
