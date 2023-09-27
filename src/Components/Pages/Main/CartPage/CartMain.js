import React, { useCallback, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import "./Cart.css"
import Plus from "@iconscout/react-unicons/icons/uil-plus-circle"
import Minus from "@iconscout/react-unicons/icons/uil-minus-circle"
import Trash from "@iconscout/react-unicons/icons/uil-trash-alt"
import { useHistory } from "react-router-dom";
import MainBase from "../../../../Base/MBase/MainBase";
import {  addOneToCart, addToCart, deleteOneItemCart, deleteWholeCart } from "../../../../Base/redux/Cart/cartAction";
import { fetchAddOrder } from "../../../../Base/redux/Orders/ordersAction";
function CartPage() {

  const history=useHistory()

  

  let cartData=localStorage.getItem(`cartItems`)
  const[cart,setCart]=useState(cartData)
  const[paymentSuccess,setPaymentSuccess]=useState(false)


  useEffect(()=>{
   
  },[cart])


  const deleteCart=useCallback((idx)=>{
    localStorage.removeItem(`cartItems`)
    setCart( localStorage.removeItem(`cartItems`))
    console.log(cart)
    console.log(`cartItems[${idx}]`)
    history.push("/main")
    
  },[cart])




  const removItemsFromCart=(idx)=>{

  }


  const cartCard = useSelector((state) => state.cartItems.cart);
  const cartItems = cartCard;
  const dispatch = useDispatch();
  
console.log("cartItems",cartItems)
  let totalAmount = cartItems.reduce((x, item) => x + item.totalPrice, 0);


  const placeOrder=()=>{
    if(totalAmount === 0){
      alert("please Add Items in Cart");
      }else{
        try {
          dispatch(fetchAddOrder(cartItems))
        } catch (error) {
          
        }
        var options = {
          key: "rzp_test_lqugQj8QExL09b",
          key_secret:"mnTghes5bIlkG5Y6moQcNsoK",
          amount: totalAmount *100,
          currency:"INR",
          name:"SHINE_TRADERS",
          description:"Shine Traders Application Payment",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name:"",
            email:"shinetraders.sr@gmail.com",
            contact:"8056323664"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
        
      }
      setPaymentSuccess(true)
      
  }
  return (
    <MainBase>
      
      <div className="row justify-content-center cart-page">
      <div className="col-md-6">
        <h1 className="my-cart">My Cart</h1>

        {cartItems.map((item,idx) => (
          <div className="flex-container m-2 cart" key={idx}>
            <div className="m-1 w-100" style={{ textAlign: "left" }}>
              <h4>{item.productName}</h4>
              <h5>
                Price:{item.productPricePerItem} * {item.productQuantity} ={" "}
                {item.totalPrice}RS/-
              </h5>

              <h4 style={{ display: "inline-block" }}>Quantity : </h4>


              <h6 style={{ display: "inline-block" }}>
              <Plus size={"2rem"} 
                color={"green"}
                onClick={() => {
                  dispatch(
                    addOneToCart(
                      item,
                      item.varient,
                      item.quantity
                    )
                  );
                }}/>
                <h4 style={{ display: "inline-block" }}>{item.quantity} </h4>
                <Minus size={"2rem"} 
                color={"green"}
                onClick={() => {
                  dispatch(
                    addToCart(
                      item,
                      item.varient,
                      item.quantity - 1
                     
                    )
                  );
                }}/>
                  
               
              </h6>
              <hr></hr>
            </div>

            <div className="m-1 w-100 cart-image">
              <img src={item.productImage} alt=""></img>
            </div>


            <div className=" m-1 w-100 mt-5">
              <h6>
                {" "}
               <Trash
               color={"red"}
               size={"2rem"}
                onClick={() => {
                  dispatch(deleteOneItemCart(item));
                }}/>
              </h6>
            </div>
          </div>
        ))}
      </div>
      <div className="col-md-4">
        <h2 className="mt-5">Total Amount : {totalAmount} Rs/-</h2>
        {/* <PaymentPage totalAmount={totalAmount}/> */}
        <button className="btn-pay" style={{margin:"1rem"}} onClick={()=>{dispatch(deleteWholeCart())}}>Clear Cart</button>
        <button className="btn-place-order" style={{margin:"1rem"}} onClick={()=>{placeOrder()}}>Place Order</button>
           </div>
    </div> 

      </MainBase>
  );
}

export default CartPage;
