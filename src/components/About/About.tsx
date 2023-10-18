import React from 'react'
import './about.css'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
  return (
    <Container className='about-container bg-success'>
      <Row>
        <Col sm={12} md={6}>
          <h2 className='text-center'>About me</h2>
          I'm a recent graduate from San Jose University, proudly holding a Bachelor's degree in Computer Science, which I obtained in May 2023. My journey into the world of programming began in my home country, Madagascar, where I had the opportunity to take my first computer science class. From that moment, I was captivated by the endless possibilities that coding could unlock. My passion for programming continues to grow as I explore the ever-evolving landscape of technology and software development. I'm excited to embark on this exciting journey, leveraging my knowledge and skills to create innovative solutions and contribute to the world of computer science.
        </Col>
        <Col sm={12} md={6} >
          <h3 className='text-center'>Skills</h3>
          <div className='d-flex flex-wrap'>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
            <i className="devicon-react-original colored" style={{fontSize: "2.3rem"}}></i>
          </div>
          
          
        </Col>
      </Row>
    </Container>
  )
}

export default About
