
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import ChoosenFood from "./components/ChoosenFood";
import Order from "./components/Order";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import {useState} from "react";
import {StateContext, SetStateContext} from "./providers/Provider";

const initialState = {
  ingredients: [
    {category: "hnus", name: "ananas"},
    {category: "hnus", name: "žampiony"},

    {category: "salámy", name: "šunka"},
    {category: "salámy", name: "paprikáš"},
    {category: "salámy", name: "poličan"},

    {category: "základ", name: "sýrový"},
    {category: "základ", name: "kečupový"},

    {category: "okraje", name: "klasické"},
    {category: "okraje", name: "plněné"},
  ],
  order:
  {
    food: "",
    ingredients: []
  }
}

function App() {
  const [state, setState] = useState(initialState);
  return (
    <div className="App">
      <StateContext.Provider value={state}>
        <SetStateContext.Provider value={setState}>
          <Router>
              <Navigation/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/order/pizza" component={Order} />
                <Route exact path="/order/calzone" component={Order} />
                <Route exact path="/ingredients" component={Ingredients} />
                <Route path="/" component={NotFound}/>
              </Switch>
          </Router>
        </SetStateContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
