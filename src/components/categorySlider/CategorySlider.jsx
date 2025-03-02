import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

import { BaseUrl } from "../../utlis/BaseUrl";

function CategorySlider() {
  const [categories, setCategories] = useState([]);
  const getAllCategories = async () => {
    let { data } = await axios.get(`${BaseUrl}categories`);
    // return response.data
    setCategories(data.data);
  };
  useEffect(() => {
    console.log(categories);

    getAllCategories();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
  };
  return (
    <div className="mt-5 container-fluid">
      <h3>Category Slider</h3>
      <Slider {...settings} autoplay={true} autoplaySpeed={2500}>
        {categories?.map((item) => (
          <img width={100} height={200} src={item.image} alt="" />
        ))}
      </Slider>
    </div>
  );
}

export default CategorySlider;
