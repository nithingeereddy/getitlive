import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import Request from "./Request";

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="/login">
        <Header />
        <Login />
      </Route>
      <Route path="/checkout">
        <Header />
        <Request />
      </Route>
      <Route path="/">
       <Header />
       <Home />
       
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
