import React from "react";
import Slider from "react-slick";
import SlideImg1 from '../../images/slider-image-1.jpeg'
import SlideImg2 from '../../images/slider-image-2.jpeg'
import SlideImg3 from '../../images/slider-image-3.jpeg'

function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <Slider {...settings}>
      <img width={100} height={400} src={SlideImg1} alt="" />
      <img width={100} height={400} src={SlideImg2} alt="" />
      <img width={100} height={400} src={SlideImg3} alt="" />
    </Slider>
  );
}

export default MainSlider;
