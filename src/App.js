import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Buy from "./Pages/Buy/Buy";
import Rent from "./Pages/Rent/Rent";
import Holds from "./Pages/Holds/Holds";
import Expenses from "./Pages/Expenses/Expenses";
import Inventory from "./Pages/Inventory/Inventory";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/buy">
          <Buy />
        </Route>
        <Route exact path="/rent">
          <Rent />
        </Route>
        <Route exact path="/holds">
          <Holds />
        </Route>
        <Route exact path="/expenses">
          <Expenses />
        </Route>
        <Route exact path="/inventory">
          <Inventory />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
