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

const App = () => {

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
