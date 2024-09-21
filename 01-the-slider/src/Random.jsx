import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Random = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.pexels.com/v1/search?query=nature', {
          headers: {
            Authorization: 'hCHmImMZjkak5qoDSQWGaXfxfHo5E75AEUp6qECWDjEjVcSW9onUrkIH' // Your Pexels API Key
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setSlides(data.photos); // The photos are in the 'photos' property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider">
      {slides.length > 0 ? (
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
                <p className="main_head">Main Title</p>
                <p className="sub_head">sub Title</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae distinctio harum deserunt odio a facere aperiam fugiat, nostrum itaque rerum at ratione nemo facilis.</p>
                <div className="admin_data">
                <div className="admin">
                    <img src={slide.src.large} alt={slide.alt || slide.photographer} className='admin_img'/>
                </div>
                <p className="admin_name">{slide.photographer}</p>
                </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading slides...</p>
      )}
    </div>
  );
};

export default Random;
