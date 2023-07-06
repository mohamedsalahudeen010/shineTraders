import React from 'react'
import LocationSymb from "@iconscout/react-unicons/icons/uil-location-point"
import PhoneSymb from "@iconscout/react-unicons/icons/uil-phone"
import WorkingHoursSymb from "@iconscout/react-unicons/icons/uil-calendar-alt"
import "./Locate.css"
function Locate() {
  return (
    <div className='locatePage-land row'>
    <div className='col-md-6 locate-left-land'>
        <div>
        <span className='locatePage-land-name'>Shine Traders</span>
        <span className='locatePage-land-address'><LocationSymb size={"2rem"} color={"black"}/> {"  "}
        <span>Sarabja Complex,</span> <span>Near Kumarayya kovil</span></span>
        <span className='locatePage-land-phone'><PhoneSymb size={"2rem"} color={"black"}/>{"  "}
        <span> {"   "}
          :  8056323664
        , 8973524898
        </span>
        </span>
        <div className='locatePage-land-workingDays'>
          <span>
          <WorkingHoursSymb size={"2rem"} color={"black"}/>{"  "}
        <span>Hours of operation : 
Open for all 7 days of a week </span> 
          </span>
<span className='locatePage-land-workingHours1'>Monday to Saturday : 8 am to 9.30pm</span>
<span className='locatePage-land-workingHours2'>Sunday : 8 am to 2.00pm</span></div>
</div>
    </div>
    <div className='col-md-6 locate-right-land'>
            <div className='location-land'>
            <iframe 
            className='location-land-iframe'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.6140845692792!2d78.84404379130675!3d9.359993252494492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0197811b97d25d%3A0xa976da17c462cf47!2sShine%20Traders!5e0!3m2!1sen!2sin!4v1685650847046!5m2!1sen!2sin" 
            width="100%" height="450" 
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </div>
    </div>
        </div>
  )
}

export default Locate