import React from "react";
import ReactWhatsapp from "react-whatsapp";

const data = require("../../assets/strings.json");

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src="logo.png" alt="" />
      </div>
      <div className="footer-ubication">
        <h3>UBICACIÓN</h3>
        <p>Bogota, Colombia</p>
      </div>
      <div className="footer-emails">
        <h3>CORREO ELECTRÓNICO</h3>
        <p>contacto@solucionsoft.com</p>
      </div>
      <div className="footer-phones">
        <h3>TELÉFONOS</h3>
        <p>(057) 301 234 81 30 &nbsp;&nbsp;&nbsp;&nbsp; (057) 300 631 59 63</p>
      </div>
      <div className="footer-whatsapp-logo">
        <ReactWhatsapp
          number={data["whatsapp-number"]}
          message={data["whatsapp-mesage"]}
        >
          <img src="whatsapp-logo2.png" alt="" />
        </ReactWhatsapp>
      </div>
    </div>
  );
};
export default Footer;
