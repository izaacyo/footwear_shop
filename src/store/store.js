import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import { cartReducer } from './reducers/cartReducers';
import { productsReducer } from './reducers/productReducers';

const initialState = {}

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})


const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)));

export default store