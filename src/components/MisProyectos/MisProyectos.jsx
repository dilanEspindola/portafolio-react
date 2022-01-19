import React from "react";

import proyectos from "../projects.json";

import MostrarProyectos from "./MostrarProyectos";
import Footer from "../Footer";
import "./misproyectos.css";

function MisProyectos() {
  return (
    <div className="pagina-mis-proyectos">
      <div className="contenedor">
        <h1 className="titulo-mis-proyectos">Mis proyectos</h1>
        <p className="descripcion-txt">
          Aquí puedes encontrar algunos proyectos personales que he hecho
          durante mi aprendizaje. De los siguientes proyectos ahí algunos que
          están hechos usando "HTML y CSS. Otros usando HTML, CSS, JavaScript y
          NodeJs, e inlcuso usando ReactJs", como lo es este sitio web que está
          hecho con ReactJs.
        </p>
        <div className="contenedor-proyectos">
          <MostrarProyectos proyectos={proyectos} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MisProyectos;
