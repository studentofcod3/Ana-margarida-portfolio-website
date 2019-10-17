import React from "react";
import "./App.scss";
import Navigation from "./layout/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Design from "./pages/design";
import DesignReverse from "./pages/designReverse";
import Illustration from "./pages/illustration";
import Photography from "./pages/photography";
import Project1 from "./projects/Project1";

function App() {
  return (
    <Router>
      <div className='App'>
        <div id='pageContainer'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/design' component={Design} />
            <Route exact path='/design2' component={DesignReverse} />
            <Route exact path='/design/project1' component={Project1} />
            <Route exact path='/illustration' component={Illustration} />
            <Route exact path='/photography' component={Photography} />
          </Switch>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
