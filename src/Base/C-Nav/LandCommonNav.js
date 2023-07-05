import React, { useContext, useState } from "react";
import "./CommonNav.css"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Dot from "@iconscout/react-unicons/icons/uil-bars"
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { useHistory } from "react-router-dom";
import { ShineContext } from "../../Context";


// import Dot from "@iconscout/react-unicons/icons/uil-ellipsis-h"

function LandCommonNav() {
//  const[openCom,setOpenCom]=useState(false)
  const {openCom,setOpenCom,openLand,setOpenLand}=useContext(ShineContext)
  const history=useHistory()
  return (
    <div className="common-Nav">
        <div className="common-nav-left">
        <div className='common-nav-list'>
        <ul>
        <li className="reachUs">Reach us on</li>
                <li><Insta size={"1.5rem"} color={"black"}/></li>
                <li><Facebook size={"1.5rem"} color={"black"}/></li>
                <li><Twitter size={"1.5rem"} color={"black"}/></li>
                <li onClick={()=>{history.push("/adminLogin")}}>Admin</li>
                
            </ul>
            </div>
        </div>
        <div className="common-nav-right">
        <div className='common-nav-list'>
            <ul>
                <li 
                onClick={()=>{history.push("/contactLand")}}>Get in Touch</li>
                <li>About Us</li>
                <li onClick={()=>{history.push("/locateLand")}}>Locate Us</li>
            </ul>
            </div>


            <div className="lable-div">
              <input type="checkbox" id="check-common" name="" value="" style={{display:"none"}}></input>
              <label htmlFor="check" className="check-label-common"
              onClick={()=>setOpenLand(false,setOpenCom(!openCom))}
              aria-controls="example-collapse-text"
        aria-expanded={openCom}
        style={openCom?{transform:"rotate(90deg)",transition: 'all 0.6s'}:{transform:"rotate(0deg)",transition:'all 0.6s'}}
        ><Dot size={"2rem"} color={"black"}
              /></label>
            </div>



            <div style={{ minHeight: '150px' }} className="common-list">
        <Collapse in={openCom} dimension="width" className="common-list-1">
          <div id="example-collapse-text">
            <Card body style={{ minWidth: '200px', border:"none",backgroundColor:"grey",textAlign:"left"}}>
              <ul style={{width:"100%"}} >
                <li style={{width:"100%"}}
                >
                  <span className="com-list" style={{width:"100%",color:"black"}}
                  onClick={()=>{history.push("/contactLand")}}>Get in Touch</span></li>

                <li><span className="com-list" style={{width:"100%",color:"black"}}>About Us</span></li>
                <li
                onClick={()=>{history.push("/locateLand")}}><span className="com-list"
                style={{color:"gold"}}>Locate Us</span></li>
              </ul>
            </Card>
          </div>
        </Collapse>
      </div>
        </div>
    </div>
  )
}

export default LandCommonNav