
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import Ingredients from "./components/Ingredients";
import Calzone from "./components/Calzone";
import Pizza from "./components/Pizza";
import Order from "./components/Order";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="App">
      <Router>
          <Navigation/>
          <h1>Order pizza</h1>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/order/pizza" component={Pizza} />
            <Route exact path="/order/calzone" component={Calzone} />
            <Route exact path="/ingredients" component={Ingredients} />
            <Route path="/" component={NotFound}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
