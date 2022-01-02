import React from "react";

function Proyectos(props) {
  const { projectLists } = props;
  const getTwoProjects = projectLists.filter((p) => p.id <= 2);

  return (
    <>
      {getTwoProjects.map((p) => (
        <div className="project" key={p.id}>
          <img src={p.image} />
          <p className="titulo">{p.name}</p>
          <div className="content-txt">
            <p>{p.description}</p>
          </div>
          <div className="links">
            <a className="btn" href={p.link} target="_blank">
              visitar página
            </a>
            <a className="btn btn-github" href={p.githubLink} target="_blank">
              Ver en GitHub
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Proyectos;
