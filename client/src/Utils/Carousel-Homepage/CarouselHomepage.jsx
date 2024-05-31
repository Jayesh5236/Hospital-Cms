import React from "react";
import { Carousel } from "antd";

const CarouselHomepage = () => {
  return (
    <div className="max-w-screen-lg mx-auto w-full">
      <Carousel autoplay>
        <div className="h-60 sm:h-72 md:h-96 lg:h-120">
          <img
            className="w-full h-full object-cover"
            src="https://t4.ftcdn.net/jpg/07/15/07/37/240_F_715073787_smVb8A2HNH4Ebjrc3Mr6yZkgcXwHicsX.jpg"
            alt="Hospital 1"
          />
        </div>
        <div className="h-60 sm:h-72 md:h-96 lg:h-120">
          <img
            className="w-full h-full object-cover"
            src="https://t3.ftcdn.net/jpg/06/87/33/24/240_F_687332492_xK4QB5ORxMtA62JUG6zTZiAIVXB9FWRV.jpg"
            alt="Hospital 2"
          />
        </div>
        <div className="h-60 sm:h-72 md:h-96 lg:h-120">
          <img
            className="w-full h-full object-cover"
            src="https://as2.ftcdn.net/v2/jpg/07/66/30/35/1000_F_766303509_50plW2kgBbes9Zsu6OnZQK3xMywnZJN2.jpg"
            alt="Hospital 3"
          />
        </div>
        <div className="h-60 sm:h-72 md:h-96 lg:h-120">
          <img
            className="w-full h-full object-cover"
            src="https://t4.ftcdn.net/jpg/07/87/99/23/240_F_787992385_WeVZuTrHzage5swG8zfVU1X94Z4uD5dI.jpg"
            alt="Hospital 4"
          />
        </div>
        <div className="h-60 sm:h-72 md:h-96 lg:h-120">
          <img
            className="w-full h-full object-cover"
            src="https://t3.ftcdn.net/jpg/07/70/99/76/240_F_770997621_8ruRqrkb61gbOh8FLXpffU785RKdDq7S.jpg"
            alt="Hospital 5"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselHomepage;
