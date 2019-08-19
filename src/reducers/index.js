import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'
import popup, * as fromPopup from './popup'
import { get } from 'http';

export default combineReducers({
  cart,
  products,
  popup
})

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)
const getPopupState = (state) => fromPopup.getPopupState(state.popup)

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getTotalQuantity = state => 
  getAddedIds(state)
    .reduce((total, id) => 
      total + getQuantity(state, id), 
      0
    )

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))

export const getCartPopupState = state => getPopupState(state).isCart
