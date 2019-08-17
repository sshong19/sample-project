import React from 'react';
import styles from './Header.module.scss';
import { connect } from 'react-redux';
import { getAddedIds } from '../reducers/cart';

import {CartIcon} from '../assets/icons/CartIcon';
import { getCartProducts, getTotalQuantity } from '../reducers';
/**
 * Header
 * @param {title, String}
 * @param {carCount, Integer}
 */
const Header = ({title, quantity}) => {
    return(
        <div className={styles.HeaderContainer}>
            <h1 className={styles.Title}>Acme Store</h1>
            <a className={`${styles.CartSummary} ${quantity && styles.Active}`}><CartIcon/> {quantity ? quantity : "Your cart is empty"}</a>
        </div>
    )
}

const mapStateToProps = (state) => ({
    quantity: getTotalQuantity(state)
})

export default connect(mapStateToProps, null)(Header)

