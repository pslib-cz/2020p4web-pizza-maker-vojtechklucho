
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
    {category: "hnus", name: "ananas", visible: true},
    {category: "hnus", name: "žampiony", visible: true},

    {category: "salámy", name: "šunka", visible: true},
    {category: "salámy", name: "paprikáš", visible: true},
    {category: "salámy", name: "poličan", visible: true},

    {category: "základ", name: "sýrový", visible: true},
    {category: "základ", name: "kečupový", visible: true},

    {category: "okraje", name: "klasické", visible: true},
    {category: "okraje", name: "plněné", visible: true},

    {category: "koření", name: "sůl", visible: true},
    {category: "koření", name: "pepř", visible: true},
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
