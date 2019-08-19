import React from 'react'
import '../css/main.css';
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import Header from './Header';

const App = () => (
  <div style={{padding: "3.3% 6.6%"}}>
    <Header title={"Acme Store"} />
    <hr className="seperator" />
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
