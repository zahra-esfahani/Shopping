import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../Services/HttpRequest';
export const getProducts=createContext();
function ProductContext({children}) {
const [products , setProducts]=useState([]);
useEffect(()=>{
    const fetchData=async ()=>{
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
},[])

  return (
    <>
    <getProducts.Provider value={products}>{children}</getProducts.Provider>
    </>
  )
}

const ProductsRecieve=()=>{
    const data=useContext(getProducts);
    return data;
}
const useDetails=(id)=>{
  const data=useContext(getProducts);
  const details=data.find((item)=>item.id===id);
  return details;
}
export {ProductsRecieve , useDetails} 
export default ProductContext