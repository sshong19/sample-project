import React from 'react'
import { shallow } from 'enzyme'
import CartLink from './CartLink'
import { CartIcon } from '../assets/icons/CartIcon';

const setup = props => {
    const actions = {
        onCartClicked: jest.fn()
    }
    const component = shallow(
        <CartLink {...props} {...actions} />
    )
    return {
        component: component,
        actions: actions
    }
}

describe ('CartLink component', () => {
    
    it ('should render total quantity of cart and its icon', () => {
        const { component } = setup({quantity: 5})
        expect(component.find('a').text()).toEqual('<CartIcon /> 5')
    })

    it('should display that cart is empty when quantity is 0', () => {
        const { component } = setup({quantity: 0})
        expect(component.find('a').text()).toEqual(`<CartIcon /> Your cart is empty`)
        expect(component.find('a').contains(<CartIcon />))
    })

    it('should call action on link click', () => {
        const { component, actions } = setup({quantity: 0});
        component.find('a').simulate('click');
        expect(actions.onCartClicked).toBeCalled();
    })
})