import React from "react";
import ServicesMenu from "./ServicesMenu";
import SlideService from "./SlideService";

const OurServices=()=>{
    return(
        <div className="our-services_container" id="our-services">
            <h3>Nuestros Servicios</h3>
            <ServicesMenu/>
            <SlideService/>
        </div>
    )
}

export default OurServices;