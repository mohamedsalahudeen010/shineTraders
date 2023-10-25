import React, { useState } from 'react'
import AdminBase from '../../../../Base/ABase/AdminBase'
import "./OrdersPage.css"

function OrdersPage() {

  const [orders,setOrders]=useState()
  const fetchOrders=async()=>{
    
     
        try {
            const response=await fetch(`https://shine-traders-back-end.vercel.app/order`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log(data)
          setOrders(data)
          console.log(orders)
        } 
        catch (error) {
            console.log(error)
          
        }
    }

  return (
   <AdminBase>

   </AdminBase>
  )
}

export default OrdersPage
