import ProductFooter from "../footer";
import Navbar from "../navbar";
import ProductItem from "./productItem";

export default function AllProducts(){
    return(
        <>
            <Navbar/>
                <div class="mx-5">
                    <ProductItem quantity={12}/>
                </div>
            <ProductFooter/>
        </>
    );
}