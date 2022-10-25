import React from 'react'
import './ourWork.css'
import Image_1 from '../../image/Rectangle 20 (1).png'
import Image_2 from '../../image/Rectangle 21.png'
import Image_3 from '../../image/Rectangle 25.png'
import Image_4 from '../../image/Rectangle 23.png'
import Image_5 from '../../image/Rectangle 24.png'
import Image_6 from '../../image/Rectangle 22.png'
import Image_7 from '../../image/Rectangle 21.png'
import Image_8 from '../../image/Rectangle 252.png'
import Image_9 from '../../image/Rectangle 20.png'
import Image_10 from '../../image/Rectangle 21.png'
import Image_11 from '../../image/Rectangle 25.png'
import Image_12 from '../../image/Rectangle 23.png'
import Image_13 from '../../image/Rectangle 24.png'
import Image_14 from '../../image/Rectangle 22.png'
import Image_15 from '../../image/Rectangle 25.png'
import Image_16 from '../../image/Rectangle 21.png'

export default function OurWork() {
    return (
        <>
            <div className="our_work_page">
                <h2>Наши работы</h2>
                <div className="image_our_work">

                    <div className="top_flex_image">
                        <div className="top_1_image">
                            <img data-aos="fade-right" src={Image_2} alt="" />
                            <img src={Image_1} alt="" />
                        </div>
                        <div className="top_1_image">
                            <img data-aos="fade-up" src={Image_3} alt="" />
                            <img data-aos="fade-up" src={Image_4} alt="" />
                        </div>
                        <div className="top_1_image">
                            <img data-aos="fade-left" src={Image_6} alt="" />
                            <img src={Image_5} alt="" />
                        </div>
                    </div>

                    <div className="top_flex_image_2">
                        <img data-aos="fade-right" src={Image_7} alt="" />
                        <img data-aos="fade-left" src={Image_8} alt="" />
                    </div>

                    <div className="top_flex_image top_3">
                        <div className="top_1_image">
                            <img data-aos="fade-right" src={Image_2} alt="" />
                            <img data-aos="fade-right" src={Image_1} alt="" />
                        </div>
                        <div className="top_1_image">
                            <img data-aos="fade-up" src={Image_3} alt="" />
                            <img data-aos="fade-up" src={Image_4} alt="" />
                        </div>
                        <div className="top_1_image">
                            <img data-aos="fade-up" src={Image_6} alt="" />
                            <img data-aos="fade-up" src={Image_5} alt="" />
                        </div>
                    </div>

                    <div className="top_flex_image_2 top_4">
                        <img data-aos="fade-up" src={Image_8} alt="" />
                        <img data-aos="fade-up" src={Image_7} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
