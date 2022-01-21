import React from "react";

import Footer from "../Footer";
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contactame;
