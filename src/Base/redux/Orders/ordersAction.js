
export const fetchOrderRequest=()=>{
    return{
        type:"FETCH_ORDER_REQUEST"
    }
}

export const fetchOrderSuccess=(data)=>{
    return{
        type:"FETCH_ORDER_SUCCESS",
        payload:data
    }
}

export const fetchOrderFailure=(error)=>{
    return{
        type:"FETCH_ORDER_FAILURE",
        payload:error
    }
}

export const addItemToOrder=(data)=>{
   return {
    type:"ADD_1_ITEM_ORDER",
    payload:data
}
}


export const addToOrder=(data)=>{
   
    return{
        type:"ADD_TO_ORDER",
        payload:data
    }
}


export const deleteOneOrder=(cart)=>{

    return{
        type:"DELETE_ONE_FROM_ORDER",
        payload:cart
    }
}

export const deleteAllOrders=()=>{
    return{
        type:"DELETE_ALL_FROM_ORDER",
        
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Add orders  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const fetchAddOrder=(product,varient,quantity)=>{
    const order={
        userMail:localStorage.getItem("email"),
         productName:product.name,
         productImage:product.image,
         productVarient:varient,
         productQuantity:quantity,
         productPricePerItem:varient*product.prize,
        totalPrice:varient*product.prize*quantity
       
    }
    return async (dispatch)=>{
        dispatch(addToOrder(order))
        
        try {
            const response=await fetch(`https://shine-traders-back-end.vercel.app/order`,{
                method:"POST",
                body:JSON.stringify(order),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log("POST",data)
            localStorage.setItem("orders",JSON.stringify(data.cart))
        } catch (error) {
            console.log(error)
           
        }
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Update Items To Cart >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

export const addOneToOrder=(product,varient,quantity)=>{
    const orders={
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
        dispatch(addToOrder(orders))
        
        try {
            const response=await fetch(`https://shine-traders-back-end.vercel.app/order/${id}`,{
                method:"PUT",
                body:JSON.stringify(orders),
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

export const fetchOrders=(email)=>{
    return async (dispatch)=>{
        dispatch(fetchOrderRequest())
        
        try {
            const response=await fetch(`https://shine-traders-back-end.vercel.app/order?userMail=${email}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchOrderSuccess(data))
          
        } 
        catch (error) {
            console.log(error)
            dispatch(fetchOrderFailure(error))
        }
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Delete Items In Cart >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const deleteOneItemOrder=(product)=>{
    
    const id=product._id
    return async (dispatch)=>{
        try {
            dispatch(deleteOneOrder(product))
            const response=await fetch(`https://shine-traders-back-end.vercel.app/order/${id}`,{
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
export const deleteWholeOrders=()=>{
    
    
    return async (dispatch)=>{
        try {
           dispatch(deleteAllOrders())
            const response=await fetch(`https://shine-traders-back-end.vercel.app/order`,{
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

