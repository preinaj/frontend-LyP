// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1> Página Principal </h1>
      <Link to="/login">Seccion login</Link>
      <div>---</div>
      <Link to="/login/register">Seccion registro</Link>
      <div>---</div>
      <Link to="/order">Seccion orders</Link>
      <div>---</div>
      <Link to="/book">Seccion books</Link>
      <div>---</div>
      <Link to="/review">Seccion review</Link>

    </div>
  );
}

export default Home;