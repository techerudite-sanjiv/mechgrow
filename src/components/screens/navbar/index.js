import React from 'react'
import './navbar.module.css'
import cn from "classnames";
import styles from "./navbar.module.css";
import mechgrow_logo from "../../images/MGI_LOGO.png"
import { useNavigate } from 'react-router';
import { aboutUsRoutePattern, indexPattern, productListRoutePattern } from '../../../routes';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className={cn(styles["navbar-box"],"navbar navbar-expand-lg  m-0 p-0")}>
                <div class="container-fluid">
                    <img onClick={()=>{navigate(indexPattern)}} src={mechgrow_logo} alt="" className={cn(styles['web_logo'])} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div  className={cn(styles['right_menu_box'],"collapse navbar-collapse flex-row-reverse")} id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item" onClick={()=>{ navigate(indexPattern)}}>
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item" onClick={()=>{ navigate(aboutUsRoutePattern)}} >
                                <a class="nav-link active" href="#">About</a>
                            </li>
                           
                            <li class="nav-item dropdown">
                                <a onClick={()=>{navigate(productListRoutePattern)}} class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Product
                                </a>
                                <ul className={cn(styles['dropdown_box'],"dropdown-menu")}>
                                    <li><a class="dropdown-item" href="#">Categories1</a></li>
                                    <li><a class="dropdown-item" href="#">Categories2</a></li>
                                    <li><a class="dropdown-item" href="#">Categories3</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar