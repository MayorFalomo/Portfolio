import React, { useEffect } from 'react'
import "./MobilePreload.css"
import AOS from "aos";
import "aos/dist/aos.css";
import {motion} from 'framer-motion'



 
const MobilePreload = () => {

     useEffect(() => {
    AOS.init();
    AOS.refresh();
     }, []);
    
  return (
      <motion.div  className="Title">
          <div className='centered' >
         <span className="web" data-aos="fade-up" >WEB </span>
         <span className="wizard" data-aos="fade-up" >WIZARD </span>
          </div>
          </motion.div>
  )
}

export default MobilePreload