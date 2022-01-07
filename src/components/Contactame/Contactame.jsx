import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import "./contactame.css";

function Contactame() {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviar = (e) => {
    const { nombre, email, mensaje } = datos;
    console.log(`${nombre}, ${email}, ${mensaje}`);
  };

  return (
    <div className="contactame">
      <div className="contenedor-contactame">
        <h1>Contactame</h1>
        <div className="contenedor-form">
          <form action="" className="form" onSubmit={enviar}>
            <div className="inputs">
              <input
                type="text"
                name="nombre"
                className="input-1"
                placeholder="Nombre"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className="input-2"
                placeholder="Correo"
                onChange={handleChange}
              />
            </div>
            <div className="text-area">
              <textarea
                name="mensaje"
                rows="5"
                placeholder="Mensaje"
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="enviar">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contactame;
