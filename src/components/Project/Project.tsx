import { Col, Container, Row } from "react-bootstrap";
import "./project.css";
import projects_list from "./projects_list";
import { v4 as uuidv4 } from "uuid";

function Project() {
  return (
    <>
      <h1 className="text-center">Project</h1>
      <Container className="mb-5">
        <Row>
          {projects_list.map((project) => (
            <Col key={project.id}>
              <div className="card text-center" style={{ width: "18rem" }}>
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <h5 className="text-center">{project.title}</h5>
                <div className="card-body">
                  <p className="card-text">{project.description}</p>
                  <div className="bg-transparent d-flex flex-wrap column-gap-2 row-gap-2">
                    {project.technologies.map((tech) => {
                      return (
                        <span key={uuidv4()} className="technology ">
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="card-footer">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <i
                      className="devicon-github-original colored"
                      style={{ fontSize: "1.9rem" }}
                    />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Project;
