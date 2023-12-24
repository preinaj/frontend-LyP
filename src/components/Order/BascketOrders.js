import React from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, InputGroup } from 'react-bootstrap';
import './BascketOrders.css';

function BascketOrders() {
  return (
    <Col>
      <h2 className="section-title">Carrito de la compra</h2> 
      <Container className="basket-orders">
        <Card className="basket-order mb-5">
          <Card.Header className="text-center basket-order-header">
            <h5>Pedido a vendedor @ElRinconDelLibro</h5>
          </Card.Header>
          <Card.Body className="row align-items-center">
            <Col md={7} className="basket-order-products">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <p><b>Harry Potter y la Piedra Filosofal</b></p>
                  <p>Precio: 5 €/ud</p>
                  <div className="d-flex align-items-center">
                    <InputGroup className="mb-3">
                      <InputGroup.Text>Unidades</InputGroup.Text>
                      <Form action="/update_quantity" method="post">
                        <Form.Control type="number" name="quantity" defaultValue="2" min="1"></Form.Control>
                      </Form>
                      <Button variant="danger" size="sm" className="ml-2"><i className="fas fa-trash"></i></Button>
                    </InputGroup>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={5} className="basket-order-data">
              <Row className="justify-content-center">
                <ListGroup>
                  <ListGroup.Item> <b>Numero de artículos:</b> 3</ListGroup.Item>
                  <ListGroup.Item> <b>Precio total:</b> 17 €</ListGroup.Item>
                </ListGroup>
              </Row>
              <Row className="justify-content-center">
                <div className="d-grid gap-3">
                  <Button type="button" variant="info" className="mt-3"><i className="fas fa-truck"></i> Pedir</Button>
                  <Button type="button" variant="secondary" className="mt-3"><i className="fas fa-trash"></i> Borrar</Button>
                </div>
              </Row> 
            </Col>
          </Card.Body>
        </Card>
      </Container>
    </Col>
  );
}

export default BascketOrders;