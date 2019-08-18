import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import { connect } from 'react-redux';
import { CartIcon } from '../assets/icons/CartIcon';
import { toggleCartPopup } from '../actions';
import { getTotalQuantity } from '../reducers';
import CartLink from '../components/CartLink';
/**
 * Header
 * @param {title, String}
 * @param {quantity, Integer}
 */
const Header = ({title, quantity, toggleCartPopup}) => {
    return(
        <div className={styles.HeaderContainer}>
            <h1 className={styles.Title}>{title}</h1>
            <CartLink onCartClicked={toggleCartPopup}/>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
    quantity: getTotalQuantity(state)
})

export default connect(mapStateToProps, { toggleCartPopup })(Header)

