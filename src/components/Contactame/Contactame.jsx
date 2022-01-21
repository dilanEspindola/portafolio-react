import React from "react";

import Footer from "../Footer";
import Particulas from "./Particulas";
import "./contactame.css";

function Contactame() {
  return (
    <div className="pagina-contactame">
      <div className="contenedor-contactame">
        <h1 className="titulo-contactame">Contáctame</h1>
        <div className="flex">
          <p className="info-contacto">
            Puedes contactarme en mis redes sociales:
          </p>
          <div className="redes-sociales-contactame">
            <span className="linkedin iconos">
              <a
                href="https://www.linkedin.com/in/dilan-espindola-09b6b51a9/"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <p>LinkedIn</p>
            </span>
            <span className="instagram iconos">
              <a href="https://www.instagram.com/noiisys/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <p>Instagram</p>
            </span>
            <span className="git-hub iconos">
              <a href="https://github.com/dilanEspindola" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <p>GitHub</p>
            </span>
            <span className="whatsapp iconos">
              <div className="icono-numero">
                <i class="fab fa-whatsapp"></i>
                <p>+573144530377</p>
              </div>
              <p>WhatsApp</p>
            </span>
            <span className="email iconos">
              <div className="icono-email">
                <i class="far fa-envelope"></i>
                <p>dilanespindola29@gmail.com</p>
              </div>
              <p>Correo</p>
            </span>
          </div>
        </div>

        <h3>Ó puedes envíarme un mensaje en el siguiente formulario:</h3>

        <div className="contenedor-formulario">
          <p>Escribe tu correo y un mensaje</p>
          <form action="" method="POST" onSubmit="">
            <input type="email" placeholder="Email" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Mensaje"
            ></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </div>
      <Particulas />
      <Footer />
    </div>
  );
}

export default Contactame;
