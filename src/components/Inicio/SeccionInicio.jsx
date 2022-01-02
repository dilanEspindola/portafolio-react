import React from "react";
import proyectos from "../projects.json";
import Proyectos from "./Proyectos";
import "../style.css";

function SeccionInicio() {
  return (
    <>
      <section className="seccion-some-projects">
        <div className="contenedor-projects">
          <h1>Mis proyectos</h1>
          <p>
            Aquí encontrarás algunos de mis proyectos personales sobre
            desarrollo web utlizando tecngologías como HTML, CSS, JAVASCRIPT,
            REACT, NODEJS y MYSQL. Adicionalmente cada prestentación tendrá su
            codigo en gitHub.
          </p>
          <div className="project-lists">
            <Proyectos projectLists={proyectos} />
          </div>
          <div className="btn-ver-mas">
            <a href="/mis-proyectos" className="ver-mas">
              ver más
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default SeccionInicio;
