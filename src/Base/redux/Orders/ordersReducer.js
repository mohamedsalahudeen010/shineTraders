

const initialState={
    loading:true,
    order:[],
    error:""
}

const orderReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_ORDER_REQUEST":return{
            loading:true,
            order:[],
             error:""
        }
        case "FETCH_ORDER_SUCCESS":return{
            loading:false,
            order:action.payload,
            error:""
        }
        case "FETCH_ORDER_FAILURE":return{
            loading:false,
            order:[],
            error:action.payload
        }
        case "ADD_TO_ORDER":
            const alreadyExists = state.order.filter(
                (item) => item._id === action.payload._id
              );
        
              if (!alreadyExists) {
                return {
                  ...state,
                  order: state.order.map((item) =>
                    item._id === action.payload._id ? action.payload : item
                  ),
                };
              } 
              else {
                console.log(state.order)
                return {
                  ...state,
                  order: [...state.order, action.payload],
                };
              }
        
        case "DELETE_ONE_FROM_ORDER":
            return {
              ...state,
              order: state.order.filter(
                (item) => item._id !== action.payload._id
              ),
            }

            case "DELETE_ALL_FROM_ORDER":
              return {
                loading:true,
                order:[],
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


export default orderReducer
