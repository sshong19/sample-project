import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, toggleCartPopup, addToCart, removeFromCart, removeProductFromCart} from '../actions'
import { getTotal, getCartProducts, getCartPopupState } from '../reducers'
import Cart from '../components/Cart'
import { CloseIcon } from '../assets/icons/CloseIcon'

const CartContainer = ({ products, total, checkout, isCart, toggleCartPopup, addToCart, removeFromCart, removeProductFromCart}) => isCart ? (
  <div className="overlay">
    <div className="content">
      <span className="close" onClick={toggleCartPopup}><CloseIcon /></span>
      <Cart
        isCart={isCart}
        products={products}
        total={total}
        onCheckoutClicked={() => checkout(products)} 
        onAdd={addToCart}
        onRemove={removeFromCart}
        onProductRemove={removeProductFromCart}
      />
    </div>
  </div>
) : null

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  removeProductFromCart: PropTypes.func
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  isCart: getCartPopupState(state)
})

export default connect(
  mapStateToProps,
  { checkout, toggleCartPopup, addToCart, removeFromCart, removeProductFromCart}
)(CartContainer)
