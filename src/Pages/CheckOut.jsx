import React from 'react'
import { useCart } from '../Context/CartContext'
import BacketCart from './BacketCart';
import BacketSideBar from './BacketSideBar';
import styles from "./CheckOut.module.css"
function CheckOut() {
  const [state , dispatch]=useCart();
  const clickHandler=(type , payload)=>{
     dispatch({type , payload});
  }
  console.log(state);
  if(!state.counterItems){
    return (
      <div className={styles.container}>
        <p>Empty</p>
      </div>
    )
    
  }
  return (
    <>
    <div className={styles.container}>
      <BacketSideBar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product)=>(
          <BacketCart key={product.id} data={product} clickHandler={clickHandler} dispatch={dispatch}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default CheckOut