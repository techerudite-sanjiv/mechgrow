import React from 'react'
import cn from "classnames";
import styles from './customButton.css'
import { Button } from 'reactstrap'

const CustomButton = ({label}) => {
  return (
    <>
         <div>
            <button className={"products-button"}>{label}</button>
         </div>
    </>
  )
}

export default CustomButton