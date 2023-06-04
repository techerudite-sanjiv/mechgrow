import cn from "classnames";
import styles from "./product-detail.module.css";
import { useLocation } from "react-router";
import Navbar from "../navbar";
import ProductFooter from "../footer";
import image4 from "../../images/image4.jpg"
import CustomButton from "../../button";


export default function ProductDetail(){
    const productData = useLocation().state
    console.log(productData, "here is your data")
    return(
        <>
            <Navbar/>
            <div className={cn(styles["product-detail-container"],"row mt-5 p-4")}>
                <div className={cn(styles["product-image-container"],"col-lg-6")}>
                    <img src={productData?.image ? productData?.image : image4}  class="img-fluid d-block mx-auto"/>
                </div>
                <div className={cn(styles["product-content-container"],"col-lg-6")}>
                    <h1 class="mb-2">
                        {productData?.productName ? productData?.productName : "Dummy Product" }
                    </h1>
                    <h4><u>Product Description :</u></h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                    <h5 class="mb-5">
                        Price : ##### Rs.
                    </h5>
                    <CustomButton label={"Buy"}/>

                </div>

            </div>
            <ProductFooter/>
        </>
    );
}