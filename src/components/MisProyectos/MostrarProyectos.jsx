import React from "react";

const MostrarProyectos = (props) => {
  const { proyectos } = props;

  return (
    <>
      {proyectos.map((p) => (
        <div className="project" key={p.id}>
          <img src={p.image} alt="" />
          <p className="titulo">{p.name}</p>
          <div className="padding">
            <div className="content-txt">
              <p>{p.description}</p>
            </div>
            <div className="links">
              <a
                className="btn"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                visitar página
              </a>
              <a
                className="btn btn-github"
                href={p.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Codigo en GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MostrarProyectos;
