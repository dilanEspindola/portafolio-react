import React from "react";

const Proyectos = (props) => {
  const { projectLists } = props;
  const getTwo = projectLists.filter((p) => p.id <= 2);
  return (
    <>
      {getTwo.map((p) => (
        <div className="project" key={p.id}>
          <img src={p.image} className="img-project" />
          <p className="titulo">{p.name}</p>
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
      ))}
    </>
  );
};

export default Proyectos;
