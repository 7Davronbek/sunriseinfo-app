import React from 'react'
import './homwWork.css'
import Card_1 from '../../../image/Rectangle 20.png'
import Card_2 from '../../../image/Rectangle 21.png'
import Card_3 from '../../../image/Rectangle 22.png'
import Card_4 from '../../../image/Rectangle 23.png'
import Card_5 from '../../../image/Rectangle 24.png'
import Card_6 from '../../../image/Rectangle 25.png'
import Image_1 from '../../../image/Rectangle 20 (1).png'
import Image_2 from '../../../image/Rectangle 21.png'
import Image_3 from '../../../image/Rectangle 25.png'
import Image_4 from '../../../image/Rectangle 23.png'
import Image_5 from '../../../image/Rectangle 24.png'
import Image_6 from '../../../image/Rectangle 22.png'

export default function HomeWork() {
  return (
    <>
      <div className="home_work">
        <h1 className='home_text_work' data-aos="fade-up">Наши работы</h1>
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
      </div>

    </>
  )
}
