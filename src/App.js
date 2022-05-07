import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col nd>
            <Form.Group controlID="formEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="Example@mail.com" />
            <Form.Text className="text-muted">salamm labas barra jawek b haiiii</Form.Text>
          </Form.Group>
            </Col>
            <Col nd>
            <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
            </Col>
          </Row>

          
          <Button variant="secondary" type="submit">login</Button>
        </Form>
        <Card style={{ color: '#000' }}>
          <Card.Img className="mb-3" src="https://picsum.photos/200/100" />
          <Card.Body>
            <Card.Title>Card</Card.Title>
            <Card.Text>lahna na7na Bio mTa3na Bahi Barccha Wala 3aujbek Wala le hey hooooo</Card.Text>
            <Button variant="primary">Test Button</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test1</Breadcrumb.Item>
        <Breadcrumb.Item>Test2</Breadcrumb.Item>
        <Breadcrumb.Item>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
