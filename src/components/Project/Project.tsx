import { Col, Container, Row } from "react-bootstrap";
import "./project.css";

function Project() {
  return (
    <>
      <h1 className="text-center">Project</h1>
      <Container className="mb-5">
        <Row>
          <Col>
            <div className="card text-center" style={{ width: "18rem" }}>
              <img src="/images/OSD.jpg" className="card-img-top" alt="..." />
              <h5 className="text-center">OSD</h5>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="bg-transparent d-flex flex-wrap column-gap-2 row-gap-2">
                  <span className="technology ">React</span>
                  <span className="technology">MUI</span>
                  <span className="technology">Python</span>
                  <span className="technology">SQL</span>
                </div>
              </div>
              <div className="card-footer">
                <a href="#" style={{ textDecoration: "none" }}>
                  <i
                    className="devicon-github-original colored"
                    style={{ fontSize: "1.9rem" }}
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Project;
