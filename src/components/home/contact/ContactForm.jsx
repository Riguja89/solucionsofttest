import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form_container">
         <h3>Contáctanos</h3>
      <form>
        <div className="name-email">
          <div className="name-section">
            <label htmlFor="name">
              Nombre
              <br />
              <input type="text" placeholder="Nombre" />
            </label>
          </div>
          <div className="email-section">
            <label htmlFor="email">
              E-Mail
              <br />
              <input type="email" placeholder="E-Mail" />
            </label>
          </div>
        </div>
        <label htmlFor="">
          Cuéntanos tu idea
          <br />
          <textarea name="idea" id="" cols="30" rows="10"></textarea>
        </label>
        <br />
        <input className="submit" type="submit" value="Enviar" />
      </form>
      <div className="pencil-container">
        <img src="pencil3d.png" alt="" />
      </div>
    </div>
  );
};
export default ContactForm;
