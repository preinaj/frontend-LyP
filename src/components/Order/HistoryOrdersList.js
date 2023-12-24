import React from 'react';
import HistoryOrder from './HistoryOrder';
import { Table } from 'react-bootstrap';

import './HistoryOrders.css';

function HistoryOrdersList({ orders }) {
  return (
    <Table hover className="mt-4 text-center">
      <thead>
        <tr className="history-orders-tableHeader">
          <th scope="col">Identificador</th>
          <th scope="col">Fecha de realizacion</th>
          <th scope="col">Fecha prevista de entrega</th>
          <th scope="col">Pago</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <HistoryOrder />
      </tbody>
    </Table>
  );
}

export default HistoryOrdersList;