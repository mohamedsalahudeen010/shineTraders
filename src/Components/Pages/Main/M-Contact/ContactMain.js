import React, { useState } from 'react'
import "./ContactMain.css"
import  { useRef } from 'react';

import emailjs from '@emailjs/browser';
import MainBase from '../../../../Base/MBase/MainBase';

function ContactMain() {
  const form = useRef();
  const[done,setDone]=useState(false)
  const [enterMessage,setEnterMessage]=useState(false)
  const [enterName,setEnterName]=useState(false)
  const [enterEmail,setEnterEmail]=useState(false)
const [enterPhoneNumber,setPhoneNumber]=useState(false)

  const[nameAlert,setNameAlert]=useState()
  const[emailAlert,setEmailAlert]=useState()
  const[messageAlert,setMessageAlert]=useState()
  const[phNumberAlert,setPhNumberAlert]=useState()

  const sendEmail = (e) => {
    e.preventDefault();
    setDone(false)
    setNameAlert(false)
    setEmailAlert(false)
    setMessageAlert(false)
    setPhNumberAlert(false)
  
    if(enterMessage  && enterName && enterEmail && enterPhoneNumber ){
      emailjs.sendForm("service_l4ucxv7","template_i5r0wrh", form.current, 'FrcuSG3KdmMocTtV4')
      .then((result) => {
          console.log(result.text);
          setDone(true)
          
      }, (error) => {
          console.log(error.text);
      });
    }
    else if(!enterName){
      setNameAlert(true)
     
    }
    else if(!enterEmail){
      setEmailAlert(true)
     
    }
    else if(!enterPhoneNumber){
      
      setPhNumberAlert(true)
      
    }
    else if(!enterMessage){
      
      setMessageAlert(true)
      
    }

    
  };
  return (
    <MainBase>
     <div className='contact' id='contacts'>
        <span>Get in Touch</span>
        <span>Looking for something? Drop your query and we will contact you.</span>
           
            <div>
              <form ref={form} onSubmit={sendEmail} className='form'>
            
            <div>
            <input className='contact-name' type="text" 
            name="user_name" placeholder='Enter Your Name' 
            onChange={(e)=>setEnterName(e.target.value,setDone(false))}></input>
            </div>
            {nameAlert?<span className='contact-alert'>Please Enter a Name</span>:""}

            <div>
              <input type="email" name="user_email" 
              className='contact-email' placeholder='Enter Your Email'
              onChange={(e)=>setEnterEmail(e.target.value)}></input>
              </div>   
              {emailAlert?<span className='contact-alert'>Please Enter a Mail</span>:""} 

              <div>
              <input type='number' name='phoneNumber'
              className='contact-phoneNumber' placeholder='Enter Your Phone Number'
              onChange={(e)=>setPhoneNumber(e.target.value)}></input>  
              </div>
              {phNumberAlert?<span className='contact-alert'>Please Enter Your Phone Number</span>:""}
              <div>
              <textarea name="message" rows="4" cols="30" 
              className='contact-textbox' placeholder='Enter Message' 
              onChange={(e)=>setEnterMessage(e.target.value)}
              ></textarea>
              </div>
              {messageAlert?<span className='contact-alert'>Please Enter a Message</span>:""}
            
              <div>
              <button className='contact-btn' type='submit'>Submit</button>
              </div>
              <div className='contact-alert-main'>
              {done?<span className='contact-success'>Thank you for contacting Us, we will reply Shortly</span>:""}
             
             
               </div>
              </form>
            </div>
             
              

        </div>
        </MainBase>
  )
}

export default ContactMain