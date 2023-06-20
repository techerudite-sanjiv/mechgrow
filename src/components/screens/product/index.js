import React from "react";
import cn from "classnames";
import styles from "./products.module.css";
import CustomButton from "../../button";
import { productList } from "./productArray";
import { useNavigate } from "react-router";
import { getProductDetailRoute, productDetailRoutePattern } from "../../../routes";
import ProductItem from "./productItem";

const Products = () => {

  const navigate = useNavigate()
  return (
    <>
      <div className={cn(styles["products-box"],"my-5")}>
        <div className={cn(styles["products-header"],"py-4")}>
          <p>our products</p>
          <div className={cn(styles["horizontal_line"])}></div>
        </div>
        <ProductItem quantity={4}/>
      </div>
    </>
  );
};

export default Products;
