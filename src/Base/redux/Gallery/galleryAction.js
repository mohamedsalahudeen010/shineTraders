
export const fetchGalleryRequest=()=>{
    return{
        type:"FETCH_GALLERY_REQUEST"
    }
}

export const fetchGallerySuccess=(data)=>{
    return{
        type:"FETCH_GALLERY_SUCCESS",
        payload:data
    }
}

export const fetchGalleryFailure=(error)=>{
    return{
        type:"FETCH_GALLERY_FAILURE",
        payload:error
    }
}

export const addGallery=(data)=>{
   
    return{
        type:"ADD_GALLERY",
        payload:data
    }
}


export const deleteOneGallery=(product)=>{

    return{
        type:"DELETE_ONE_FROM_GALLERY",
        payload:product
    }
}

export const deleteAllGallery=()=>{
    return{
        type:"DELETE_ALL_FROM_GALLERY",
        
    }
}



export const fetchProducts=()=>{
    return async (dispatch)=>{
        dispatch(fetchGalleryRequest())
        try {
            const response=await fetch("https://shine-traders-back-end.vercel.app/gallery",{
                method:"GET"
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchGallerySuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchGalleryFailure(error))
        }
    }
}


export const fetchAddToStock=(gallery)=>{
   
    
    return async (dispatch)=>{
        dispatch(addGallery(gallery))
        
        try {
            const response=await fetch(`https://shine-traders-back-end.vercel.app/gallery`,{
                method:"POST",
                body:JSON.stringify(gallery),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-admin")
                 }
            })
            const data=await response.json()
            console.log("POST",data)
          
        } catch (error) {
            console.log(error)
           
        }
    }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Delete Gallery >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const deleteOneFromGallery=(product)=>{
    
    const id=product._id
    return async (dispatch)=>{
        try {
            dispatch(deleteOneGallery(product))
            const response=await fetch(`https://shine-traders-back-end.vercel.app/gallery/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-admin")
                 }
            })
            const data=await response.json()
            console.log("DELETE",data)
            
        } catch (error) {
            console.log(error)
           
        }
    }
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Delete Items In Cart >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const deleteWholeGallery=()=>{
    
    
    return async (dispatch)=>{
        try {
           dispatch(deleteAllGallery())
            const response=await fetch(`https://shine-traders-back-end.vercel.app/gallery`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-admin")
                 }
            })
            const data=await response.json()
            
            console.log(data)
        } catch (error) {
            console.log(error)
           
        }
    }
}