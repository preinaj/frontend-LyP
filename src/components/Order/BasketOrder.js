
import React from 'react';

import './BasketOrders.css';

function BasketOrder() {
  return (
    <div className="card basket-order mb-5">
        <div className="card-header text-center basket-order-header">
            <h5>Pedido a vendedor @ElRinconDelLibro</h5>
        </div>
        <div className="card-body row align-items-center">
            <div className="col-md-7 basket-order-products">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div><p><b>Harry Potter y la Piedra Filosofal</b></p></div>
                        <div><p>Precio: 5 €/ud</p></div>
                        <div className="d-flex align-items-center">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                <label className="input-group-text">Unidades</label>
                                </div>
                                <div className="d-flex align-items-center">
                                    <form action="/update_quantity" method="post" className='update-quantity'>
                                        <input type="number" name="quantity" className="form-control" defaultValue={1} min={1}></input>
                                    </form>
                                    <button className="btn btn-danger btn-sm btn-delete ml-2"><i className="fas fa-trash"></i></button>
                                </div>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
            <div className="col-md-5 basket-order-data">
                <div className="row justify-content-center">
                    <ul className="list-group">
                        <li className="list-group-item"> <b>Numero de artículos:</b> 3</li>
                        <li className="list-group-item"> <b>Precio total:</b> 17 €</li>
                    </ul>
                </div>
                <div className="row justify-content-center">
                    <div className="d-grid gap-3">
                        <button type="button" className="btn btn-info mt-3"><i className="fas fa-truck"></i> Pedir</button>
                        <button type="button" className="btn btn-secondary mt-3"><i className="fas fa-trash"></i> Borrar</button>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default BasketOrder;