import cn from "classnames";
import Navbar from "../navbar";
import ProductFooter from "../footer";
import CustomButton from "../../button";
import { useLocation } from "react-router";
import image4 from "../../images/esd_brush.webp"
import styles from "./product-detail.module.css";


export default function ProductDetail() {
    const productData = useLocation().state

    return (
        <>
            <Navbar />
            <div className={cn(styles["product-detail-container"])}>
                <div className={cn(styles[""], "row mt-5 p-4")}>
                    <div className={cn(styles["product-image-container"], "col-lg-6")}>
                        <img src={productData?.image ? productData?.image : image4} className="img-fluid d-block mx-auto" />
                    </div>
                    <div className={cn(styles["product-content-container"], "col-lg-6")}>
                        <div className="ps-4">
                            <h1 className="mb-2">
                                {productData?.productName ? productData?.productName : "Dummy Product"}
                            </h1>
                            <div className={cn(styles["product-rating"])}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span>4.7(21)</span>
                            </div>
                            <div className={cn(styles["product-price"])}>
                                <p className={cn(styles["last-price"])}>MRP:  <i className="fa-solid fa-indian-rupee-sign fa-xs"> </i>  <span>{productData?.mrp}</span></p>
                                <p className={cn(styles["new-price"])}>Discount Price:  <i className="fa-solid fa-indian-rupee-sign fa-xs"> </i>  <span>{productData?.discount_price}</span></p>
                            </div>
                            <p className="text-success">Stock Avaliable</p>
                            <p className={cn(styles["about_product"])}>About Product</p>
                            <p>{productData?.product_desc}</p>

                            <CustomButton label={"Buy"} style={{ "width": "30%" }} square />
                        </div>

                    </div>

                </div>
            </div>
            <ProductFooter />
        </>
    );
}