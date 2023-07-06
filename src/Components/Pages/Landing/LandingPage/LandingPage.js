import React from 'react'
import "./LandingPage.css"
import Carousel from 'react-bootstrap/Carousel';
import { pics } from './CorousalData';
import LandingBase from '../../../../Base/LBase/LandingBase';



function LandingPage() {
 
  return (
    
    <LandingBase>

      <div className='landingPage'>
      <div className='carousel-land'>
        <Carousel >
        { pics.map((img,idx)=>(
      <Carousel.Item key={idx} >
        <img
          className="d-block  "
          src={img.image}
          alt="First slide"
        style={{width:"100vw",height:"110vh"}}></img>
        <Carousel.Caption style={{top:img.top,left:img.left}}>
          <h3 className='carousel-title-land'
          style={{color:img.color}}>{img.title}</h3>
          <p style={{color:img.color1}} className='carousel-description-land'>{img.description}</p>
        </Carousel.Caption>
        
      </Carousel.Item>
      )) }
   
    </Carousel>
    </div>

    <div className='row'>
      <div className='col'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AX7-BGXFTCg" title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div className='col'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/lZMpbWLcLAY" title="YouTube video player" frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      
    </div>

    <div className='row'>
      <div className='col'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qZotvuziHmw" title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>

      <div className='col'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FsrHHH6wfbA" title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      
    </div>

    
       </div>
       
    </LandingBase>
  )
}

export default LandingPage