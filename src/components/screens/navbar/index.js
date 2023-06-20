import React from 'react'
import './navbar.module.css'
import cn from "classnames";
import styles from "./navbar.module.css";
import mechgrow_logo from "../../images/MGI_LOGO.png"
import { useNavigate } from 'react-router';
import { aboutUsRoutePattern, contactUsRoutePattern, indexPattern, productListRoutePattern } from '../../../routes';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className={cn(styles["navbar-box"], "navbar navbar-expand-lg  m-0 p-0")}>
                <div className="container-fluid">
                    <img onClick={() => { navigate(indexPattern) }} src={mechgrow_logo} alt="" className={cn(styles['web_logo'])} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={cn(styles['right_menu_box'], "collapse navbar-collapse flex-row-reverse")} id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item" onClick={() => { navigate(indexPattern) }}>
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item" onClick={() => { navigate(aboutUsRoutePattern) }} >
                                <a className="nav-link active" href="#">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" href="#" onClick={() => { navigate(productListRoutePattern) }}>Product</a>
                            </li>


                            <li className="nav-item" onClick={() => { navigate(contactUsRoutePattern) }} >
                                <a className="nav-link active" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar