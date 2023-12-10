import React from 'react';

import './HistoryOrders.css';

function HistoryOrdersFilter() {
  return (
  <div>
    <div class="d-flex justify-content-end align-items-end">
      <button type="button" class="btn btn-outline-info" data-bs-toggle="collapse" data-bs-target="#history-orders-filter" aria-controls="history-orders-filter">Filtrar y ordenar</button>
    </div>

    <div class="collapse" id="history-orders-filter">
    <div class="card card-body history-orders-filter">
      <form>
        <div class="mb-3">
          <label for="orderStatus" class="form-label">Estado del pedido:</label>
          <select class="form-select" id="orderStatus">
            <option selected>Elige...</option>
            <option value="preparation">En preparación</option>
            <option value="shipped">Enviado</option>
            <option value="cancelled">Cancelado</option>
            <option value="delivered">Entregado</option>
          </select>
        </div>
      

        {/* <div class="mb-3 d-flex align-items-center">
          <label class="form-label me-2">Rango de precio: </label>
          <input type="number" class="form-control me-2" id="minPrice" placeholder="Mínimo" style="width: auto;">
          <span class="me-2">-</span>
          <input type="number" class="form-control" id="maxPrice" placeholder="Máximo" style="width: auto;">
          €
        </div> */}


        <div class="mb-3">
          <label for="sortOrder" class="form-label">Ordenar por:</label>
          <select class="form-select" id="sortOrder">
            <option selected>Elige...</option>
            <option value="deliveryDate">Fecha prevista de entrega</option>
            <option value="orderDate">Fecha de realización</option>
            <option value="totalPayment">Pago total</option>
          </select>
        </div>

        <div class="d-flex justify-content-center gap-2">
            <button type="submit" class="btn btn-info">Aplicar filtros</button>
            <button type="button" class="btn btn-secondary" onclick="resetForm()">Borrar filtros</button>
        </div>

      </form>
    </div>
    </div>
  </div>  
  );
}

export default HistoryOrdersFilter;