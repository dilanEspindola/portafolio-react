import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Particulas from "./Particulas";
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
      ],
      startDelay: 500,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 200,
      loop: true,
      showCursor: true,
      cursorChar: "|",
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
        <a href="http://localhost:3000/contactame" className="contactame-btn">
          Contactame
        </a>
      </section>
    </>
  );
}

export default Inicio;
