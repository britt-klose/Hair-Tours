import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
    <div
      className="carousel-wrapper"
      style={{ position: "relative", zIndex: "0" }}
    >
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img alt="Salon" src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div>
          <img alt="hair color" src="https://images.pexels.com/photos/3992871/pexels-photo-3992871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div>
          <img alt="Barber" src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </Carousel>
    </div>
  );
}
