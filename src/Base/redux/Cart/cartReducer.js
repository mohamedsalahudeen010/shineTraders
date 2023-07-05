

const initialState={
    loading:true,
    cart:[],
    error:""
}

const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_CART_REQUEST":return{
            loading:true,
             cart:[],
             error:""
        }
        case "FETCH_CART_SUCCESS":return{
            loading:false,
            cart:action.payload,
            error:""
        }
        case "FETCH_CART_FAILURE":return{
            loading:false,
            cart:[],
            error:action.payload
        }
        case "ADD_TO_CART":
            const alreadyExists = state.cart.filter(
                (item) => item._id === action.payload._id
              );
        
              if (!alreadyExists) {
                return {
                  ...state,
                  cart: state.cart.map((item) =>
                    item._id == action.payload._id ? action.payload : item
                  ),
                };
              } 
              else {
                console.log(state.cart)
                return {
                  ...state,
                  cart: [...state.cart, action.payload],
                };
              }
        
        case "DELETE_ONE_FROM_CART":
            return {
              ...state,
              cart: state.cart.filter(
                (item) => item._id !== action.payload._id
              ),
            }

            case "DELETE_ALL_FROM_CART":
              return {
                loading:true,
                cart:[],
                error:""
                
              }
            // case "ADD_1_ITEM":
            //     const data= state.cart.filter(
            //         (item) => item._id === action.payload._id
            //       )
            //       console.log("ADD_1_ITEM",data)
            //     return{
            //   ...state.cart,state.cart.productQuantity:data.productQuantity+1
                  
            //     }
           
        default : return state
    }
}


export default cartReducer
