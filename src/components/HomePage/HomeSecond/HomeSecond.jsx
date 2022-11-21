import React, { useEffect, useState } from 'react'
import './homeSecond.css';
import HomeSecondImg from '../../../image/Rectangle 17.png'
import { Link } from 'react-router-dom';
import {FiCheckSquare} from 'react-icons/fi'
import axios from 'axios';
import { API_PATH } from '../../../tools/constants';
import {getText} from '../../locales/index'

export default function HomeSecond() {
    const [about, setAbout] = useState([])
    const [loader, setLoader] = useState(true)
  
    const getBanner = async () => {
      await axios.get(API_PATH + '/main/main-about/')
        .then((res) => {
          console.log(res);
          setAbout(res.data)
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
            <div className="home_second">
               {about && about.slice(0,1).map((item,index) =>(
                    <div className="home_flex_second">
                    <div data-aos="fade-up" className="home_second_left">
                        <h1 className='abput_h1'>{getText("navbar2")}</h1>
                        <p>
                           {item.text}
                            <br />
                            <br />
                            <ul className='ul_abput'>
                                <li><FiCheckSquare className='react_icpn' />{getText("about2")}</li>
                                <li><FiCheckSquare className='react_icpn' />{getText("about3")}</li>
                                <li><FiCheckSquare className='react_icpn' />{getText("about4")}</li>
                            </ul>
                            </p>
                        <Link style={{ textDecoration: "none", color: "#ff7e00" }} to="/aboutUs"><p className='see_mokre_text'>{getText("about5")}</p></Link>
                    </div>
                    <div data-aos="fade-up" className="home_second_right">
                        <img src={item.image} alt="" />
                    </div>
                </div>
               ))}
            </div>

        </>
    )
}
