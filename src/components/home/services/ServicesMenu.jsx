import React from "react";

const menu = [
  { svg: "menu/web.svg", label: "Website" },
  { svg: "menu/apps.svg", label: "Apps" },
  { svg: "menu/branding.svg", label: "Branding" },
  { svg: "menu/starup.svg", label: "Start UP" },
  { svg: "menu/mdigital.svg", label: "M. Digital " },
  { svg: "menu/socialmedia.svg", label: "Social Media" },
];

const clase="delete-in-mobile"

const ServicesMenu = () => {
  return (
    <div className="services-menu_container">
      {menu.map((m, i) => (
        <div className={i>3?clase+" menu-item":" menu-item"} key={i} >
          <div className="menu-image">
            <img src={m.svg} alt="imagen del item menú" />
          </div>
          <p>{m.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesMenu;
