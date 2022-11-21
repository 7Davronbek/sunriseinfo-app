import React, { useEffect, useState } from 'react'
import './ABoutSolnechniy.css'
import imaged from '../../../image/Rectangle 78.png'
import OurWork from '../../OurWork/OurWork'
import axios from 'axios'
import { API_PATH } from '../../../tools/constants'
import { getText } from '../../locales/index'

export default function SolnechniyAbout() {
    const [about2, setAbout2] = useState([])
  const [loader, setLoader] = useState(true)

  const getAbout2 = async () => {
    await axios.get(API_PATH + '/products/about-2')
      .then((res) => {
        console.log(res);
        setAbout2(res.data)
        setLoader(false)
      })
      .catch((err) => {
        console.log(err);
        setLoader(false)
      })
  }

  useEffect(() => {
    getAbout2()
  }, [])
  return (
    <>
    <div className="about_soln">
        
            
                 <h3>{getText("navbar2")}</h3>
                   {about2 && about2.map((item, index)=>(
                        <div className="about_soln_tex">
                        <div className="left_abowjkfn">
                        <img src={item.image} alt="" />
                        </div>
                        <div className="right_abowjkfn">
                        <p>
                           {item.text}
                            </p>
                            <ul className='ulling'>
                                <li>{getText("soln6")}</li>
                                <li>{getText("soln7")}</li>
                                <li>{getText("soln8")}</li>
                            </ul>
                           <ul className='sec_ulling'>
                               <li>
                                   <span>{item.finished + "+"} </span>
                                   <span>{getText("soln9")}</span>
                               </li>
                               <li>
                                   <span>{item.clients + "+"}</span>
                                   <span>{getText("soln10")}</span>
                               </li>
                               <li>
                                   <span>{item.experience + "+"}</span>
                                   <span>{getText("soln11")}</span>
                               </li>
                               <li>
                                   <span>{item.partner + "+"}</span>
                                   <span>{getText("soln12")}</span>
                               </li>
                           </ul>
                        </div>
                    </div>
        
                   ))}
    </div>

    <OurWork />
    
    </>
  )
}
