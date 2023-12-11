import React from 'react';

import './BascketOrders.css';

function BascketOrders() {
  return (
    <div class="col">
    <h2 class="section-title">Carrito de la compra</h2> 
    <div class="container basket-orders">
        <div class="card basket-order mb-5">
        <div class="card-header text-center basket-order-header">
            <h5>Pedido a vendedor @ElRinconDelLibro</h5>
        </div>
        <div class="card-body row align-items-center">
            <div class="col-md-7 basket-order-products">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <p><b>Harry Potter y la Piedra Filosofal</b></p>
                        <p>Precio: 5 €/ud</p>
                        <div class="d-flex align-items-center">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                  <label class="input-group-text" for="inputGroupSelect01">Unidades</label>
                                </div>
                                <div class="d-flex align-items-center">
                                    <form action="/update_quantity" method="post">
                                        <input type="number" name="quantity" value="2" min="1" class="form-control"></input>
                                    </form>
                                    <button class="btn btn-danger btn-sm btn-delete ml-2"><i class="fas fa-trash"></i></button>
                                </div>
                              </div>
                        </div>

                    </li>
                </ul>
            </div>
            <div class="col-md-5 basket-order-data">
                <div class="row justify-content-center">
                    <ul class="list-group">
                        <li class="list-group-item"> <b>Numero de artículos:</b> 3</li>
                        <li class="list-group-item"> <b>Precio total:</b> 17 €</li>
                    </ul>
                </div>
                <div class="row justify-content-center">
                    <div class="d-grid gap-3">
                        <button type="button" class="btn btn-info mt-3"><i class="fas fa-truck"></i> Pedir</button>
                        <button type="button" class="btn btn-secondary mt-3"><i class="fas fa-trash"></i> Borrar</button>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</div>
</div>
  );
}

export default BascketOrders;