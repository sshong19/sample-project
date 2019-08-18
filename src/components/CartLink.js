import React from 'react';
import styles from './CartLink.module.scss';
import { CartIcon } from '../assets/icons/CartIcon';

const CartLink = ({quantity, onCartClicked}) => (
    <a className={`${styles.CartSummary} ${quantity && styles.Active}`} onClick={onCartClicked}><CartIcon/> {quantity ? quantity : "Your cart is empty"}</a>
)

export default CartLink