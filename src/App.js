import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './Components/Nav/Nav.js';

function App() {
  return (
     <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/">
     
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
