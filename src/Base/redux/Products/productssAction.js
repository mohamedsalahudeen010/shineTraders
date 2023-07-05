
export const fetchProductsRequest=()=>{
    return{
        type:"FETCH_PRODUCTS_REQUEST"
    }
}

export const fetchProductsSuccess=(data)=>{
    return{
        type:"FETCH_PRODUCTS_SUCCESS",
        payload:data
    }
}

export const fetchProductsFailure=(error)=>{
    return{
        type:"FETCH_PRODUCTS_FAILURE",
        payload:error
    }
}

export const fetchProducts=()=>{
    return async (dispatch)=>{
        dispatch(fetchProductsRequest())
        try {
            const response=await fetch("https://shine-traders-back-end.vercel.app/products",{
                method:"GET"
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchProductsSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchProductsFailure(error))
        }
    }
}


