import React from "react";

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
          <p>
            Construimos proyectos web que marcan la diferencia y garantizan la
            experiencia de usuario, navegabilidad, accesibilidad, diseño
            responsive y optimización en buscadores.
          </p>
          <br />
          <p>
            Nuestros conocimientos se adaptan a los cambios tecnológicos,
            aplicando las últimas tendencias al desarrollo web, como HTML5,
            CSS3, JavaScript, diseño responsive, https.
          </p>
          <div className="whatsapp-button">
            <label>Contáctanos</label>
            <img src="whatsapp-logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideService;
