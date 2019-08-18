import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts, getCartPopupState } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout, isCart}) => isCart ? (
  <Cart
  products={products}
  total={total}
  onCheckoutClicked={() => checkout(products)} />
) : null

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  isCart: getCartPopupState(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
