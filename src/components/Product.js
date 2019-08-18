import React from 'react'
import PropTypes from 'prop-types'
import styles from './Product.module.scss'
import { getImage } from '../api/image';

const Product = ({ price, inventory, title, onAddToCartClicked}) => (
  <div className={styles.Product}>
    <img className={styles.Image} src={getImage(title)}></img>
    <div className={styles.Description}>
      <div className={styles.Info}>
        <h2 className={styles.Title}>{title}</h2>
        <span className={styles.Price}>${price}</span>
      </div>
      <p className={styles.Remaining}>{inventory} remaining</p>
      <div className={styles.ButtonContainer}>
        <button
          className={styles.Button}
          onClick={onAddToCartClicked}
          disabled={inventory > 0 ? '' : 'disabled'}>
          {inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </div>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
