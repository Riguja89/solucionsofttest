import React from "react";
import ReactWhatsapp from "react-whatsapp";

const data = require("../../../assets/strings.json");

const SlideService = () => {
  return (
    <div className="slide-service_container">
      <div className="image-slide">
        <div className="screens">
          <img
            className="imageslide"
            src="image01.png"
            alt="imagen de slider 1"
          />
        </div>
        <div className="dots">
          <img src="services/dots.svg" alt="" />
        </div>
      </div>
      <div className="info-slide">
        <h3>Website</h3>
        <div className="text-contact">
          <p>{data["firstp-website"]}</p>
          <br />
          <p>{data["secondp-website"]}</p>
          <ReactWhatsapp
            number={data["whatsapp-number"]}
            message={data["whatsapp-mesage"]}
          >
            <div className="whatsapp-button">
              <label>Contáctanos</label>
              <img src="whatsapp-logo.png" alt="" />
            </div>
          </ReactWhatsapp>
        </div>
      </div>
    </div>
  );
};

export default SlideService;
