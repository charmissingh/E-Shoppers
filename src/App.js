import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Register from './pages/Register'
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/signin">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
