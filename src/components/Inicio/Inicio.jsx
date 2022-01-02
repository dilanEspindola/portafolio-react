import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Particulas from "./Particulas";
import SeccionInicio from "./SeccionInicio";
import Footer from "../Footer";
import "../style.css";

function Inicio() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Bienvenido a mi portafolio web.",
        "Mi nombre es Dilan Espindola.",
        "Aquí puedes algunos proyectos web hechos por mí.",
        "...",
        "Redes sociales",
        "https://github.com/dilanEspindola",
        "https://twitter.com/Darkgame55",
        "https://www.facebook.com/dilanenrique.espindolagil.7",
      ],
      startDelay: 500,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 200,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="imagen-1">
        <span ref={el} className="texto-automatico"></span>
        <Particulas />
        <a href="/contactame" className="contactame-btn">
          Contáctame
        </a>
      </section>
      <SeccionInicio />
      <Footer />
    </>
  );
}

export default Inicio;
