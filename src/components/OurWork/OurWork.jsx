import React, { useEffect, useState } from 'react'
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
import {getText} from '../locales/index'
import axios from 'axios'
import { API_PATH } from '../../tools/constants'

export default function OurWork() {

    const [org, setOrg] = useState([])
    const [loader, setLoader] = useState(true)
  
    const getOrg = async () => {
      await axios.get(API_PATH + '/main/our-works/')
        .then((res) => {
          console.log(res);
          setOrg(res.data)
          setLoader(false)
        })
        .catch((err) => {
          console.log(err);
          setLoader(false)
        })
    }
  
    useEffect(() => {
      getOrg()
    }, [])
    return (
        <>
            <div className="our_work_page">
                <h2>{getText("ourwork1")}</h2>
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
                    {org && org.map((item,index) =>(
                    <div key={index}  className="top_flex_image_2 top_4">
                        <img className='api_margin' data-aos="fade-up" src={item.image} alt="" />                        
                        <img className='api_margin' data-aos="fade-up" src={item.image} alt="" />                        
                    </div>
                    ))}
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mx-auto">                                                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
