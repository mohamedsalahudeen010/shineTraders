
export const fetchCartRequest=()=>{
    return{
        type:"FETCH_CART_REQUEST"
    }
}

export const fetchCartSuccess=(data)=>{
    return{
        type:"FETCH_CART_SUCCESS",
        payload:data
    }
}

export const fetchCartFailure=(error)=>{
    return{
        type:"FETCH_CART_FAILURE",
        payload:error
    }
}

export const addItemToCart=(data)=>{
   return {
    type:"ADD_1_ITEM",
    payload:data
}
}


export const addToCart=(data)=>{
   
    return{
        type:"ADD_TO_CART",
        payload:data
    }
}


export const deleteOneCart=(cart)=>{

    return{
        type:"DELETE_ONE_FROM_CART",
        payload:cart
    }
}

export const deleteAllCart=()=>{
    return{
        type:"DELETE_ALL_FROM_CART",
        
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Add Items To Cart >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const fetchAddToCart=(product,varient,quantity)=>{
    const cartItems={
        userMail:localStorage.getItem("email"),
         productName:product.name,
         productImage:product.image,
         productVarient:varient,
         productQuantity:quantity,
         productPricePerItem:varient*product.prize,
        totalPrice:varient*product.prize*quantity
       
    }
    return async (dispatch)=>{
        dispatch(addToCart(cartItems))
        
        try {
            const response=await fetch(`https://shine-traders-back-end.vercel.app/cart`,{
                method:"POST",
                body:JSON.stringify(cartItems),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log("POST",data)
            localStorage.setItem("cartItems",JSON.stringify(data.cart))
        } catch (error) {
            console.log(error)
           
        }
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Update Items To Cart >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

export const addOneToCart=(product,varient,quantity)=>{
    const cartItems={
        userMail:localStorage.getItem("email"),
         productName:product.name,
         productImage:product.image,
         productVarient:varient,
         productQuantity:quantity+1,
         productPricePerItem:varient*product.prize,
        totalPrice:varient*product.prize*quantity
       
    }
    const id=product._id
    return async (dispatch)=>{
        dispatch(addToCart(cartItems))
        
        try {
            const response=await fetch(`https://shine-traders-back-end.vercel.app/cart/${id}`,{
                method:"PUT",
                body:JSON.stringify(cartItems),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log("PUT",data)
            localStorage.setItem("cartItems",JSON.stringify(data.cart))
        } catch (error) {
            console.log(error)
           
        }
    }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Fetch Cart Items >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

export const fetchCart=(email)=>{
    return async (dispatch)=>{
        dispatch(fetchCartRequest())
        
        try {
            const response=await fetch(`https://shine-traders-back-end.vercel.app/cart?userMail=${email}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchCartSuccess(data))
          
        } 
        catch (error) {
            console.log(error)
            dispatch(fetchCartFailure(error))
        }
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Delete Items In Cart >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const deleteOneItemCart=(product)=>{
    
    const id=product._id
    return async (dispatch)=>{
        try {
            dispatch(deleteOneCart(product))
            const response=await fetch(`https://shine-traders-back-end.vercel.app/cart/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
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
export const deleteWholeCart=()=>{
    
    
    return async (dispatch)=>{
        try {
           dispatch(deleteAllCart())
            const response=await fetch(`https://shine-traders-back-end.vercel.app/cart`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            
            console.log(data)
        } catch (error) {
            console.log(error)
           
        }
    }
}
