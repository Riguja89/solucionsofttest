import React from "react";

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
        <div className="whatsapp-button">
          <label>Contáctanos</label>
          <img src="whatsapp-logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
