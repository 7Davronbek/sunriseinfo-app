import React from 'react'
import './contact.css'
import { GrFacebookOption } from 'react-icons/gr'
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa'

export default function Contacts() {
    return (
        <>
            <div className="contact">
                <h1>Контакты</h1>
                <div className="top_contact_1">
                    <div className="text1_contact">
                        <h2>Адресс</h2>
                        <p>г.Ташкент, Юнусабадский район, ССГ “Ифтихор”, ул.Ифтихор №1</p>
                    </div>
                    <div className="text1_contact">
                        <h2>Телефон</h2>
                        <p><a className='a_teg_con' style={{ color: "#8a8a8a" }} href="tel: +998(90) 123-45-67 ">+998 90 123-45-67 </a><br /><a className='a_teg_con' style={{ color: "#8a8a8a" }} href="tel: +998(90) 123-45-67">+998 90 123-45-67</a></p>
                    </div>
                    <div className="text1_contact">
                        <h2>Почта</h2>
                        <a style={{ color: "#8a8a8a" }} href="mailto: info@sunriseinfo.uz">info@sunriseinfo.uz</a>
                    </div>
                    <div className="text1_contact">
                        <h2>Соц сети</h2>
                        <div className="social_medi">
                            <span><GrFacebookOption className='icon_fa' /></span>
                            <span><FaTelegramPlane className='icon_fa' /></span>
                            <span><FaInstagram className='icon_fa' /></span>
                            <i class="flaticon-031-plant-1"></i>
                        </div>
                    </div>
                </div>
                <div className="top_contact_2">
                    <iframe className='contact-map' data-aos="fade-left" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.7315941634113!2d69.24937552922447!3d41.266938898704744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b201eb6a7ff%3A0x3820839f6cde6ba3!2z0JTQsNCy0LvQsNGCINCt0LrQvtC70L7Qs9C40Log0K3QutGB0L_QtdGA0YLQuNC30LDRgdC4INCc0LDRgNC60LDQt9C4!5e0!3m2!1sru!2s!4v1661514399874!5m2!1sru!2s" frameborder="0"></iframe>
                </div>
            </div>

        </>
    )
}
