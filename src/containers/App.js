import React from 'react'
import '../css/main.css';
import styles from './App.module.scss';
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import Header from './Header';

const App = () => (
  <div>
    <Header />
    <hr className={styles.Seperator} />
    <ProductsContainer />
    <hr className={styles.Seperator} />
    <CartContainer />
  </div>
)

export default App
