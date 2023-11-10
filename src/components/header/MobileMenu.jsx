import React from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "../../styles/burguer/burguerStyles";

// const showSettings = (event) => {
//   event.preventDefault();
// };

const MobileMenu = () => {
  return (
    <div className="mobile-menu_container">
      <div className="logo_container">
        <img src="logo.png" alt="" />
      </div>
      <div className="burger_container">
        <Menu
          right
          width={"83vw"}
          customBurgerIcon={<img src="header/burguer.svg" alt=""/>}
          customCrossIcon={<img src="header/cross.svg" alt=""/>}
          styles={styles}
        >
          <a className="menu-item" href="#our-services">
            Nuestros Servicios
          </a>
          <a  className="menu-item" href="#our-services">
            Proyectos
          </a>
          <a className="menu-item" href="#our-team">
            Equipo
          </a>
          <a className="menu-item" href="#contactus">
            Contáctanos
          </a>
          <div className="languaje-buttons">
            <div className="buttons">
              <button>Inglés</button> /
              <button className="espaniol">Español</button>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};
export default MobileMenu;
