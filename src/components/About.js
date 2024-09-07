import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="text-center mb-4 mb-md-0">
          <Image
            src="/path-to-your-photo.jpg"
            roundedCircle
            width="250"
            height="250"
          />
        </Col>
        <Col md={6}>
          <h2 className="mb-4">About Me</h2>
          <p>
            I'm a junior developer with a passion for creating intuitive and
            efficient web applications. My journey in tech began with [your
            background], and I've since developed a strong foundation in React,
            JavaScript, and responsive web design.
          </p>
          <p>
            When I'm not coding, you can find me [your interests/hobbies]. I
            believe in continuous learning and am always excited to take on new
            challenges in the ever-evolving world of web development.
          </p>
          <h3 className="mt-4 mb-3">Skills</h3>
          <ul>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Bootstrap</li>
            <li>Git & GitHub</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
