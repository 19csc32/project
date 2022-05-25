import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image11 from "./assets/11.png";
import image12 from "./assets/12.png";
import image13 from "./assets/13.png";
import image14 from "./assets/14.png";
import image15 from "./assets/15.png";
import image16 from "./assets/16.png";
import image17 from "./assets/17.png";
import image18 from "./assets/18.png";




const Ment1 = (props) => {
  return (
    <div>
    <div className="App">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image11} className="sliderimg" alt="" />
        <img src={image12} className="sliderimg" alt="" />
        <img src={image13} className="sliderimg" alt="" />
        <img src={image14} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
    <div className="App">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image15} className="sliderimg" alt="" />
        <img src={image16} className="sliderimg" alt="" />
        <img src={image17} className="sliderimg" alt="" />
        <img src={image18} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
 
  </div>
  );
}
export default Ment1;
