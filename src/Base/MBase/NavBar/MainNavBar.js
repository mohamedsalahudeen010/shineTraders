import React, { useContext, useState } from 'react'
import "./MainNavBar.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import Dot from "@iconscout/react-unicons/icons/uil-ellipsis-v"
import Cart from "@iconscout/react-unicons/icons/uil-shopping-cart"
import Collapse from 'react-bootstrap/Collapse';
import { useHistory } from 'react-router-dom';
import { ShineContext } from '../../../Context';
import Avatar from "@iconscout/react-unicons/icons/uil-user-circle"
import { useSelector } from 'react-redux';


function MainNavBar() {

   const history=useHistory()
   const {openCom,setOpenCom,openLand,setOpenLand}=useContext(ShineContext)
   const [product,setProduct]=useState(false)
   

   const cart=useSelector((prod)=>prod.cartItems.cart);
 
  
   function logOutFunction(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    history.push("/")
   }
  return (
   <div>

<div>
      <div className="nav-wrapper-main">
        <div className="nav-left-main">
        <div className='nav-name-main'
            onClick={()=>{history.push("/main")}}>
              Shine Traders
            </div>
          {/* onMouseOver={()=>setProduct(true)}
                     onClick={()=>setProduct(false)} */}
            <div className='user-name-main'
            >
              
                        Hello! {localStorage.getItem("name")} 
                        
            </div>          
        </div>
        <div className="nav-right-main">

        <div className='nav-right-main-list'>
                     <ul>
                     
                     <li className='product-list-main' id='product-list-main'
                     onClick={()=>{history.push("/main")}}>
                          Home
                        </li>

                     <li 
                     onClick={()=>history.push("/productsMain")}>
                        Products 
                        </li>
                        
                        <li onClick={()=>{history.push("/ordersUser")}}>
                           Orders 
                        </li>
  
                      <li onClick={()=>logOutFunction()}>
                           Logout
                        </li>

                        <li onClick={()=>{history.push("/cart")}}>
                          <Cart size={"2rem"} color={"black"}/><sup style={{color:"red",fontSize:"1rem"}}>{cart.length}</sup>
                        </li>
                        
                     </ul>
                     
                </div>
         
        </div>
        <div >
          <input type="checkbox" id="check-main" name="" value="" style={{display:"none"}}></input>
          <label htmlFor='check-main' className='check-label-main'
          style={openLand?{transform:"rotate(90deg)",transition:"all 0.6s"}:{transform:"rotate(0deg)",transition:"all 0.6s"}}><Dot
          onClick={()=>setOpenCom(false,setOpenLand(!openLand))}/></label>
        </div>

        <div className='land-dot-list-main'>
        <Collapse in={openLand}>
        <div id="example-collapse-text" className='view-nav-list-main'>
          <ul>
          <li><span onClick={()=>{
            setOpenLand(false);
            history.push("/main")}}>Home</span></li>
            
            <li><span onClick={()=>{
              setOpenLand(false);
              history.push("/productsMain")}}>Products</span></li>

            <li><span onClick={()=>{setOpenLand(false);
              history.push("/ordersUser")}}>Orders</span></li>
            <li><span onClick={()=>{setOpenLand(false);
            logOutFunction()}}
            >Log Out</span></li>
            <li><span onClick={()=>{setOpenLand(false);
              history.push("/cart")}}>
              <Cart size={"2rem"} color={"black"}/><sup style={{color:"red",fontSize:"1rem"}}>{cart.length}
              </sup>
                     </span></li>
          </ul>
        </div>
      </Collapse>
        
        </div>
      </div>

      {product ? (
        <div className="products" id="products" style={{ marginTop: "8rem" }}>
          <div className="row">
            <div className="col-md-4 interior">
              <h4>Interior Wall Paints</h4>
              <ul>
                <li>Nerolac Impressions HD</li>
                <li>Nerolac Beauty Sheen</li>
                <li>Nerolac Beauty Gold Washable</li>
                <li>Beauty Silver</li>
                <li>Nerolac Pearls Emulsion</li>
                <li>Nerolac Beauty Little Master</li>
                <li>Nerolac Beauty Smooth Finish</li>
              </ul>
            </div>

            <div className="col-md-4 exterior">
              <h4>Exterior Wall Paints</h4>
              <ul>
                <li>Nerolac Excel Top Guard</li>
                <li>Nerolac Excel Total</li>
                <li>Excel Mica Marble Stretch & Sheen</li>
                <li>Nerolac Excel Anti-Peel</li>
                <li>Nerolac Excel Tile Guard</li>
                <li>Nerolac Suraksha Plus</li>
                <li>Suraksha Acrylic Exterior Emulsion</li>
              </ul>
            </div>

            <div className="col-md-4 primers">
              <h4>Primers</h4>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 enamel">
              <h4>Metal Enamal Paints</h4>
              <ul>
                <li></li>
              </ul>
            </div>

            <div className="col-md-4 wood-coating">
              <h4>Wood Coating</h4>
              <ul>
                <li></li>
              </ul>
            </div>
            <div className="col-md-4 waterproofing">
              <h4>Waterproofing</h4>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>




   
    </div>
  )
}

export default MainNavBar
