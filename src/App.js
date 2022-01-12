import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import "./components/style.css";

import Inicio from "./components/Inicio/Inicio";
import MisProyectos from "./components/MisProyectos/MisProyectos";
import SobreMi from "./components/SobreMi/SobreMi";
import Contactame from "./components/Contactame/Contactame";

function App() {
  let classScroll = "scroll";
  let classIconBar = "icon-bar";
  let hideIconBar = "hide";
  let classIconBarClose = "icon-bar-close";

  const [scroll, setScroll] = useState(0);
  const [stateOpen, setStateOpen] = useState(true);
  const [stateClose, setStateClose] = useState(true);

  const condicional = window.scrollY > 80 ? scroll : null;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    window.addEventListener("click", () => {
      setStateOpen(!stateOpen);
      setStateClose(!stateClose);
    });
  });

  return (
    <>
      <Router>
        <header
          className={condicional ? classScroll : null}
          style={
            stateOpen === false
              ? { marginLeft: 410 }
              : stateClose === false || stateClose === true
              ? { marginLeft: 0 }
              : null
          }
        >
          <span className="icon-bar" style={{ marginLeft: 400 }}>
            <i className="fas fa-bars"></i>
          </span>
          <span className={classIconBarClose}>
            <i className="fas fa-times"></i>
          </span>
          <nav>
            <div className="container-titulo-header">
              <Link to="/" className="titulo-header">
                portafolio web
              </Link>
            </div>
            <div className="container-nav-header">
              <ul className="nav-header">
                <NavLink
                  exact
                  to="/"
                  className="a-nav"
                  activeClassName="active"
                >
                  inicio
                </NavLink>
                <NavLink
                  exact
                  to="/sobre-mi"
                  className="a-nav"
                  activeClassName="active"
                >
                  sobre mí
                </NavLink>
                <NavLink
                  exact
                  to="/mis-proyectos"
                  className="a-nav"
                  activeClassName="active"
                >
                  mis proyectos
                </NavLink>
                <NavLink
                  exact
                  to="/contactame"
                  className="a-nav"
                  activeClassName="active"
                >
                  contactame
                </NavLink>
              </ul>
            </div>
          </nav>
        </header>

        <Switch>
          <Route path="/sobre-mi">
            <SobreMi />
          </Route>
          <Route path="/mis-proyectos">
            <MisProyectos />
          </Route>
          <Route path="/contactame">
            <Contactame />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
