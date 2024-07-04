// web-client/src/App.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-primary text-white text-center py-5">
        <h1>Habit Tracking App</h1>
        <p>Bienvenido a la aplicación de seguimiento de hábitos.</p>
      </header>
      <Container className="my-5">
        <Row className="text-center">
          <Col>
            <Button variant="primary" size="lg" className="mb-3" href="http://localhost:5006" target="_blank" rel="noopener noreferrer">
              User Service
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" size="lg" className="mb-3" href="http://localhost:5007" target="_blank" rel="noopener noreferrer">
              Habit Service
            </Button>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button variant="success" size="lg" className="mb-3" href="http://localhost:5008" target="_blank" rel="noopener noreferrer">
              Reminder Service
            </Button>
          </Col>
          <Col>
            <Button variant="danger" size="lg" className="mb-3" href="http://localhost:5009" target="_blank" rel="noopener noreferrer">
              Statistics Service
            </Button>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button variant="warning" size="lg" className="mb-3" href="http://localhost:5010" target="_blank" rel="noopener noreferrer">
              Notification Service
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

