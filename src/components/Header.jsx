import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import './style.css'

import Inicio from "./Inicio/Inicio"
import MisProyectos from "./MisProyectos/MisProyectos";
import SobreMi from "./SobreMi/SobreMi";
import Contactame from "./Contactame/Contactame";

function Header() {

    const header = useRef();
    let scroll;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
        });
    }, [])        

    return(
        <>
            <Router>
            <header ref={header}>
                <nav>
                <Link to="/" className="titulo-header">portafolio web</Link>                
                    <ul className="nav-header">
                        <NavLink exact to="/" className="a-nav" activeClassName="active">
                            Inicio
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

export default Header;