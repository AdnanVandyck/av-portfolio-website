import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const projects = [
  { id: 1, title: 'Kairux',                description: 'Kairux is an innovative time management app designed specifically for individuals with ADHD-related time blindness.', category: 'web', tech: ['React', 'Bootstrap'] },
  { id: 2, title: 'Mero Sound & Lighting', description: 'A website for the premier sound and lighting company in NYC', category: 'web', tech: ['React', 'Bootstrap'] },
  { id: 3, title: 'Rest-Rant',             description: 'An interactive website that allows users to review their favorite restaurants', category: 'web', tech: ['React', 'Bootstrap'] },
];

const allCategories = ['all', ...new Set(projects.map(project => project.category))];

function PortfolioGallery() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      
      <div className="text-center mb-4">
        {allCategories.map(category => (
          <Button 
            key={category} 
            variant={filter === category ? 'primary' : 'outline-primary'}
            className="mx-2 mb-2"
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      <Row>
        {filteredProjects.map(project => (
          <Col key={project.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    Technologies: {project.tech.join(', ')}
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PortfolioGallery;