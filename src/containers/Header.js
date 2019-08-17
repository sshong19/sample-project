import React from 'react';
import styles from './Header.module.scss';
import { connect } from 'react-redux';
import { getCartProducts } from '../reducers';

import {CartIcon} from '../assets/icons/CartIcon';
/**
 * Header
 * @param {title, String}
 * @param {carCount, Integer}
 */
const Header = ({title, quantity}) => {
    return(
        <div className={styles.HeaderContainer}>
            <h1 className={styles.Title}>Acme Store</h1>
            <a className={styles.CartSummary}><CartIcon/> Your cart is empty</a>
        </div>
    )
}

const mapStateToProps = (state) => ({
    quantity: getCartProducts(state).quantity
})

export default connect(mapStateToProps, null)(Header)

