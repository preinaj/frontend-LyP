import React from 'react';
import HistoryOrder from './HistoryOrder';

import './HistoryOrders.css';

function HistoryOrdersList({ orders }) {
  return (
    <table class="table table-hover history-orders mt-4 text-center">

    <thead class="thead">
      <tr class="history-orders-tableHeader">
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
  </table>
  );
}

export default HistoryOrdersList;