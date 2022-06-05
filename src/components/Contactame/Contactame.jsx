import React, { useState } from "react";
import axios from "axios";

import Footer from "../Footer";
import Particulas from "../Particulas";
import "./contactame.css";

function Contactame() {
  const [data, setDatos] = useState([]);
  const [dato, setData] = useState({
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    setData({
      ...dato,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = async () => {
    await axios
      .post("https://backend-portafolioweb.herokuapp.com/", { dato })
      .then((response) => {
        setData(data.concat(response.data));
      })
      .catch((error) => console.log(error));
  };

  const descargar = () => {
    window.open(
      "https://drive.google.com/file/d/12uXH02I7DiVnyAyKSB8ZJvGvcbIILF7y/view?usp=sharing"
    );
  };

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
                <i className="fab fa-linkedin-in"></i>
              </a>
              <p>LinkedIn</p>
            </span>
            <span className="instagram iconos">
              <a href="https://www.instagram.com/noiisys/" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <p>Instagram</p>
            </span>
            <span className="git-hub iconos">
              <a href="https://github.com/dilanEspindola" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <p>GitHub</p>
            </span>
            <span className="whatsapp iconos">
              <div className="icono-numero">
                <i className="fab fa-whatsapp"></i>
                <p>+573144530377</p>
              </div>
              <p>WhatsApp</p>
            </span>
            <span className="email iconos">
              <div className="icono-email">
                <i className="far fa-envelope"></i>
                <p>dilanespindola29@gmail.com</p>
              </div>
              <p>Correo</p>
            </span>
          </div>
        </div>

        <div className="contenedor-descarga">
          <button className="btn-descargar" type="submit" onClick={descargar}>
            Descargar CV
          </button>
        </div>

        <h3>Ó puedes envíarme un mensaje en el siguiente formulario:</h3>

        <div className="contenedor-formulario">
          <p>Escribe tu correo y un mensaje</p>
          <form
            action="https://backend-portafolioweb.herokuapp.com/"
            method="POST"
            onSubmit={sendData}
          >
            <input
              type="email"
              placeholder="Email"
              onChange={handleInput}
              name="email"
              required
            />
            <textarea
              id=""
              cols="30"
              rows="10"
              placeholder="Mensaje"
              onChange={handleInput}
              name="message"
              required
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
