import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './Components/Nav/Nav.js';

function App() {
  return (
     <Router>
        <Switch>
          <Route path="/">
 
          </Route>
          <Route path="/home"> 
          <Nav/> 
          </Route>
        </Switch>
    </Router>
    );
}

export default App;
