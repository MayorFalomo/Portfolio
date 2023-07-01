import React, { useEffect } from 'react'
import "./MobilePreload.css"
import AOS from "aos";
import "aos/dist/aos.css";



 
const MobilePreload = () => {

     useEffect(() => {
    AOS.init();
    AOS.refresh();
     }, []);
    
  return (
      <div className="Title">
          <div>
         <span className="web" data-aos="fade-up" >WEB </span>
         <span className="wizard" data-aos="fade-up" >WIZARD </span>
          </div>
          </div>
  )
}

export default MobilePreload