import React from 'react'
import './navbar.module.css'
import cn from "classnames";
import styles from "./navbar.module.css";
import mechgrow_logo from "../../images/MGI_LOGO.png"

const Navbar = () => {
    return (
        <div>
            <nav className={cn(styles["navbar-box"],"navbar navbar-expand-lg  m-0 p-0")}>
                <div class="container-fluid">
                    <img src={mechgrow_logo} alt="" className={cn(styles['web_logo'])} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div  className={cn(styles['right_menu_box'],"collapse navbar-collapse flex-row-reverse")} id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">About Us</a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Product</a>
                            </li>
                           
                           
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar