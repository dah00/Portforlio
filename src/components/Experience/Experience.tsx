import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./experience.css";

function Experience() {
  return (
    <>
      <h1 className="text-center">Experiences</h1>
      <Container className="mb-5">
        <Row>
          <Col>
            <div className="card" style={{ width: "18rem" }}>
              <img src="./OSD.jpg" className="card-img-top" alt="..." />
              <h5 className="text-center">OSD</h5>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="card-footer bg-transparent d-flex flex-wrap column-gap-2 row-gap-2">
                  <span className="technology ">React</span>
                  <span className="technology">MUI</span>
                  <span className="technology">Python</span>
                  <span className="technology">SQL</span>
                </div>
              </div>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Experience;
