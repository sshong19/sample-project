import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styles from './Cart.module.scss';
import { CartIconLarge } from '../assets/icons/CartIconLarge';

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const {Cart, Title, Warning, WarningContainer} = styles;
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <div className={Warning}>
      <CartIconLarge/>
      <p>Please add some products to your cart.</p>
    </div>  )
  return (
    <div className={Cart}>
      <h3 className={Title}>Your cart</h3>
      <hr className="seperator"></hr>
      <div className={WarningContainer}>{nodes}</div>
      {hasProducts && <p>Total: &#36;{total}</p>}
      {hasProducts && <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>}
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
