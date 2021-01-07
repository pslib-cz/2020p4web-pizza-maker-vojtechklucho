import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import Ingredients from "./components/Ingredients";
import Calzone from "./components/Calzone";
import Pizza from "./components/Pizza";
import Order from "./components/Order";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App">
      <Router>
          <h1>Order pizza</h1>
          <Switch>
            <Route exact path="/order/pizza" component={Pizza} />
            <Route exact path="/order/calzone" component={Calzone} />
            <Route exact path="/ingredients" component={Ingredients} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
