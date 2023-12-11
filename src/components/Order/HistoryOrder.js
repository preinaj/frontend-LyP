import React from 'react';
import { Link } from 'react-router-dom';

import './HistoryOrders.css';

function HistoryOrder({ order }) {
  return (
    <tr class="history-order">
      <th>123456789</th>
      <td>01/01/2023</td>
      <td>05/01/2023</td>
      <td>10€</td>
      <td><span class="badge badge-warning">En preparacion</span></td>
      <td></td><Link to="/historyOrders/1"><button type="button" class="btn btn-info">Ver detalles</button></Link>
    </tr>
  );
}

export default HistoryOrder;