

const initialState={
    loading:true,
    stock:[],
    error:""
}

const stockReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_STOCK_REQUEST":return{
            loading:true,
             stock:[],
             error:""
        }
        case "FETCH_STOCK_SUCCESS":return{
            loading:false,
           stock:action.payload,
            error:""
        }
        case "FETCH_STOCK_FAILURE":return{
            loading:false,
            stock:[],
            error:action.payload
        }
        case "ADD_TO_STOCK":
            const alreadyExists = state.stock.filter(
                (item) => item._id === action.payload._id
              );
        
              if (!alreadyExists) {
                return {
                  ...state,
                  stock: state.stock.map((item) =>
                    item._id == action.payload._id ? action.payload : item
                  ),
                };
              } 
              else {
                console.log(state.stock)
                return {
                  ...state,
                  stock: [...state.stock, action.payload],
                };
              }
        
        case "DELETE_ONE_FROM_STOCK":
            return {
              ...state,
              stock: state.stock.filter(
                (item) => item._id !== action.payload._id
              ),
            }

            case "DELETE_ALL_FROM_STOCK":
              return {
                loading:true,
                stock:[],
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


export default stockReducer
