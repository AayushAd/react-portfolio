import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SmoothScrollbar from "./components/SmoothScrollbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
      <SmoothScrollbar>
        <Switch>
          <Route path="/About">
            <About />
          </Route>

          <Route path="/Projects">
            <Projects />
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>

          <Route path="/">
          <Home />
          </Route>
        </Switch>
        <Footer />
      </SmoothScrollbar>
  

      </Router>
    </>
  );
}
