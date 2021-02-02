import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomeScreen } from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
