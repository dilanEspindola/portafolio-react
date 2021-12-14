import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import './components/style.css'

import Inicio from "./components/Inicio/Inicio"
import MisProyectos from "./components/MisProyectos/MisProyectos";
import SobreMi from "./components/SobreMi/SobreMi";
import Contactame from "./components/Contactame/Contactame";

function App() {

  let classScroll = "scroll";
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  });

  const condicional = window.scrollY > 50 ? scroll : null;

  return (
    <>
      <Router>
        <header className={condicional ? classScroll : null}>
          <nav >
            <Link to="/" className="titulo-header">portafolio web</Link>
            <ul className="nav-header">
              <NavLink exact to="/" className="a-nav" activeClassName="active">
                inicio
              </NavLink>
              <NavLink exact to="/sobre-mi" className="a-nav" activeClassName="active">
                sobre mí
              </NavLink>
              <NavLink exact to="/mis-proyectos" className="a-nav" activeClassName="active">
                mis proyectos
              </NavLink>
              <NavLink exact to="/contactame" className="a-nav" activeClassName="active">
                contactame
              </NavLink>
            </ul>
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