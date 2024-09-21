import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Caraousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <p className="main_head">Main Title</p>
          <p className="sub_head">sub Title</p>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae distinctio harum deserunt odio a facere aperiam fugiat, nostrum itaque rerum at ratione nemo facilis.</p>
          <div className="admin_data">
            <div className="admin"></div>
            <p className="admin_name">name</p>
          </div>
        </div>
        <div>
          <div>
            <p className="main_head">Main Title</p>
            <p className="sub_head">sub Title</p>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae distinctio harum deserunt odio a facere aperiam fugiat, nostrum itaque rerum at ratione nemo facilis.</p>
            <div className="admin_data">
              <div className="admin"></div>
              <p className="admin_name">name</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="main_head">Main Title</p>
            <p className="sub_head">sub Title</p>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae distinctio harum deserunt odio a facere aperiam fugiat, nostrum itaque rerum at ratione nemo facilis.</p>
            <div className="admin_data">
              <div className="admin"></div>
              <p className="admin_name">name</p>
            </div>
          </div>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default Caraousel