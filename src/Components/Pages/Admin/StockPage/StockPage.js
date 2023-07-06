import React, { useEffect } from 'react'
import AdminBase from '../../../../Base/ABase/AdminBase'
import "./StockPage.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../../Base/redux/Products/productssAction'
import StockCardAdmin from './Card/StockCardAdmin'
import { fetchStock } from '../../../../Base/redux/Stock/stockAction'
import { fetchCart } from '../../../../Base/redux/Cart/cartAction'

function StockPage() {

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
    <div className='stock-page'>

<div></div>
    <div>
      <button className='add-product-btn'>Add Product</button>
    </div>

<div className="row justify-content-center products-admin"
      >
        {product &&
          product.map((prod) => (
            <div
              className="col-md-3 card-admin"
              key={prod._id}
              
            >
              <StockCardAdmin product={prod} />
              
            </div>
           
          ))}
      </div>
      </div>
   </AdminBase>
  )
}

export default StockPage
