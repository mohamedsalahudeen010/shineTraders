import React, { useContext, useState } from "react";
import "./AdminNavBar.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Dot from "@iconscout/react-unicons/icons/uil-ellipsis-v";
import Collapse from "react-bootstrap/Collapse";
import { useHistory } from "react-router-dom";
import { ShineContext } from "../../../Context";

function AdminNavBar() {
  const history = useHistory();
  const { openCom, setOpenCom, openLand, setOpenLand } =
    useContext(ShineContext);
  const [product, setProduct] = useState(false);

  function logOutFunction(){
    localStorage.removeItem("name-admin");
    localStorage.removeItem("email-admin");
    localStorage.removeItem("token-admin");
    history.push("/")
   }
  return (
    <div>

<div>
      <div className="nav-wrapper-main">
        <div className="nav-left-main">
        <div className='nav-name-main'
            onClick={()=>{history.push("/adminPage")}}>
              Shine Traders
            </div>
          {/* onMouseOver={()=>setProduct(true)}
                     onClick={()=>setProduct(false)} */}
            <div className='user-name-main'
            >
              
                        Hello! {localStorage.getItem("name-admin")} 
                        
            </div>          
        </div>
        <div className="nav-right-main">

        <div className='nav-right-main-list'>
                     <ul>
                     
                     <li className='product-list-main' id='product-list-main'
                     onClick={()=>{history.push("/adminPage")}}>
                          Home
                        </li>

                     <li 
                     onClick={()=>history.push("/adminProduct")}>
                        Products
                        </li>
                        
                        <li onClick={()=>{history.push("/galleryAdmin")}}>
                           Gallery
                        </li>

                        <li onClick={()=>{history.push("/stock")}}>
                          Stock
                          </li>
                          
                          <li onClick={()=>{history.push("/orders")}}>
                          Orders
                        </li>
  
                      <li onClick={()=>logOutFunction()}>
                           Logout
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
            history.push("/adminPage")}}>Home</span></li>
            
            <li><span onClick={()=>{
              setOpenLand(false);
              history.push("/adminProduct")}}>Products</span></li>

            <li><span onClick={()=>{setOpenLand(false);
              history.push("/galleryAdmin")}}>Gallery</span></li>

               <li><span onClick={()=>{setOpenLand(false);
              history.push("/stock")}}>
             Stock
                     </span></li>

                     <li><span onClick={()=>{setOpenLand(false);
              history.push("/orders")}}>
             Orders
                     </span></li>

            <li><span onClick={()=>{setOpenLand(false);
            logOutFunction()}}
            >Log Out</span></li>
            
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
  );
}

export default AdminNavBar;
