import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styles from './Cart.module.scss';
import { CartIconLarge } from '../assets/icons/CartIconLarge';

const Cart  = ({ products, total, onCheckoutClicked, onAdd, onRemove}) => {
  const {
    CartBox, CartSummary, Title, Warning, 
    WarningContainer, ProductContainer, Button, ButtonContainer, 
    PaymentSummary, Label, Price, AmountContainer, AmountButton, Amount,
    LeftBorderRadius, RightBorderRadius
  } = styles;
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div style={{marginBottom: 20}}>
        <Product
          isCartProduct={true}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
        />
        <div className={AmountContainer}>
            <div className={`${AmountButton} ${LeftBorderRadius}`} onClick={() => onRemove(product.id)}>&#8722;</div>
            <div className={Amount}><span>{product.quantity}</span></div>
            <div className={`${AmountButton} ${RightBorderRadius}`} onClick={() => onAdd(product.id)}>&#43;</div>          
        </div>
      </div>
    )
  ) : (
    <div className={Warning}>
      <CartIconLarge/>
      <p>Please add some products to your cart.</p>
    </div>  )
  return (
    <div className={CartBox}>
      <div className={CartSummary}>
        <h3 className={Title}>Your cart</h3>
        <hr className="seperator"></hr>
        <div className={hasProducts?  ProductContainer : WarningContainer}>{nodes}</div>
        <hr className="seperator"></hr>
        <div className={PaymentSummary}>
          <span className={Label} style={{paddingBottom: "2.5%"}}>Subtotal</span><span className={Price} style={{paddingBottom: "2.5%"}}>&#36;{total}</span>
          <span className={Label}>Taxes</span><span className={Price}>&#36;{(total * 0.0807).toFixed(2)}</span>
        </div>
        <hr className="seperator"></hr>
        <div className={PaymentSummary}>
          <span className={Label}>Total</span><span className={Price}>&#36;{(total * 1.0807).toFixed(2)}</span>
        </div>
        </div>
      <div className={ButtonContainer}>
         <button 
          className={Button}
          onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
