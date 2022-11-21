import React from 'react'
import './contact.css'
import { GrFacebookOption } from 'react-icons/gr'
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa'
import {getText} from '../locales/index'

export default function Contacts() {
    return (
        <>
            <div className="contact">
                <h1>{getText("footer1")}</h1>
                <div className="top_contact_1">
                    <div className="text1_contact">
                        <h2>{getText("footer2")}</h2>
                        <p>{getText("footer5")}</p>
                    </div>
                    <div className="text1_contact">
                        <h2>{getText("footer12")}</h2>
                        <p><a className='a_teg_con' style={{ color: "#8a8a8a" }} href="tel: +998(97) 264-77-78">+998 97 264-77-78 </a><br /><a className='a_teg_con' style={{ color: "#8a8a8a" }} href="tel: +998(90) 995-13-82">+998 90 995-1382</a></p>
                    </div>
                    <div className="text1_contact">
                        <h2>{getText("footer3")}</h2>
                        <a style={{ color: "#8a8a8a" }} href="mailto: info@sunriseinfo.uz">info@sunriseinfo.uz</a>
                    </div>
                    <div className="text1_contact">
                        <h2>{getText("footer8")}</h2>
                        <div className="social_medi">
                            <span><GrFacebookOption className='icon_fa'/></span>
                            <span><FaTelegramPlane className='icon_fa'/></span>
                            <span><FaInstagram className='icon_fa'/></span>
                            <i class="flaticon-031-plant-1"></i>
                        </div>
                    </div>
                </div>
                <div className="top_contact_2">
                <iframe  className='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.4814353198984!2d69.29609964626391!3d41.37569806418472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3304d29369b%3A0x526ded508c65954a!2z0KHRgtC-0Y_QvdC60LAg0K7QvdGD0YHQsNCx0LDQtCAxNSDQutCyLiwg0YPQu9C40YbQsCDQrtC90YPRgdC-0YLQsCwg0KLQsNGI0LrQtdC90YIgMTAwMTgwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1667841971442!5m2!1sru!2s"></iframe>
                </div>
            </div>

        </>
    )
}
