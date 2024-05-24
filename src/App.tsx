// Global Imports
import { Router, Switch, Route } from "wouter";
import Home from "./pages/Home/Home";
import Dice from "./pages/Dice/Dice";
import Blackjack from "./pages/Blackjack/Blackjack";

// Types

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Home} path="/" />
          <Route component={Dice} path="/dice" />
          <Route component={Blackjack} path="/blackjack" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
