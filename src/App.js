import './App.css';

import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { useEffect } from 'react';
import { intializeShoes } from './store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(intializeShoes());
  }, { dispatch })

  const cartItemCount = useSelector((state) =>
    state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  );

  return (
    <div className="App">
      <Header cartItemCount={cartItemCount} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
