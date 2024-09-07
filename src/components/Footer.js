import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <Container>
      <Row className="align-items-center">
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Adnan Vandyck | 
              <a href="https://github.com/adnanvandyck" className="ms-2 me-2">GitHub</a>
              <a href="https://linkedin.com/in/adnanvandyck" className="me-2">LinkedIn</a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
