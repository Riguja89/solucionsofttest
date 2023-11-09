import React from "react";
import WhatsappButton from "../global/whatsappButton";

const Slider = () => {
  return (
    <div className="slider-container">
      <h3>WEBSITE - APPS - BRANDING</h3>
      <h2>Creativity</h2>
      <div className="boton_container">
        <WhatsappButton />
      </div>
      <div className="slider-arrows">
        <img src="arrow-left.svg" alt="" />
        <img src="arrow-right.svg" alt="" />
      </div>
      <div className="slider-collage">
        <img className="id" src="id3d.png" alt="" />
        <img className="camera" src="camera3d.png" alt="" />
        <img className="keys" src="keys3d.png" alt="" />
        <img className="hat" src="hat3d.png" alt="" />
        <img className="pencil" src="pencil3d.png" alt="" />
        <img className="buffer" src="buffer3d.png" alt="" />
        <img className="layer" src="layer3d.png" alt="" />
        <img className="map" src="map3d.png" alt="" />
      </div>
    </div>
  );
};

export default Slider;
