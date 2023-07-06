import React, { useEffect, useState } from 'react'
import "./MainPage.css"
import Carousel from 'react-bootstrap/Carousel';
import { pics } from './CorousalData';
import MainBase from '../../../../Base/MBase/MainBase';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../../../../Base/redux/Cart/cartAction';
import { useSelector } from 'react-redux';

function MainPage() {

  const dispatch=useDispatch()

  const [userEmail,setUserEmail]=useState(localStorage.getItem("email"))

  

  useEffect(()=>{
    dispatch(fetchCart(userEmail))
  },[userEmail])
 
  return (
    
    
      <MainBase>

      <div className='mainPage'>
      
      
      <div className='carousel-main'>
        <Carousel >
        { pics.map((img,idx)=>(
      <Carousel.Item key={idx} style={{width:"100%"}}>
        <img
          className="d-block  "
          src={img.image}
          alt="First slide"
        style={{height:"110vh",width:"100%",marginLeft:"1rem"}}></img>
        <Carousel.Caption style={{top:img.top,left:img.left}}>
          <h3 style={{color:img.color}}
          className='carousel-title-main'>{img.title}</h3>
          <p style={{color:img.color1}}
          className='carousel-description-main'>{img.description}</p>
        </Carousel.Caption>
        
      </Carousel.Item>
      )) }
   
    </Carousel>
    </div>
   
       </div>
       </MainBase>  
    
  )
}

export default MainPage