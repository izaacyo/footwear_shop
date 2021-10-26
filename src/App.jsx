import React, {useEffect} from 'react'
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Success from "./pages/Success";
import Body from "./components/body/Body"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchLogin, fetchUser, dispatchGetUser } from './redux/actions/authActions';

const App = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  //store the token 
  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        // res is the access_token after sign in 
        const res = await axios.post('/user/refresh_token', null)
    dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  // not saving the token if the isLogged is false

  useEffect(() => {
    //keeps the user logged in 
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

      //get all user data
        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch]) 

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Body/>
      </Switch>
    </Router>
  );
};

export default App;
