import React from "react";
import cn from "classnames";
import styles from "./products.module.css";
import CustomButton from "../../button";
import { productList } from "./productArray";
import { useNavigate } from "react-router";
import { getProductDetailRoute, productDetailRoutePattern } from "../../../routes";

const Products = () => {

  const navigate = useNavigate()
  return (
    <>
      <div className={cn(styles["products-box"],"my-5")}>
        <div className={cn(styles["products-header"],"py-4")}>
          <p>our products</p>
          <div className={cn(styles["horizontal_line"])}></div>
        </div>

        <div className={cn(styles["products-content"])}>
          <div class="row pb-5 mb-4">
            {productList.map((item)=>{
              return(
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div class="card rounded shadow-sm border-0">
                  <div className={cn(styles["card-body-content"],"card-body mt-5 p-3")}>
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
                    <CustomButton onClick={()=> navigate(getProductDetailRoute(item.productTitle),{state:{image: item.imageUrl , productName: item.productTitle}})} label={"Details"}/>
                  
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
