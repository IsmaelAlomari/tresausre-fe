import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Signin from "./component/Signin";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>{" "}
        <Route>
          <Home path="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
