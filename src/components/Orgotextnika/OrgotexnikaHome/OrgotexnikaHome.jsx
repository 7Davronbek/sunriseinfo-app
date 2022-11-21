import React from 'react'
import './orgotexnikaHome.css';
import {getText} from '../../locales/index'
export default function OrgotexnikaHome() {
  return (
    <>
      <div className="orgotexnika_clas">
        <div className="orgotexnika_home">
          <h1 data-aos="fade-up" data-duration-aos="3000">{getText("org1")}</h1>
          <p style={{ width: "60%" }} data-aos="fade-up" data-duration-aos="3000">{getText("org2")}
          <br /><br />
          
          {getText("org3")}

          </p>
        </div>
      </div>

    </>
  )
}
