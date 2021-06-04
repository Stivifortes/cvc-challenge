import React from "react";
import { Container } from "./styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Repositories from "../../pages/Repositories";

export default function Tabs() {
  return (
    <Router>
      <Container>
        <nav>
          <div>
            <div>
              <Link to="/">Repositories</Link>
            </div>
            <div>
              <Link to="/overview">Overview</Link>
            </div>
            <div>
              <Link to="/projects">Projects</Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/overview" component={Repositories} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Repos} />
        </Switch>
      </Container>
    </Router>
  );
}

function Repos() {
  return <h2>Repositories</h2>;
}

// function Overview() {
//   return <h2>Overview</h2>;
// }

function Projects() {
  return <h2>Projects</h2>;
}
