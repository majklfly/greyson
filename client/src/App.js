import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Background } from "./components/Background";

import { HomeScreen } from "./screens/HomeScreen";
import { DetailScreen } from "./screens/DetailScreen";
import { InsertUserForm } from "./components/InsertUserForm";
import { EditScreen } from "./screens/EditScreen";

function App() {
  return (
    <div className="App">
      <Background />
      <Router>
        <InsertUserForm />
        <Switch>
          <Route path="/edit">
            <EditScreen />
          </Route>
          <Route path="/userDetails">
            <DetailScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
