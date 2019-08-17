import React from 'react'
import '../css/main.css';
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import Header from './Header';

const App = () => (
  <div>
    <Header />
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
