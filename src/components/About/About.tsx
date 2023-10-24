import React from "react";
import "./about.css";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <Container className="about-container">
      <Row>
        <Col sm={12} md={6}>
          <h2 className="text-center mb-5">About me</h2>
          I'm a recent graduate from San Jose University, proudly holding a
          Bachelor's degree in Computer Science, which I obtained in May 2023.
          My journey into the world of programming began in my home country,
          Madagascar, where I had the opportunity to take my first computer
          science class. From that moment, I was captivated by the endless
          possibilities that coding could unlock. My passion for programming
          continues to grow as I explore the ever-evolving landscape of
          technology and software development. I'm excited to embark on this
          exciting journey, leveraging my knowledge and skills to create
          innovative solutions and contribute to the world of computer science.
        </Col>
        <Col sm={12} md={6}>
          <h2 className="text-center mb-5">Skills</h2>
          <div className="skills-container d-flex flex-wrap justify-content-around column-gap-5">
            <figure className="language">
              <i
                className="devicon-react-original colored"
                style={{ fontSize: "4rem" }}
              ></i>
              <figcaption className="text-center">React</figcaption>
            </figure>
            <figure className="language">
              <i
                className="devicon-typescript-plain colored"
                style={{ fontSize: "4rem" }}
              ></i>
              <figcaption className="text-center">TypeScript</figcaption>
            </figure>
            <figure className="language">
              <i
                className="devicon-css3-plain colored"
                style={{ fontSize: "4rem" }}
              ></i>
              <figcaption className="text-center">CSS3</figcaption>
            </figure>
            <figure className="language">
              <i
                className="devicon-tailwindcss-plain colored"
                style={{ fontSize: "4rem" }}
              ></i>
              <figcaption className="text-center">Tailwindcss</figcaption>
            </figure>
            <figure className="language">
              <i
                className="devicon-git-plain colored"
                style={{ fontSize: "4rem" }}
              ></i>
              <figcaption className="text-center">Git</figcaption>
            </figure>
            <figure className="language">
              <i
                className="devicon-html5-plain colored"
                style={{ fontSize: "4rem" }}
              ></i>
              <figcaption className="text-center">HTML5</figcaption>
            </figure>
            <figure className="language">
              <i
                className="devicon-java-plain colored"
                style={{ fontSize: "4rem" }}
              ></i>
              <figcaption className="text-center">Java</figcaption>
            </figure>
            <figure className="language">
              <i
                className="devicon-bootstrap-plain colored"
                style={{ fontSize: "4rem" }}
              ></i>
              <figcaption className="text-center">Bootstrap</figcaption>
            </figure>
            <figure className="language">
              <i
                className="devicon-redux-original colored"
                style={{ fontSize: "4rem" }}
              ></i>
              <figcaption className="text-center">Redux</figcaption>
            </figure>

            <figure className="language">
              <i
                className="devicon-javascript-plain colored"
                style={{ fontSize: "4rem" }}
              ></i>
              <figcaption className="text-center">JavaScript</figcaption>
            </figure>
            <figure className="language">
              <i
                className="devicon-python-plain colored"
                style={{ fontSize: "4rem" }}
              ></i>
              <figcaption className="text-center">Python</figcaption>
            </figure>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
