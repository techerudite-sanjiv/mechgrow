import React from "react";
import cn from "classnames";
import styles from "./bestselling.module.css";
import { Button } from "reactstrap";
import image1 from "../images/ground-cord.jpg";
import image2 from "../images/label-dispenser.jpg";
import image3 from "../images/esdwristStrap.jpg";
import image4 from "../images/sakeGun.jpg";
import image5 from "../images/esd-curtain wrap.jpg";
import image6 from "../images/esd cap.jpeg";
import image7 from "../images/esd-heel-strap.webp";
import image8 from "../images/image5.jpg";

const BestSelling = () => {
  const best_selling = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image5,
    },
    {
      image: image6,
    },
    {
      image: image7,
    },
    {
      image: image8,
    },
  ];

  return (
    <div>
      <div className={cn(styles["best-selling"])}>
        <div className="row p-0 mb-0">
          <p>Best Selling Products</p>
          {best_selling.map((item) => {
            return (
              <div className="col-lg-3 col-md-6 mb-4" key={item.image}>
                <div className={cn(styles["card_content"])}>
                  <img src={item.image} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
