import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './Components/Nav/Nav.js';
import Home from './Pages/Home'
import Login from './Pages/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Nav />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
