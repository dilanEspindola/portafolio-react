import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Link,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ParallaxProvider } from "react-scroll-parallax";

import Inicio from "./components/Inicio/Inicio";
import SobreMi from "./components/SobreMi/SobreMi";
import MisProyectos from "./components/MisProyectos/MisProyectos";
import Contactame from "./components/Contactame/Contactame.jsx";

import "./App.css";

function App() {
  const responsive = useMediaQuery({ query: "(max-width: 690px)" });
  const showMenuIcon = "show-menu";
  const classScroll = "scroll";
  const [menuState, setMenuState] = useState(false);
  const [scroll, setScroll] = useState(0);

  const scrollCondicional = window.scrollY > 0 ? scroll : null;

  const showMenu = () => {
    setMenuState(!menuState);
  };

  const closeMenu = () => {
    setMenuState(!menuState);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  if (responsive) {
    return (
      <>
        <span
          className={showMenuIcon}
          onClick={showMenu}
          style={
            menuState === true ? { display: "none" } : { display: "block" }
          }
        >
          <i className="fas fa-bars"></i>
        </span>
        <Router>
          <header
            className={scrollCondicional ? classScroll : null}
            style={
              menuState === false
                ? { marginLeft: "-500px" }
                : { marginLeft: "0px" }
            }
          >
            <span className="close-menu" onClick={closeMenu}>
              <i className="fas fa-times"></i>
            </span>
            <nav>
              <div className="container-titulo-header">
                <a href="/" className="titulo-header">
                  Dilan Espindola
                </a>
              </div>
              <div className="container-nav-header">
                <ul className="nav-header">
                  <a href="/" className="a-nav">
                    inicio
                  </a>
                  <a href="/sobre-mi" className="a-nav">
                    sobre m??
                  </a>
                  <a href="/mis-proyectos" className="a-nav">
                    mis proyectos
                  </a>
                  <a href="/contactame" className="a-nav">
                    contactame
                  </a>
                </ul>
              </div>
            </nav>
          </header>
          <ParallaxProvider>
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
          </ParallaxProvider>
        </Router>
      </>
    );
  } else {
    return (
      <Router>
        <header>
          <nav>
            <div className="container-titulo-header">
              <Link to="/" className="titulo-header">
                Dilan Espindola
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
                  sobre m??
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

        <ParallaxProvider>
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
        </ParallaxProvider>
      </Router>
    );
  }
}

export default App;
