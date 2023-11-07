import React from "react";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar"
import Slider from "./Slider";

const DesktopHeader=()=>{
    return(
        <div className="desktop-header_container">
            <TopHeader/>
            <NavBar/>
            <Slider/>
        </div>
    )
}

export default DesktopHeader;