import React from 'react';
import './App.css';
import data from "../src/shoes.json";
import Products from './components/Products';
import Filter from './components/Filter';


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

  sortProducts = (event) => {
    const sort = event.target.value

    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest" ? a.price > b.price
            ? 1
            : -1
            : sort === "highest"
              ? a.price < b.price
                ? 1
                : -1
              : a._id > b._id
                ? 1
                : -1
        )
    }));
  };

  filterProducts = (event) => {
    console.log(event.target.value)
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products })
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter
          ((product) => product.availableSizes.indexOf(event.target.value) >= 0)
      })
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
              <Filter count={this.state.products.length} size={this.state.size} sort={this.state.sort}

                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}

              />
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
