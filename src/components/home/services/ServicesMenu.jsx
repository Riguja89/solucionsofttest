import React, { useState } from "react";

const menu = [
  { svg: "menu/web.svg", label: "Website" },
  { svg: "menu/apps.svg", label: "Apps" },
  { svg: "menu/branding.svg", label: "Branding" },
  { svg: "menu/starup.svg", label: "Start UP" },
  { svg: "menu/mdigital.svg", label: "M. Digital " },
  { svg: "menu/socialmedia.svg", label: "Social Media" },
];

const clase = "delete-in-mobile";

const ServicesMenu = () => {
  const [select, setSelect] = useState(1);

  return (
    <div className="services-menu_container">
      {menu.map((m, i) => (
        <div
          className={
            (i > 3 ? clase + " menu-item" : " menu-item") +
            (select === i ? " selected" : "")
          }
          key={i}
          onClick={() => setSelect(i)}
        >
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
