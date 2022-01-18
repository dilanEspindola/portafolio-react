import React from "react";

import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="contenido">
        <h1 className="nombre">dilan espindola</h1>
        <div className="linea-vertical"></div>
        <div className="redes-sociales">
          <div className="github">
            <span>
              <a
                href="https://github.com/dilanEspindola"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github github-icon"></i>
              </a>
            </span>
            <p>GitHub</p>
          </div>
          <div className="facebook">
            <span className="">
              <a
                href="https://www.facebook.com/dilanenrique.espindolagil.7"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f faceboook-icon"></i>
              </a>
            </span>
            <p>Facebook</p>
          </div>
          <div className="twitter">
            <span>
              <a
                href="https://twitter.com/Darkgame55"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter twitter-icon"></i>
              </a>
            </span>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
