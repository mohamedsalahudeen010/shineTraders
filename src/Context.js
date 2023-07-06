
import React, { createContext, useState } from 'react'
export const ShineContext=createContext(null)


function Context(props) {
    const [openCom, setOpenCom] = useState(false);
    const [openLand, setOpenLand] = useState(false);
  return (
    <ShineContext.Provider value={{openCom,setOpenCom,openLand,setOpenLand}}>
        {props.children}
    </ShineContext.Provider>
  )
}

export default Context
