import React, { useState } from 'react';
import { Card, Button, Form, Collapse } from 'react-bootstrap';

import './HistoryOrders.css';


function HistoryOrdersFilter() {

  const [open, setOpen] = useState(false);

  const inputStyle = { maxWidth: '200px' };

  return (
    <div>
      <div className="d-flex justify-content-end align-items-end">
      <Button 
          variant="outline-info" 
          onClick={() => setOpen(!open)} 
          aria-controls="history-orders-filter"
          aria-expanded={open}
        >
          Filtrar y ordenar
        </Button>
      </div>

      <Collapse in={open}>
      <div id="history-orders-filter">
        <Card>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label className="me-2">Estado del pedido:</Form.Label>
                <Form.Control as="select" id="orderStatus" style={inputStyle}>
                  <option value="preparation">En preparación</option>
                  <option value="shipped">Enviado</option>
                  <option value="cancelled">Cancelado</option>
                  <option value="delivered">Entregado</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label className="me-2">Rango de precio: </Form.Label>
                <Form.Control type="number" style={inputStyle} id="minPrice" placeholder="Mínimo" />
                <span>-</span>
                <Form.Control type="number" style={inputStyle} id="maxPrice" placeholder="Máximo" />
                €
              </Form.Group>

              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Label className="me-2">Ordenar por:</Form.Label>
                <Form.Control as="select" style={inputStyle} id="sortOrder">
                  <option value="deliveryDate">Fecha prevista de entrega</option>
                  <option value="orderDate">Fecha de realización</option>
                  <option value="totalPayment">Pago total</option>
                </Form.Control>
              </Form.Group>

              <div className="d-flex justify-content-center gap-2">
                <Button variant="info" type="submit">Aplicar filtros</Button>
                <Button variant="secondary" type="button">Borrar filtros</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
      </Collapse>
    </div>
  );
}

export default HistoryOrdersFilter;