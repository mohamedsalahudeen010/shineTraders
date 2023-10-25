import React, { useEffect, useState } from 'react'
import AdminBase from '../../../../Base/ABase/AdminBase'
import "./OrdersPage.css"
import { useDispatch, useSelector } from 'react-redux'
import { deleteOneItemOrder, fetchAllOrders } from '../../../../Base/redux/orders/ordersAction'
import Plus from "@iconscout/react-unicons/icons/uil-plus-circle"
import Minus from "@iconscout/react-unicons/icons/uil-minus-circle"
import Trash from "@iconscout/react-unicons/icons/uil-trash-alt"

function OrdersPage() {

 const dispatch =useDispatch()

    useEffect(()=>{
      dispatch(fetchAllOrders())
    },[])

    const orders=useSelector((orders)=>orders.order.order);
  
    console.log(orders)
  
    const orderedProducts=orders.map((item,idx)=>item.products)
    console.log(orderedProducts)

  return (
   <AdminBase>

<div className="row justify-content-center admin-orders-page">
      <div className="col-md-6 w-100">
        <h1 className="my-cart">Orders</h1>

        {orders.map((item,idx) => (
          <div className="flex-container m-2 cart" key={idx}>
            <div className="m-1 w-100" style={{ textAlign: "left" }}>
              <h4>Order {idx+1}</h4>
              <h5>
             
                Ordered By :
                <b> {item.customerName}</b>
              </h5>

              <h4 style={{ display: "inline-block" }}>Email :  </h4>


              <h6 style={{ display: "inline-block" }}>
              
                <b> {item.userMail}</b>
                  
               
              </h6>
              <hr></hr>
            </div>

            <div className="m-1 w-100 cart-image">
              {/* <img src={item.productImage} alt=""></img> */}
            </div>


            <div className=" m-1 w-100 mt-5">
              <h6>
                {" "}
               <Trash
               color={"red"}
               size={"2rem"}
                onClick={() => {
                  dispatch(deleteOneItemOrder(item));
                }}
                />
              </h6>
            </div>
          </div>
        ))}
      </div>
     
    </div> 

   </AdminBase>
  )
}

export default OrdersPage
