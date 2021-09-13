import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import Products from "../../pages/Products"


const Main = () => {

    return (
        <div className="main">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Cart" exact component={Cart} />
                    <Route path="/Products" component={Products} />

                </Switch></BrowserRouter>
        </div>
    )

}
export default Main