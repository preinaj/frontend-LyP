import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button } from 'react-bootstrap';

import './HistoryOrders.css';

function HistoryOrder({ order }) {
  return (
    <tr className="history-order">
      <th>123456789</th>
      <td>01/01/2023</td>
      <td>05/01/2023</td>
      <td>10€</td>
      <td><Badge variant="warning">En preparacion</Badge></td>
      <td>
        <Link to="/historyOrders/1">
          <Button variant="info">Ver detalles</Button>
        </Link>
      </td>
    </tr>
  );
}

export default HistoryOrder;