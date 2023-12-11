import React from 'react';

import './OrderDetails.css';

function HistoryOrders() {
  return (
<div class="container mt-5">
    <div class="card mb-3">
        <div class="card-header text-center text-white">Detalles del Pedido a vendedor SELLER</div>
        <div class="card-body">
            <div class="row mb-3">
                <div class="col-md-6">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Identificador</span>
                        </div>
                        <input type="text" class="form-control" placeholder="123456789" disabled></input>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Dirección</span>
                        </div>
                        <input type="text" class="form-control" placeholder="20-2 Yoga, Setagaya-Ku, Tokio, Japón" disabled></input>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Fecha de realización</span>
                        </div>
                        <input type="date" class="form-control" placeholder="02/02/2000" disabled></input>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Vendedor</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Pablo's store" disabled></input>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Estado</span>
                        </div>
                        <select class="custom-select">
                            <option selected>En Preparación</option>
                            <option value="1">En Reparto</option>
                            <option value="2">Entregado</option>
                            <option value="3">Cancelado</option>
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Entrega antes de</span>
                        </div>
                        <input type="date" class="form-control"></input>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <h5 class="d-inline">Harry Potter y piedra filosofal</h5>
                        <div>Precio: 9.9€/ud</div>
                        <div>Unidades: 1</div>
                    </div>
                    <div class="mb-3">
                        <h5 class="d-inline">Otro libro de ejemplo</h5>
                        <div>Precio: 9.9€/ud</div>
                        <div>Unidades: 1</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <h5 class="d-inline">Tercer libro de ejemplo </h5>
                        <div>Precio: 9.9€/ud</div>
                        <div>Unidades: 1</div>
                    </div>
                    <div class="mb-3">
                        <h5 class="d-inline">Cuarto libro de ejemplo</h5>
                        <div>Precio: 9.9€/ud</div>
                        <div>Unidades: 1</div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <p class="mb-0"><strong>Envío:</strong> 3.5€</p>
                    <p><strong>Pago total:</strong> 19.98€</p>
                </div>
                <div>
                    <button type="button" class="btn btn-primary">Actualizar</button>
                    <button type="button" class="btn btn-info">Factura</button>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default HistoryOrders;