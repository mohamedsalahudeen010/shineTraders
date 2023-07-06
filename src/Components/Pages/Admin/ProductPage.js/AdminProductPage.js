import React, { useEffect } from 'react'
import AdminBase from '../../../../Base/ABase/AdminBase'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../../Base/redux/Products/productssAction'
import ProductCardAdmin from './Card/ProductCardAdmin'
import { fetchStock } from '../../../../Base/redux/Stock/stockAction'
import { fetchCart } from '../../../../Base/redux/Cart/cartAction'



function AdminProductPage() {

  const dispatch=useDispatch()
  
  useEffect(()=>{
    if(localStorage.getItem("email-admin")){
      dispatch(fetchStock())
    }
    else if(localStorage.getItem("email")){
      dispatch(fetchProducts()) 
      dispatch(fetchCart(localStorage.getItem("email")))
      console.log(localStorage.getItem("email"))
    }
  
  },[])
  const product=useSelector((stock)=>stock.stock.stock)
  return (
    <AdminBase>
         
      <div className="row justify-content-center products-admin"
      style={{paddingTop:"8rem"}}>
        {product &&
          product.map((prod) => (
            <div
              className="col-md-3 m-1 card-admin"
              key={prod._id}
              
            >
              <ProductCardAdmin product={prod} />
              
            </div>
           
          ))}
      </div>
      
      
    </AdminBase>
  )
}

export default AdminProductPage