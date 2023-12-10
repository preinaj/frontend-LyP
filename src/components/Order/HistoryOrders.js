import React from 'react';
import OrderFilter from './HistoryOrdersFilter';
import OrderList from './HistoryOrdersList';

import './HistoryOrders.css';

function HistoryOrders() {
  return (
  <div class="container">
    <div class="section-title"><h2>Mi historial de pedidos</h2></div>
    <div class="section-content">
      <OrderFilter />
      <OrderList />
    </div>
  </div>
  );
}

export default HistoryOrders;