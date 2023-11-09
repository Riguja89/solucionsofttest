import React from "react";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";
import Slider from "./Slider";
import Copos from "../global/Copos";
import MobileMenu from "./MobileMenu";


const DesktopHeader = () => {
  const clase = "copo";
  return (
    <div className="desktop-header_container">
      <Copos clase={clase}>
        <MobileMenu />
        <TopHeader />
        <NavBar />
        <Slider />
      </Copos>
    </div>
  );
};

export default DesktopHeader;
