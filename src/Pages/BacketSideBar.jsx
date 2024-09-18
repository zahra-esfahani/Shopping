import React from 'react'
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import styles from "./BacketSideBar.module.css"
function BacketSideBar({state }) {
  return (
    <>
    <div className={styles.sidebar}>
        <div>
            <TbChecklist/>
            <p>Total:</p>
            <span>{state.totalItems}</span>
        </div>
        <div>
            <FaHashtag/>
            <p>Quantity:</p>
            <span>{state.counterItems}</span>
        </div>
        <div>
            <BsPatchCheck/>
            <p>Status:</p>
            <span>{state.checkout ? "Done": "Pending..."}</span>
        </div>
    </div>
    </>
  )
}

export default BacketSideBar