import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import productsReducer from './reducers/productReducers';

const initialState = {}

const rootReducer = combineReducers({
    products: productsReducer
})



const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)));

export default store