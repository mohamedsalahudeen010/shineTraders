import React, { useEffect } from 'react'
import AdminBase from '../../../../Base/ABase/AdminBase'
import "./StockPage.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../../Base/redux/Products/productssAction'
import StockCardAdmin from './Card/StockCardAdmin'

function StockPage() {

  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(fetchProducts()) 
   },[])
  const product=useSelector((prod)=>prod.products.products)
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
