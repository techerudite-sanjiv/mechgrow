import React from "react";
import cn from "classnames";
import styles from "./bestselling.module.css";
import { Button } from "reactstrap";
import image1 from "../images/ground-cord.jpg";
import image2 from "../images/label-dispenser.jpg";
import image3 from "../images/esdwristStrap.jpg";
import image4 from "../images/sakeGun.jpg";

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
  ];

  return (
    <div>
      <div className={cn(styles["best-selling"])}>
        <div class="row p-0 mb-0">
          <p>Best Selling Products</p>
          {best_selling.map((item) => {
            return (
              <div class="col-lg-3 col-md-6">
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
