
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import ChoosenFood from "./components/ChoosenFood";
import Order from "./components/Order";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

const initialState = {
  
}

function App() {
  return (
    <div className="App">
      <Router>
          <Navigation/>
          <h1>Pizza Maker</h1>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/order/pizza" component={Order} />
            <Route exact path="/order/calzone" component={Order} />
            <Route exact path="/ingredients" component={Ingredients} />
            <Route path="/" component={NotFound}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
