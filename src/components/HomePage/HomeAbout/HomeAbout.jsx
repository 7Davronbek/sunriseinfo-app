import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_PATH } from '../../../tools/constants'
import './homeAbout.css'
import {getText} from '../../locales/index'

export default function HomeAbout() {
  const [banner, setBanner] = useState([])
  const [loader, setLoader] = useState(true)

  const getBanner = async () => {
    await axios.get(API_PATH + '/main/banner/')
      .then((res) => {
        console.log(res);
        setBanner(res.data)
        setLoader(false)
      })
      .catch((err) => {
        console.log(err);
        setLoader(false)
      })
  }

  useEffect(() => {
    getBanner()
  }, [])
  return (
    <>
      <div className="home_about">
        <div className="about_container">
          {banner && banner.slice(0,1).map((item, index) => (
            <div key={index} data-aos="fade-right" data-duration-aos="3000" className="text_home">
              <h3>Sun Rise</h3>
              <p>{item.title}</p>
              <ul className='takrorlanmas'>
                <Link style={{ textDecoration: "none", color: "#ffffff" }} to="/contact"><li>{getText("about1")}</li></Link>
                <li>{item.title}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
