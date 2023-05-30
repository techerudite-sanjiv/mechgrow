import React from 'react'
import Navbar from '../navbar'
import cn from "classnames";
import styles from "./dashboard.module.css";
import Slider from '../carousel/Slider';
import Products from '../product';
import ProductFooter from '../footer';

const Dashboard = () => {
  return (
    <>
    <div className={cn(styles["dashboard-page-container"],"px-2")}>
        <Navbar/>
        <Slider/>
        <Products/>
        <ProductFooter/>
    </div>

    </>
  )
}

export default Dashboard