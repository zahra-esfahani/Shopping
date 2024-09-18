import React from "react";
import { validTitle } from "../helper/helper";
import { MdOutlineDelete } from "react-icons/md";
import styles from "./BacketCart.module.css"
function BacketCart({ data  , clickHandler }) {
  return (
    <>
      <div className={styles.card}>
        <img src={data.image}/>
        <p>{validTitle(data.title)}</p>
        <div className={styles.actions}>
          {data.quantity === 1 && <button onClick={()=>clickHandler("REMOVE_ITEM" ,data)}><MdOutlineDelete /></button>}
          {data.quantity > 1 && (
            <>
              <button onClick={()=>clickHandler("DECREASE" ,data)}>-</button>
              <span>{data.quantity}</span>
              <button onClick={()=>clickHandler("INCREASE" ,data)}>+</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BacketCart;
