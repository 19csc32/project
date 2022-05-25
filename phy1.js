import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./assets/100.png";
import image2 from "./assets/101.png";
import image3 from "./assets/102.png";
import image4 from "./assets/103.png";


import image22 from "./assets/22.png";
import image23 from "./assets/23.png";
import image24 from "./assets/24.png";



const Phy1 = (props) => {
  return (
    <div>
    <div className="App">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  
  <div className="App">
    <AliceCarousel autoPlay autoPlayInterval="3000">
    
      <img src={image22} className="sliderimg" alt="" />
      <img src={image23} className="sliderimg" alt="" />
      <img src={image24} className="sliderimg" alt="" />
</AliceCarousel>
     </div>
  </div>
  );
}
export default Phy1;