
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../src/assets/banner-1.jpg";
import img2 from "../src/assets/banner-2.jpg";
import img3 from "../src/assets/banner-3.jpg";
import img4 from "../src/assets/banner-4.jpg";
import img5 from "../src/assets/banner-5.jpg";
import img6 from "../src/assets/banner-6.jpg";
import img7 from "../src/assets/banner-7.jpg";
import img8 from "../src/assets/banner-8.jpg";
import img9 from "../src/assets/banner-9.jpg";
import img10 from "../src/assets/banner-10.jpg";
import img11 from "../src/assets/banner-11.jpg";

const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      className="w-full"
    >
      <div className="h-[400px]  lg:h-[640px]">
        <img src={img2} alt="Banner 1" className="w-full h-full object-cover" />
      </div>
      <div className="h-[400px]  lg:h-[640px]">
        <img src={img1} alt="Banner 2" className="w-full h-full object-cover" />
      </div>
      <div className="h-[400px]  lg:h-[640px]">
        <img src={img3} alt="Banner 3" className="w-full h-full object-cover" />
      </div>
      <div className="h-[400px]  lg:h-[640px]">
        <img src={img4} alt="Banner 4" className="w-full h-full object-cover" />
      </div>
      <div className="h-[400px]  lg:h-[640px]">
        <img src={img5} alt="Banner 5" className="w-full h-full object-cover" />
      </div>
      <div className="h-[400px]  lg:h-[640px]">
        <img src={img6} alt="Banner 6" className="w-full h-full object-cover" />
      </div>
      <div className="h-[400px]  lg:h-[640px]">
        <img src={img7} alt="Banner 7" className="w-full h-full object-cover" />
      </div>
      <div className="h-[400px]  lg:h-[640px]">
        <img src={img8} alt="Banner 8" className="w-full h-full object-cover" />
      </div>
      <div className="h-[400px]  lg:h-[640px]">
        <img src={img9} alt="Banner 9" className="w-full h-full object-cover" />
      </div>
      <div className="h-[400px]  lg:h-[640px]">
        <img src={img10} alt="Banner 10" className="w-full h-full object-cover" />
      </div>
      <div className="h-[400px]  lg:h-[640px]">
        <img src={img11} alt="Banner 11" className="w-full h-full object-cover" />
      </div>
    </Carousel>
  );
};

export default Slider;
