import React from "react";
import CarouselHomepage from "../../Utils/Carousel-Homepage/CarouselHomepage";
import Navbar from "../Navbar/Navbar";
import { Footer } from "antd/es/layout/layout";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-200 to-yellow-100">
      <div>
        <CarouselHomepage />
      </div>
    </div>
  );
};

export default Homepage;
