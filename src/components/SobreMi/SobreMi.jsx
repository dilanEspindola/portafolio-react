import React from "react";
import Footer from "../Footer";
import "./sobremi.css";

function SobreMi() {
  return (
    <>
      <div className="pagina-sobremi">
        <div className="contenedor">
          <h1 className="quien-soy-txt">quién soy?</h1>
          <img src="" alt="me" />
          <p>
            Mi nombre es Dilan Enrique Espindola Gil, actualmente tengo 20 años
            y resido en Bogotá, Colombia
            <br />
            La razón del por qué, decidí realizar este portafolio, es para
            hacerme conocer un poco, y así mismo conseguir un empleo ya sea
            trabajando en una compañia o empresa o siendo un freelancer.
            <br />
            Como verás en la seccion de{" "}
            <a href="/mis-proyectos">mis proyectos</a> mi fuerte es el desarollo
            web. Se usar varias tecngologias como
            <b>Html, Css, javaScript, ReactJs, NodeJs, Mysql y Github</b>, en
            los proyectos (que por cierto son personales debido a que no tengo
            experencia laboral en esta area) qué verás estan hechos con las
            tecngologias mencionadas previamente y por supuesto seguiré
            aprendiendo mas tecngologias.
            <br />
            Dejando un poco de la lado en lo me destaco, hablaré un poco sobre
            como a sido mi ruta de aprendizaje.
            <br />
            Antes de ingresar a estudiar en algun instituto, universidad,
            bootcamp, etc... aprendo de manera autdidacta o automa. He estudiado
            programación en el{" "}
            <a
              href="https://www.sena.edu.co/es-co/sena/Paginas/quienesSomos.aspx"
              target="_blank"
            >
              Sena{" "}
            </a>
            que constó de un año de formacion y que actualmente poseo un
            certificado. Y no hace mucho que fuí admitido en estudiar en{" "}
            <a href="https://talento.juventic.co" target="_blank">
              Talento Juventic
            </a>{" "}
            que para resumirlo es un bootcamp de 3 meses de formación en donde
            aprendimos a usar tecnlogias como{" "}
            <b>Html, Css, javaScript y ReactJs</b>.
            <br />
            Supongo que ya es todo lo relevante sobre mí. Puedes contactarme si
            gustas.
          </p>
          <a href="/contactame">Contactame</a>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SobreMi;
