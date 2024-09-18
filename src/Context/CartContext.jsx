import React, { createContext, useContext, useReducer } from 'react'
import { sumTotalAndItems } from '../helper/helper';

const initialState={
  selectedItems:[],
  itemsCounter:0,
  total:0,
  checkOut:false
};
const reducer=(state,  action)=>{
  switch (action.type) {
    case ("ADD_ITEM") :
      if(!state.selectedItems.find((item)=> item.id===action.payload.id)){
        state.selectedItems.push({...action.payload ,quantity:1 })
      }
      return{
        selectedItems:[...state.selectedItems],
        ...sumTotalAndItems(state.selectedItems ),
        checkOut:false,
      }
      case("REMOVE_ITEM"):
        const newSelectedItems=state.selectedItems.filter((item)=>item.id!==action.payload.id);
        state.selectedItems=[...newSelectedItems];
        return{
          ...state , 
          ...sumTotalAndItems(newSelectedItems)

        }
        case("INCREASE"):
        const increaseIndex=state.selectedItems.findIndex((item)=>item.id===action.payload.id);
        state.selectedItems[increaseIndex].quantity++;
        return{
          ...state,
          ...sumTotalAndItems(state.selectedItems)
        }
        case("DECREASE"):
        const decreaseIndex=state.selectedItems.findIndex((item)=>item.id===action.payload.id);
        state.selectedItems[decreaseIndex].quantity--;
        return{
          ...state,
          ...sumTotalAndItems(state.selectedItems)
        }
 
    }
}

export const CartProvider=createContext();
function CartContext({children}) {

    const [state , dispatch]=useReducer(reducer , initialState)
  return (
    <>
    <CartProvider.Provider value={{state , dispatch } }>{children}</CartProvider.Provider>
    
    </>
  )
}

const useCart=()=>{
    const {state , dispatch}=useContext(CartProvider);
    return [state , dispatch];
}
export {useCart}
export default CartContext