import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
