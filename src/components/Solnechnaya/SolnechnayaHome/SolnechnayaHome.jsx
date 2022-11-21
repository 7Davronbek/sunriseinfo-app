import React, { useEffect, useState } from 'react'
import './solnechnayaHome.css';
import UslImg1 from '../../../image/Rectangle 80.png'
import UslIm2 from '../../../image/Rectangle 81.png'
import UslImg3 from '../../../image/Rectangle 82.png'
import Green1 from '../../../image/Group (2).svg'
import Green2 from '../../../image/Group (3).svg'
import Green3 from '../../../image/Group (4).svg'
import Green4 from '../../../image/Group (5).svg'
import { API_PATH } from '../../../tools/constants';
import axios from 'axios';
import {getText} from '../../locales/index'

export default function SolnechnayaHome() {
  const [banner2, setBanner2] = useState([])
  const [loader, setLoader] = useState(true)
  const [services, setServices] = useState([])

  const getBanner2 = async () => {

    await axios.get(API_PATH + '/products/banner-2')
      .then((res) => {
        setBanner2(res.data)
        setLoader(false)
      })
      .catch((err) => {
        console.log(err);
        setLoader(false)
      })
  }



  const getServices = async () => {
    await axios.get(API_PATH + '/products/services/')
      .then((res) => {   
        setServices(res.data)
        setLoader(false)
      })
      .catch((err) => {
        console.log(err);
        setLoader(false)
      })
  }
 

  useEffect(() => {
    getBanner2()
    getServices()
  }, [])

  return (
    <>
      {banner2 && banner2.slice(0,1).map((item,index) =>(
        <div key={index} className="solnechniy_home">
        <h2 data-aos="fade-right">{item.title}</h2>
        <p data-aos="fade-right">{item.content}</p>
        <a href="tel: +998(97) 264-77-78 ">{getText("about1")}</a>
      </div>
      ))}

      <div className="doveriya">
       
          <div className="doveriyaRow">
          <div className="doveriyaCol">
            <div className="doveriya_1" data-aos="fade-right">
              <h4>Доверие и гарантия</h4>
              <p>Мы работаем, чтобы завоевать доверие наших клиентов и сохранить долгосрочные отношения. Мы гарантируем долговечность нашей продукции.</p>
            </div>
          </div>
          <div className="doveriyaCol">
            <div className="doveriya_1 img_dov" data-aos="fade-right">
              <h4>Высококачественная работа</h4>
              <p>Мы стремимся предоставлять наши услуги с высочайшим качеством и гарантировать, что наши клиенты будут довольны.</p>
            </div>
          </div>

          <div className="doveriyaCol">
            <div className="doveriya_1 img_dov2" data-aos="fade-left">
              <h4>Эффективность и мощность</h4>
              <p>Эффективность модуля до 21,2 % благодаря технологии межсоединений высокой плотности.</p>
            </div>
          </div>

          <div className="doveriyaCol">
            <div className="doveriya_1 img_dov3" data-aos="fade-left">
              <h4>Просто и легко</h4>
              <p>Удобный доступ и мониторинг данных в режиме реального времени с помощью нашего мобильного приложения.</p>
            </div>
          </div>
        </div>
      </div>


    


      <div className="soln_uslug">
        <h2>{getText("soln1")}</h2>
       
          <div  className="flex_soln_usl">
          {services && services.slice(0,3).map((item,index) =>(
          <div key={index} className="soln_1_uslu" data-aos="fade-up">
            <div className="soln_imf_1">
              <img src={item.image} alt="" />
            </div>
            <div className="sol_text">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <a href="tel: +998(97) 264-77-78 ">{getText("about1")}</a>
            </div>
          </div>
        ))}
        </div>
       


        <hr />

        <div className="green_icon">
          <div className="green_1">
            <img src={Green4} alt="" />
            <p>{getText("soln2")}</p>
          </div>
          <div className="green_1">
            <img src={Green3} alt="" />
            <p>{getText("soln3")}</p>
          </div>
          <div className="green_1">
            <img src={Green1} alt="" />
            <p>{getText("soln4")}</p>
          </div>
          <div className="green_1">
            <img src={Green2} alt="" />
            <p>{getText("soln5")}</p>
          </div>
        </div>
      </div>
    </>
  )
}
