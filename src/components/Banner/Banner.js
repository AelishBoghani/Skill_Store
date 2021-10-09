import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import img1 from '../../assest/banner1.png'
import img3 from '../../assest/banner3.png'
import img4 from '../../assest/banner4.png'

function Banner() {
  return (
    <div className="app_banner">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="app_banner"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="app_banner"
            src={img4}
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="app_banner"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
