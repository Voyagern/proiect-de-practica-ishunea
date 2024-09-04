"use client";

import Image  from "next/image";
import CustomButton from "./CustomButton";

   const Hero = () =>{
       const handleScroll = () =>{

       }
       return(
           <div className="hero">
               <div className="flex-1 pt-36 padding-x">
                   <h1 className="hero__title">
                       Find,book or rent th car
                   </h1>

                 <p className="hero__subtitle">
                     streamline your car rental expirience
                 </p>

                 <CustomButton
                 title="Explore Cars"
                 containerStyles="bg-primary-blue
                 text-white rounded-full mt-10"
                 handleClick={handleScroll()}
                 />
               </div>
           </div>

       )
   }
   export default Hero

