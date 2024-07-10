
import Products from './components/Products'
import Orders from './components/Orders'



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/NavBar';


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

const App = () => {
  return (

    <Router>

      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Register />} />
        <Route path="/" element={<Navbar />} />
      </Routes>
    </Router>
  );

    <>
    <Products />
    <Orders />
    </>
  )

}


export default App;
