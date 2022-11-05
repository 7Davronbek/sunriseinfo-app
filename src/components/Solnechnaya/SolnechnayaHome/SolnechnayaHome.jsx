import React from 'react'
import './solnechnayaHome.css';
import UslImg1 from '../../../image/Rectangle 80.png'
import UslIm2 from '../../../image/Rectangle 81.png'
import UslImg3 from '../../../image/Rectangle 82.png'
import Green1 from '../../../image/Group (2).svg'
import Green2 from '../../../image/Group (3).svg'
import Green3 from '../../../image/Group (4).svg'
import Green4 from '../../../image/Group (5).svg'

export default function SolnechnayaHome() {
  return (
    <>
      <div className="solnechniy_home">
        <h2 data-aos="fade-right">Крупнейший производитель солнечной энергии</h2>
        <p data-aos="fade-right">Мы сотрудничаем с ведущими компаниями и производителями солнечных и фотоэлектрических станций и являемся их крупнейшим представителем и дистрибьютором в Узбекистане.</p>
        <a href="#">Связаться с нами</a>
      </div>

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
        <h2>Услуги</h2>
        <div className="flex_soln_usl">
          <div className="soln_1_uslu" data-aos="fade-up">
            <div className="soln_imf_1">
              <img src={UslImg1} alt="" />
            </div>
            <div className="sol_text">
              <h4>Гарантия</h4>
              <p>Обеспечиваем техническое обслуживание в течении первого года после установки</p>
              <a href="#">Связаться с нами</a>
            </div>
          </div>
          <div className="soln_1_uslu" data-aos="fade-up">
            <div className="soln_imf_1">
              <img src={UslIm2} alt="" />
            </div>
            <div className="sol_text">
              <h4>Гарантия</h4>
              <p>Обеспечиваем техническое обслуживание в течении первого года после установки</p>
              <a href="#">Связаться с нами</a>
            </div>
          </div>
          <div className="soln_1_uslu" data-aos="fade-up">
            <div className="soln_imf_1">
              <img src={UslImg3} alt="" />
            </div>
            <div className="sol_text">
              <h4>Гарантия</h4>
              <p>Обеспечиваем техническое обслуживание в течении первого года после установки</p>
              <a href="#">Связаться с нами</a>
            </div>
          </div>
        </div>

        <hr />

        <div className="green_icon">
          <div className="green_1">
            <img src={Green4} alt="" />
            <p>Энергоэффективные решения</p>
          </div>
          <div className="green_1">
            <img src={Green3} alt="" />
            <p>Эксплуатация солнечной панели</p>
          </div>
          <div className="green_1">
            <img src={Green1} alt="" />
            <p>Резервный аккумуляторный генератор</p>
          </div>
          <div className="green_1">
            <img src={Green2} alt="" />
            <p>Защита от перенапряжения всего дома</p>
          </div>

        </div>
      </div>
    </>
  )
}
