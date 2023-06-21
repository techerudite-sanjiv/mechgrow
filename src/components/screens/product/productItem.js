import React from "react";
import cn from "classnames";
import styles from "./products.module.css";
import CustomButton from "../../button";
import { productList } from "./productArray";
import { useNavigate } from "react-router";
import { getProductDetailRoute } from "../../../routes";

export default function ProductItem({ quantity }) {
  const navigate = useNavigate()
  return (
    <div className={cn(styles["products-content"])}>
      <div className="row pb-5 mb-4">
        {productList.map((item, index) => {
          if (index < quantity) {
            return (
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 p-3" key={item.productTitle}>
                <div className={cn(styles["card-body-content"], "card-body mt-5 p-3")}>
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="img-fluid d-block mx-auto mb-3"

                  />
                  <hr />
                  <div className="p-2">
                    <p className={cn(styles["product_title"])}>
                      {item.productTitle}
                    </p>
                    <div className={cn(styles["product-rating"])}>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span>4.7(21)</span>
                    </div>
                    <p className={cn(styles["product-price"])}>
                      Price: <i className="fa-solid fa-indian-rupee-sign fa-xs"> </i> {item.new_price}
                    </p>
                    <CustomButton
                      onClick={() => navigate(getProductDetailRoute(item.productTitle),
                        { state: { image: item.imageUrl, productName: item.productTitle, product_desc: item.description, mrp: item.old_price, discount_price: item.new_price } })}
                      label={"Details"} />

                  </div>
                </div>

              </div>
            )
          }
        })}


      </div>
    </div>
  )
}