import React from "react";
import cn from "classnames";
import styles from "./slider.module.css"
import CustomButton from "../../button";
import aeroplane from "../../images/aeroplane.png";

const Slider = () => {


  return (
    <>
      <div className={cn(["home_screen"])}>
        <div className="row px-5">
          <div className="col-md-6">
            <div className={cn(styles["teaser_left"])}>
              <p>Welcome to Mechgrowindia.com!!</p>
              <p>Our Trusted Partner for Seamless Import and Export Solutions</p>
         <br />
              <CustomButton label={"Click here"} square/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="teaser_right">
           <img src={aeroplane} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
