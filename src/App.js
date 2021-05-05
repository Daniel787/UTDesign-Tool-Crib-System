import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Buy from "./Pages/Buy/Buy";
import Rent from "./Pages/Rent/Rent";
import Holds from "./Pages/Holds/Holds";
import Expenses from "./Pages/Expenses/Expenses";
import Inventory from "./Pages/Inventory/Inventory";
import Group from "./Pages/Group/Group";
import Prints from "./Pages/Prints/Prints";
import Nav from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  const [token, setToken] = useState(true);
  // if (!token) {
  //   return (
  //     <Router>
  //       {" "}
  //       <Route exact path="/">
  //         {" "}
  //         <Login setToken={setToken} />{" "}
  //       </Route>
  //     </Router>
  //   );
  // } else {
  return (
    <Router>
      <Nav setToken={setToken} />
      <Switch>
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
        <Route exact path="/prints">
          <Prints />
        </Route>
        <Route exact path="/groups">
          <Group />
        </Route>
        <Route exact path="/">
          <Home setToken={setToken} />
        </Route>
      </Switch>
      {/* <Footer setToken={setToken} /> */}
    </Router>
  );
  // }
}

export default App;
