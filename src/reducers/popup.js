import {
    TOGGLE_CART
} from '../constants/ActionTypes'

// Manages popup states for cart, and etc...
const initialState = {
    isCart: false
}

// Gets global popup state.
export const getPopupState = (state) => state

const popup = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_CART:
            return {...state, isCart: !state.isCart}
        default:
            return state;
    }
}

export default popup;