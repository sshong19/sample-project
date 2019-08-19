import React from 'react'
import PropTypes from 'prop-types'
import styles from './Product.module.scss'
import { getImage } from '../api/image';

const Product = ({ isCartProduct, price, inventory, title, onAddToCartClicked}) => {

  const {Product, Image, Description, Info, Title, Price, LeftAlign, Remaining, ButtonContainer, RemoveButton, Button, ClearBorderRadius, CartImage, CartDescription} = styles; 
  return(
    <div className={`${Product} ${isCartProduct && ClearBorderRadius}`}>
      <img className={isCartProduct ? CartImage: Image} src={getImage(title)}></img>
      <div className={isCartProduct? CartDescription : Description}>
        <div className={isCartProduct && Info}>
          <h2 className={Title}>{title}</h2>
          <span className={`${Price} ${isCartProduct && LeftAlign}`}>${price}</span>
          {!isCartProduct && <p className={Remaining}>{inventory} remaining</p>}
        </div>
        <div className={ButtonContainer}>
          {isCartProduct ? <button className={RemoveButton}>Remove</button> : 
          <button
            className={Button}
            onClick={onAddToCartClicked}
            disabled={inventory > 0 ? '' : 'disabled'}>
            {inventory > 0 ? 'Add to cart' : 'Sold Out'}
          </button>}
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  isCartProduct: PropTypes.bool,
  onAddToCartClicked: PropTypes.func
}

export default Product
