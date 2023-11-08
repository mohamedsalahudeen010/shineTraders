import {createStore} from "redux"

import { combineReducers } from "redux"
import { applyMiddleware } from "redux"
import logger from "redux-logger"
import {composeWithDevTools} from "redux-devtools-extension"
import userReducer from "./users/usersReducer"
import thunk from "redux-thunk"
import productReducer from "./Products/productsReducer"
import cartReducer from "./Cart/cartReducer"
import stockReducer from "./Stock/stockReducer"
import orderReducer from "./Orders/ordersReducer"
import galleryReducer from "./Gallery/galleryReducer"

const reducer=combineReducers({
user:userReducer,
products:productReducer,
cartItems:cartReducer,
stock:stockReducer,
order:orderReducer,
gallery:galleryReducer
})

 const store = createStore(reducer,
   composeWithDevTools(applyMiddleware(logger,thunk)) )

 export default store
