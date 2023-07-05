import React, { useEffect } from 'react'
import AdminBase from '../../../../Base/ABase/AdminBase'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../../Base/redux/Products/productssAction'
import ProductCardAdmin from './Card/prodCardAdmin'


function AdminProductPage() {

  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(fetchProducts()) 
   },[])
  const product=useSelector((prod)=>prod.products.products)
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
