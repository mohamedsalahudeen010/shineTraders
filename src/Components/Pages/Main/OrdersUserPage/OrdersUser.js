import React from 'react'
import MainBase from '../../../../Base/MBase/MainBase'
import { addOneToCart, addToCart, deleteOneItemCart } from '../../../../Base/redux/Cart/cartAction';
import { useDispatch,useSelector } from 'react-redux';

import Plus from "@iconscout/react-unicons/icons/uil-plus-circle"
import Minus from "@iconscout/react-unicons/icons/uil-minus-circle"
import Trash from "@iconscout/react-unicons/icons/uil-trash-alt"

export default function OrdersUser() {

  
  const orders=useSelector((orders)=>orders.order.order);
  
  console.log(orders)

  const orderedProducts=orders.map((item,idx)=>item.products)
  console.log(orderedProducts)
  const dispatch = useDispatch();

  return (
   <MainBase>
    
    <div className="row justify-content-center cart-page">
      <div className="col-md-6">
        <h1 className="my-cart">My Orders</h1>

        {orderedProducts.map((item,idx) => (
          <div className="flex-container m-2 cart" key={idx}>
            <div className="m-1 w-100" style={{ textAlign: "left" }}>
              <h4>Order {idx+1}</h4>
              <h5>
                {/* Price:{item.productPricePerItem} * {item.productQuantity} ={" "}
                {item.totalPrice}RS/- */}
              </h5>

              <h4 style={{ display: "inline-block" }}>Quantity : </h4>


              <h6 style={{ display: "inline-block" }}>
              <Plus size={"2rem"} 
                color={"green"}
                // onClick={() => {
                //   dispatch(
                //     addOneToCart(
                //       item,
                //       item.varient,
                //       item.quantity
                //     )
                //   );
                // }}
                />
                <h4 style={{ display: "inline-block" }}>{item.quantity} </h4>
                <Minus size={"2rem"} 
                color={"green"}
                // onClick={() => {
                //   dispatch(
                //     addToCart(
                //       item,
                //       item.varient,
                //       item.quantity - 1
                     
                //     )
                //   );
                // }}
                />
                  
               
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
                // onClick={() => {
                //   dispatch(deleteOneItemCart(item));
                // }}
                />
              </h6>
            </div>
          </div>
        ))}
      </div>
     
    </div> 

   </MainBase>
  )
}
