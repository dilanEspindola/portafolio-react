import { Parallax } from "react-parallax";
import CollisionsParticles from "../CollisionsParticles";
import Footer from "../Footer";
import imagen from "../../img/background2.jpg";
import "./sobremi.css";

function SobreMi() {
  return (
    <>
      <Parallax bgImage={imagen} strength={500} className="img-parallax">
        <div className="pagina-sobremi">
          <div className="contenedor">
            <CollisionsParticles />
            <div className="cards">
              <div className="card-sobre-mi">
                <h1 className="quien-soy-txt" id="quien-soy-id">
                  quién soy?
                </h1>
                <p id="p-id">
                  Mi nombre es Dilan Enrique Espindola Gil, actualmente tengo 20
                  años y resido en Bogotá, Colombia
                  <br />
                  La razón del por qué, decidí realizar este portafolio, es para
                  hacerme conocer un poco, y así mismo conseguir un empleo ya
                  sea trabajando en una compañia o empresa o siendo un
                  freelancer.
                  <br />
                  Como verás en la seccion de{" "}
                  <a href="/mis-proyectos">mis proyectos</a> mi fuerte es el
                  desarollo web. Se usar varias tecnologías como
                  <b> Html, Css, javaScript, ReactJs, NodeJs, Mysql y Github</b>
                  , en los proyectos (que por cierto son personales debido a que
                  no tengo experencia laboral en esta area) qué verás estan
                  hechos con las tecnologías mencionadas previamente y por
                  supuesto seguiré aprendiendo mas tecnologías.
                  <br />
                  Dejando un poco de la lado en lo me destaco, hablaré un poco
                  sobre como a sido mi ruta de aprendizaje.
                  <br />
                  Antes de ingresar a estudiar en algun instituto, universidad,
                  bootcamp, etc... aprendo de manera autodidacta o automa. He
                  estudiado programación en el{" "}
                  <a
                    href="https://www.sena.edu.co/es-co/sena/Paginas/quienesSomos.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sena{" "}
                  </a>
                  que constó de un año de formación y que actualmente poseo un
                  certificado. Y no hace mucho que fuí admitido en estudiar en{" "}
                  <a
                    href="https://talento.juventic.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Talento Juventic
                  </a>{" "}
                  que para resumirlo es un bootcamp de 3 meses de formación en
                  donde aprendimos a usar tecnlogias como{" "}
                  <b>Html, Css, javaScript y ReactJs</b>.
                  <br />
                  Supongo que ya es todo lo relevante sobre mí. Puedes
                  contactarme si gustas.
                </p>
              </div>

              <div className="card-skills">
                <h1>Mis Habilidades</h1>
                <div className="skills">
                  <span>
                    <i className="fab fa-html5"></i>
                    <p>HTML</p>
                  </span>
                  <span>
                    <i className="fab fa-css3-alt"></i>
                    <p>CSS</p>
                  </span>
                  <span>
                    <i className="fab fa-js"></i>
                    <p>JAVASCRIPT</p>
                  </span>
                  <span>
                    <i className="fab fa-react"></i>
                    <p>REACTJS</p>
                  </span>
                  <span>
                    <i className="fab fa-node-js"></i>
                    <p>NODEJS</p>
                  </span>
                  <span>
                    <i className="fab fa-linux"></i>
                    <p>LINUX</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="btn-ver-mas">
              <a href="/contactame" className="ver-mas edit-btn-sobre-mi">
                Contactame
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </Parallax>
    </>
  );
}

export default SobreMi;
