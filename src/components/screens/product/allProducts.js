import ProductFooter from "../footer";
import Navbar from "../navbar";
import ProductItem from "./productItem";

export default function AllProducts(){
    return(
        <>
            <Navbar/>
                <div className="mx-5">
                    <ProductItem quantity={100}/>
                </div>
            <ProductFooter/>
        </>
    );
}