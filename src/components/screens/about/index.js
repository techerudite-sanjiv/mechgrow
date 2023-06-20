import ProductFooter from "../footer"
import Navbar from "../navbar"
import styles from "./about.module.css"
import cn from "classnames";
import aboutImage from "../../images/ware1.jpg"

export default function About(){
    return(
        <>
            <Navbar/>
                <div className={cn(styles['about-container'])} >
                    <div className={cn(styles['about-image-banner'])}>
                        <img src={aboutImage} style={{height: "600px"}} className="w-100 img-fluid d-block mx-auto"/>
                    </div>
                    <div className={cn(styles['about-content'],"py-5 text-center justify-content-center row gap-2")}>
                        <div  className={cn(styles['who-container'],"col-lg-6")}>
                            <h1 className="mb-4">Who are we ?</h1>
                            <p className="px-5 mb-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.
                            </p>
                            <h1 className="mb-4">What do we do ?</h1>
                            <p className="px-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className={cn(styles['goal-container'],"col-lg-5")}>
                            <h1 className="text-center">Company Goals</h1>
                            <ul className="mt-4">
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            <ProductFooter/>
        </>
    )
}