import React from 'react';
import './App.css';
import data from "../src/shoes.json";
import Products from './components/Products';


/*import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { useEffect } from 'react';
import { intializeShoes } from './store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';*/

/*const App = () => {
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
}*/

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/"> React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar"> Cart Items</div>

          </div>
        </main>
        <footer>
          All rights reserved
        </footer>


      </div>
    )
  }
}

export default App
