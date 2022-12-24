import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import './App.css';
import Home from './Home';
import Product from './Product';


function App() {
  return (
    <Router>
    <nav className='header'>
      <Link to='/' className='logo'><i className="fas fa-bag-shopping"></i>Store</Link>
      <Link to='/' className='link'>home</Link>
      <Link to='/product' className='link'>Product</Link>
      <Link to='/about' className='link'>about</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product/>} />
        <Route path='/about' element={<About />} />
        </Routes>
        </Router>
  );
}

export default App;
