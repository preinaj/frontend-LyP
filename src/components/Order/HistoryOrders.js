import React from 'react';
import OrderFilter from './HistoryOrdersFilter';
import OrderList from './HistoryOrdersList';
import { Container } from 'react-bootstrap';

import './HistoryOrders.css';

function HistoryOrders() {
  return (
    <Container>
      <h2 className="section-title">Mi historial de pedidos</h2>
      <div className="section-content">
        <OrderFilter />
        <OrderList />
      </div>
    </Container>
  );
}

export default HistoryOrders;