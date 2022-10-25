import React from 'react';
import './aboutUs.css';
import Range from '../../image/Rectangle 75.png'
import Range_2 from '../../image/Rectangle 76.png'
import Icon_check from '../../image/check.png'
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <>
      <div className="about_us">
        <div className="top_1_about">
          <h2 data-aos="fade-right">О компании SunRise Info Technologies</h2>
          <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus magna rhoncus, metus suspendisse vel, condimentum. Mauris quis neque, non, mi donec. Volutpat sed elementum laoreet convallis morbi a cursus faucibus. Lacinia ultrices iaculis elit in tempor. Pulvinar massa mattis quam urna. </p>
          <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus magna rhoncus, metus suspendisse vel, condimentum. Mauris quis neque, non, mi donec. Volutpat sed elementum laoreet convallis morbi a cursus faucibus. </p>
        </div>
        <div className="top_2_about">
          <img src={Range} alt="" />
        </div>
        <div className="top_3_about">
          <div className="left_about_3">
            <h2 data-aos="fade-up">Etiam arcu ac sit enim sem eget.</h2>
            <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin proin facilisi malesuada morbi neque ac id mi. Libero platea lorem volutpat tempor posuere fermentum lectus sed varius. Fermentum aliquam sagittis ullamcorper quis viverra. Maecenas sit viverra feugiat massa et velit. Etiam commodo non velit ut dictum. Aliquet cursus sed facilisi porttitor ut ornare malesuada sit tempor.
              <br /> <br />   Et, nisi, quis orci risus. Lectus tempus nulla et id mattis. In lacus, nam integer mauris felis, sodales. Montes, pharetra, dui, mus venenatis hac sagittis dignissim id. Consectetur vulputate pharetra elit sagittis.
              <br /> <br />  Gravida egestas quam aliquam nam tellus erat cursus congue. Enim risus et arcu in adipiscing venenatis semper elit praesent. Ut volutpat euismod sagittis senectus nibh odio viverra aenean. Purus tincidunt suspendisse suspendisse consequat, pulvinar elit consectetur gravida. Vitae sed aliquam sit orci.</p>
            <Link style={{ textDecoration: "none", color: "#ff7e00" }} to="/contact"><p data-aos="fade-up">Contact us</p></Link>
          </div>
          <img data-aos="fade-up" src={Range_2} alt="" />
        </div>
      </div>

    </>
  )
}
