import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const send = (e) => {
    e.preventDefault();
    formData.email.length === 0 ||
    formData.idea.length === 0 ||
    formData.name.length === 0
      ? alert("Por favor llene todos los campos")
      : alert(
          "Tu mensaje sera enviado con la siguiente info: \n" +
            "Nombre: " +
            formData.name +
            "\n" +
            "Email: " +
            formData.email +
            "\n" +
            "Idea: " +
            formData.idea +
            "\n"
        );
  };

  return (
    <div className="contact-form_container">
      <h3>Contáctanos</h3>
      <form onSubmit={send}>
        <div className="name-email">
          <div className="name-section">
            <label htmlFor="name">
              Nombre
              <br />
              <input
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="email-section">
            <label htmlFor="email">
              E-Mail
              <br />
              <input
                type="email"
                placeholder="E-Mail"
                name="email"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <label htmlFor="idea">
          Cuéntanos tu idea
          <br />
          <textarea
            name="idea"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
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
