import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/repos">
          <Users />
        </Route>
        <Route path="/projects">
          <About />
        </Route>
        <Route path="/packages">
          <Packages />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function Packages() {
  return <h2>Packages</h2>;
}
