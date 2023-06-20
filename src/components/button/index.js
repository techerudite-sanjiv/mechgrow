import React from 'react'
import cn from "classnames";
import styles from './customButton.css'
import { Button } from 'reactstrap'

const CustomButton = ({label,onClick,style,square}) => {
  return (
    <>
         <div>
            <button onClick={onClick} className={square?"products-button-square":"products-button"}  style={style}>{label}</button>
         </div>
    </>
  )
}

export default CustomButton