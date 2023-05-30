import React from "react";
import cn from "classnames";
import styles from "./products.module.css";
import CustomButton from "../../button";
import { productList } from "./productArray";

const Products = () => {
  return (
    <>
      <div className={cn(styles["products-box"])}>
        <div className={cn(styles["products-header"])}>
          <p>our products</p>
        </div>

        <div className={cn(styles["products-header"])}>
          <div class="row pb-5 mb-4">
            {productList.map((item)=>{
              return(
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div class="card rounded shadow-sm border-0">
                  <div class="card-body p-0">
                    <img
                      src={item.imageUrl}
                      alt=""
                      class="img-fluid d-block mx-auto mb-3"
                    />
                     <div className="p-2">
                     <h5>
                      <a href="#" class="text-dark">
                        {item.productTitle}
                      </a>
                    </h5>
                    <p class="small text-muted font-italic">
                    {item.desc}
                    </p>
                    <CustomButton label={"Details"}/>
                  
                     </div>
                  </div>
                </div>
              </div>
              )
            })}
          
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
