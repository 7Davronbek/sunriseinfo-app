import React, { useEffect, useState } from 'react';
import './aboutUs.css';
import Range from '../../image/Rectangle 75.png'
import Range_2 from '../../image/Rectangle 76.png'
import Icon_check from '../../image/check.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_PATH } from '../../tools/constants';

export default function AboutUs() {
  const [aboutus, setAboutus] = useState([])
  const [loader, setLoader] = useState(true)

  const getAboutus = async () => {
    await axios.get(API_PATH + '/main/about-us/')
      .then((res) => {
        console.log(res);
        setAboutus(res.data)
        setLoader(false)
      })
      .catch((err) => {
        console.log(err);
        setLoader(false)
      })
  }

  useEffect(() => {
    getAboutus()
  }, [])
  return (
    <>
      {aboutus && aboutus.map((item,index) => (
        <div key={index} className="about_us">
        <div className="top_1_about">
          <h2 data-aos="fade-right">{item.title}</h2>
          <p data-aos="fade-up">{item.content}</p>
          <p data-aos="fade-left">{item.content_4}</p>
        </div>
        <div className="top_2_about">
          <img src={Range} alt="" />
        </div>
        <div className="top_3_about">
          <div className="left_about_3">
            <h2 data-aos="fade-up">{item.subtitle}</h2>
            <p data-aos="fade-up">{item.content_2}</p>

            <Link style={{ textDecoration: "none", color: "#ff7e00" }} to="/contact"><a href="tel: +998(97) 264-77-78 " data-aos="fade-up">Связаться с нами</a></Link>
          </div>
          <img data-aos="fade-up" src={Range_2} alt="" />
        </div>
      </div>
      ))}

    </>
  )
}
