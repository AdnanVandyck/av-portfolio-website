import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="display-4 mb-4">Hello! I'm Adnan.</h1>
          <p className="lead mb-4">
            A full-stack developer dedicated to creating efficient, user-friendly
            applications.
          </p>
          <Button variant="primary" href="/projects">
            View My Projects
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
