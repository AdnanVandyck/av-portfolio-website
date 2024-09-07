import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="text-center mb-4 mb-md-0">
          <Image
            src="/adnan-vandyck-image.jpg"
            roundedCircle
            width="250"
            height="250"
          />
        </Col>
        <Col md={6}>
          <h2 className="mb-4">About Me</h2>
          <p>
            I'm a full-stack developer dedicated to creating efficient,
            user-friendly applications. My journey in tech began in finance as
            an accountant, but I noticed that the areas I thrived in were where
            I was tasked with building adhoc dashboards for various
            stakeholders. That led me to taking a software development bootcamp,
            and I've been developing solutions for problems ever since.
          </p>
          <p>
            When I'm not coding, you can find me in the DJ booth keeping people
            on the dancefloor, spending time with my family, or lost in a good
            book. I believe in continuous learning and am always excited to take
            on new challenges in the ever-evolving world of web development.
          </p>
          <h3 className="mt-4 mb-3">Skills</h3>
          <ul>
            <li>Python</li>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Bootstrap</li>
            <li>Git & GitHub</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
