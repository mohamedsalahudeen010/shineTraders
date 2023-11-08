

const initialState={
    loading:true,
    gallery:[],
    error:""
}

const galleryReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_GALLERY_REQUEST":return{
            loading:true,
             gallery:[],
             error:""
        }
        case "FETCH_GALLERY_SUCCESS":return{
            loading:false,
            gallery:action.payload,
            error:""
        }
        case "FETCH_GALLERY_FAILURE":return{
            loading:false,
            gallery:[],
            error:action.payload
        }
        case "ADD_TO_GALLERY":
            const alreadyExists = state.gallery.filter(
                (item) => item._id === action.payload._id
              );
        
              if (!alreadyExists) {
                console.log(" already exist")
                return {
                  
                  ...state,
                  gallery: state.gallery.map((gallery) =>
                  gallery._id == action.payload._id ? action.payload : gallery
                  ),
                };
              } 
              else {
                console.log("Product Added")
                console.log(state.gallery)
                return {
                  ...state,
                  gallery: [...state.gallery, action.payload],
                };
              }
        
        case "DELETE_ONE_FROM_GALLERY":
            return {
              ...state,
              gallery: state.gallery.filter(
                (item) => item._id !== action.payload._id
              ),
            }

            case "DELETE_ALL_FROM_GALLERY":
              return {
                loading:true,
                gallery:[],
                error:""
                
              }
        default : return state
    }
}


export default galleryReducer
