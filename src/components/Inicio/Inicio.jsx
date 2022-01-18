import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

import Footer from "../Footer";
import SeccionInicio from "./SeccionInicio";
import "./inicio.css";

function Inicio() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Bienvenido a mi portafolio web.",
        "Mi nombre es Dilan Enrique Espindola Gil.",
        "Aquí puedes algunos proyectos web hechos por mí.",
        "...",
      ],
      startDelay: 500,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 200,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="inicio">
        <span ref={el} className="texto-automatico"></span>
        <div className="container-contactame">
          <a href="/contactame" className="contactame-btn">
            Contáctame
          </a>
        </div>
      </div>
      <SeccionInicio />
      <Footer />
    </>
  );
}

export default Inicio;
