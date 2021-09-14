import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import productReducer from "./reducers/productReducers";
import cartReducer from "./reducers/cartReducer"


const rootReducer = combineReducers({
    shoes: productReducer,
    cart: cartReducer
})



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store