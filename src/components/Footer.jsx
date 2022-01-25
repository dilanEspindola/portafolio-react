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
                href="https://www.linkedin.com/in/dilan-espindola-09b6b51a9/"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in linkedin-icon"></i>
              </a>
            </span>
            <p>LinkedIn</p>
          </div>
          <div className="twitter">
            <span>
              <a
                href="https://www.instagram.com/noiisys/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram instagram-icon"></i>
              </a>
            </span>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
