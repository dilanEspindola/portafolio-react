import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Link,
} from "react-router-dom";
import { useState, useEffect } from "react";

// compoenents
import Inicio from "./Inicio/Inicio";
import SobreMi from "./SobreMi/SobreMi";
import MisProyectos from "./MisProyectos/MisProyectos";
import Contactame from "./Contactame/Contactame";

// styles
import "./header.css";

const Header = (props) => {
  const { responsive } = props;
  const showMenuIcon = "show-menu";
  const [menuState, setMenuState] = useState(true);
  const [scroll, setScroll] = useState(0);
  const classScroll = "scroll";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  const scrollCondicional = window.scrollY > 0 ? scroll : null;

  const showMenu = () => {
    setMenuState(!menuState);
  };

  const closeMenu = () => {
    setMenuState(!menuState);
  };

  if (responsive) {
    return (
      <>
        <span
          className={showMenuIcon}
          onClick={showMenu}
          style={menuState === false ? { display: "none" } : null}
        >
          <i className="fas fa-bars"></i>
        </span>
        <Router>
          <header
            className={scrollCondicional ? classScroll : null}
            style={
              menuState === true
                ? { marginLeft: "-500px" }
                : { marginLeft: "0" }
            }
          >
            <span className="close-menu" onClick={closeMenu}>
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
  } else {
    return (
      <Router>
        <header>
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
    );
  }
};

export default Header;
