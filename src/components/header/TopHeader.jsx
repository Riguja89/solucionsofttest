import React from "react";
import ReactWhatsapp from "react-whatsapp";

const data = require("../../assets/strings.json");

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="logo">
        <img src="logo.png" alt="" />
      </div>
      <div className="language-contact">
        <div className="language-switch">
          <button>Ingles</button>/<button>Español</button>
        </div>
        <ReactWhatsapp number={data["whatsapp-number"]} message={data["whatsapp-mesage"]} >
          <div className="whatsapp-button">
            <label>Contáctanos</label>
            <img src="whatsapp-logo.png" alt="" />
          </div>
        </ReactWhatsapp>
      </div>
    </div>
  );
};

export default TopHeader;
