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
          <img alt="Salon" src="hair-lounge-salon.jpg" />
        </div>
        <div>
          <img alt="Stylist" src="Stylist.jpg" />
        </div>
        <div>
          <img alt="Barber" src="Barber.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
