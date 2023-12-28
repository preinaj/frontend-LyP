import React from 'react';
import { Container, Card, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';

import './OrderDetails.css';

function OrderDetails() {

  const orders = [
    {
      orderId: 1,
      userId: 1,
      sellerId: 2,
      books: [
        {
          _id: "658d439a209f46b4655e2c6a",
          bookId: 2,
          units: 1
        }
      ],
      status: "In preparation",
      deliveryAddress: "Reina Mercedes",
      maxDeliveryDate: "2023-12-21T00:00:00.000Z",
      creationDatetime: "2023-12-06T11:27:30.647Z",
      updateDatetime: "2023-12-06T11:27:30.647Z",
      payment: 23.99
    },
    {
      orderId: 3,
      userId: 1,
      sellerId: 2,
      books: [
        {
          _id: "658d439a209f46b4655e2c6b",
          bookId: 2,
          units: 1
        }
      ],
      status: "In preparation",
      deliveryAddress: "Reina Mercedes",
      maxDeliveryDate: "2023-12-21T00:00:00.000Z",
      creationDatetime: "2023-12-06T11:35:54.030Z",
      updateDatetime: "2023-12-06T11:35:54.030Z",
      payment: 23.99
    },
    {
      orderId: 4,
      userId: 1,
      sellerId: 2,
      books: [
        {
          bookId: 2,
          units: 1,
          price: 32,
          _id: "657061f8acf83ad6a5c9f260"
        }
      ],
      status: "In preparation",
      deliveryAddress: "Reina Mercedes",
      maxDeliveryDate: "2023-12-21T00:00:00.000Z",
      creationDatetime: "2023-12-06T11:58:48.628Z",
      updateDatetime: "2023-12-06T11:58:48.628Z",
      payment: 23.99
    },
    {
      orderId: 5,
      userId: 3,
      sellerId: 2,
      books: [
        {
          bookId: 2,
          units: 1,
          price: 6,
          _id: "657389772e90cd59f7ba4f5d"
        },
        {
          bookId: 1,
          units: 2,
          price: 5,
          _id: "657389772e90cd59f7ba4f5e"
        }
      ],
      status: "In preparation",
      deliveryAddress: "4 Privet Drive, Little Whinging, Surrey",
      maxDeliveryDate: "2023-12-25T00:00:00.000Z",
      creationDatetime: "2023-12-08T21:19:20.210Z",
      updateDatetime: "2023-12-08T21:24:07.975Z",
      payment: 16
    },
    {
      orderId: 6,
      userId: 2,
      sellerId: 3,
      books: [
        {
          bookId: 5,
          units: 3,
          price: 8,
          _id: "6575bada10f37f5dd014fc80"
        },
        {
          bookId: 6,
          units: 1,
          price: 12,
          _id: "6575bada10f37f5dd014fc81"
        }
      ],
      status: "In preparation",
      deliveryAddress: "742 Evergreen Terrace, Springfield",
      maxDeliveryDate: "2023-12-15T00:00:00.000Z",
      creationDatetime: "2023-12-10T13:19:22.888Z",
      updateDatetime: "2023-12-10T13:19:22.889Z",
      payment: 36
    }
  ];

  // Preguntar por el id de la url
  const order = orders.find(order => order.orderId == )

  return (
    <Container className="mt-5">
      <Card className="mb-3">
        <Card.Header className="text-center bg-primary text-white">
          Detalles del Pedido a vendedor SELLER
        </Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col md={6}>
              <InputGroup className="mb-3">
                  <InputGroup.Text>Identificador</InputGroup.Text>
                <FormControl type="text" placeholder="123456789" disabled />
              </InputGroup>
              <InputGroup className="mb-3">
                  <InputGroup.Text>Dirección</InputGroup.Text>
                <FormControl type="text" placeholder="20-2 Yoga, Setagaya-Ku, Tokio, Japón" disabled />
              </InputGroup>
              <InputGroup className="mb-3">
                  <InputGroup.Text>Fecha de realización</InputGroup.Text>
                <FormControl type="date" placeholder="02/02/2000" disabled />
              </InputGroup>
              <InputGroup className="mb-3">
                  <InputGroup.Text>Vendedor</InputGroup.Text>
                <FormControl type="text" placeholder="Pablo's store" disabled />
              </InputGroup>
            </Col>
            <Col md={6}>
              <InputGroup className="mb-3">
                  <InputGroup.Text>Estado</InputGroup.Text>
                <FormControl as="select">
                  <option value="4">En Preparación</option>
                  <option value="1">En Reparto</option>
                  <option value="2">Entregado</option>
                  <option value="3">Cancelado</option>
                </FormControl>
              </InputGroup>
              <InputGroup className="mb-3">
                  <InputGroup.Text>Entrega antes de</InputGroup.Text>
                <FormControl type="date" />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card.Text>
                <h5>Harry Potter y piedra filosofal</h5>
                Precio: 9.9€/ud<br />
                Unidades: 1
              </Card.Text>
              <Card.Text>
                <h5>Otro libro de ejemplo</h5>
                Precio: 9.9€/ud<br />
                Unidades: 1
              </Card.Text>
            </Col>
            <Col md={6}>
              <Card.Text>
                <h5>Tercer libro de ejemplo</h5>
                Precio: 9.9€/ud<br />
                Unidades: 1
              </Card.Text>
              <Card.Text>
                <h5>Cuarto libro de ejemplo</h5>
                Precio: 9.9€/ud<br />
                Unidades: 1
              </Card.Text>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between align-items-center">
            <Col xs={6}>
                <p className="mb-0"><strong>Envío:</strong> 3.5€</p>
                <p><strong>Pago total:</strong> 19.98€</p>
            </Col>
            <Col xs={6} className="d-flex justify-content-end">
                <Button variant="primary" className="me-2">Actualizar</Button>
                <Button variant="info">Factura</Button>
            </Col>
        </Row>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default OrderDetails;