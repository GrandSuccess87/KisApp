import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ResourcesPage from "./pages/Resources";

const App = () => (
  <Router>

  <div>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resources" component={ResourcesPage} />
    </Switch>
  </div>
</Router>
);

export default App;
