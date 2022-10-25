import React from 'react'
import './inKatalog.css';
import Inkatalog from '../../../image/image 4.png'
import TabsKatalog from './KatalogTabs/TabsKatalog';
import Swiper2 from '../../Orgotextnika/OrgotexnikaKatalog/Swiper/Swiper';


export default function InKatalog() {
    return (
        <>
            <div className="in_kat">
                <div className="top_in_kat">
                    <button className='send_katalog botm_kupi'>Купить</button>
                    <div className="left_top1">
                        <div className="left_img_top1">
                            <div className="inkatalog_image"><img src={Inkatalog} alt="" /></div>
                            <div className="inkatalog_image"><img src={Inkatalog} alt="" /></div>
                            <div className="inkatalog_image"><img src={Inkatalog} alt="" /></div>
                            <div className="inkatalog_image"><img src={Inkatalog} alt="" /></div>
                        </div>
                        <div className="inkatalog_big_img"><img src={Inkatalog} alt="" /></div>
                    </div>
                    <div className="right_top1">
                        <h2>Ullamcorper at venenatis volutpat.</h2>
                        <p>1 отзыв <a href="#">| Добавить отзыв</a></p>
                        <a className='sena_katalog' href="#">1 500 000 сум</a>
                        <h4>Описание </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum tellus magnis in rutrum diam suspendisse aliquam. Erat ullamcorper in nulla accumsan magna volutpat egestas. Montes, egestas cursus ornare vestibulum, augue sed mi, dui consectetur. Dui sem aliquet eu aliquam.</p>
                        <button className='send_katalog'>Купить</button>
                    </div>
                </div>
                <TabsKatalog />
                <Swiper2 />
            </div>

        </>
    )
}
