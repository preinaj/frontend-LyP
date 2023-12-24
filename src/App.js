import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import HistoryOrders from './components/Order/HistoryOrders';
import OrdersBascket from './components/Order/BascketOrders';
import OrderPage from './components/Order/OrderDetails';
import Books from './components/Book';
import Review from './components/Review';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/historyOrders" element={<HistoryOrders />} />
        <Route path="/ordersBascket" element={<OrdersBascket />} />
        <Route path="/historyOrders/1" element={<OrderPage />} />
        <Route path="/book" element={<Books />} />
        <Route path="/review" element={<Review />} />

        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
