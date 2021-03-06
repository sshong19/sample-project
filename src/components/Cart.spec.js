import React from 'react'
import { shallow } from 'enzyme'
import Cart from './Cart'
import Product from './Product'

const setup = (total, products = []) => {
  const actions = {
    onCheckoutClicked: jest.fn(), 
    onRemove: jest.fn()
  }

  const component = shallow(
    <Cart products={products} total={total} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find('button'),
    products: component.find(Product),
    p: component.find('p')
  }
}

describe('Cart component', () => {
  it('should display add some products message', () => {
    const { p } = setup()
    expect(p.text()).toMatch("Please add some products to your cart")
  })

  describe('when given product', () => {
    const product = [
      {
        id: 1,
        title: 'Product 1',
        price: 9.99,
        quantity: 1
      }
    ]

    it('should render products', () => {
      const { component } = setup('9.99', product)
      expect(component.find(Product))
    })

    it('should not disable button', () => {
      const { button } = setup('9.99', product)
      expect(button.prop('disabled')).toEqual('')
    })

    it('should call action on button click', () => {
      const { button, actions } = setup('9.99', product)
      button.simulate('click')
      expect(actions.onCheckoutClicked).toBeCalled()
    })
  })
})
