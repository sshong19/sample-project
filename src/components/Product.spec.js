import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

const setup = props => {
  const actions = {
    onAddToCartClicked: jest.fn()
  }
  const component = shallow(
    <Product {...props} {...actions}/>
  )

  return {
    component: component, 
    button: component.find('button'),
    actions: actions
  }
}

describe('Product component', () => {
  it('should render title and price', () => {
    const { component } = setup({ title: 'Test Product', price: 9.99 })
    expect(component.find('h2').text()).toBe('Test Product')
    expect(component.find('span').text()).toBe('$9.99')
  })

  it('should render title, price, and remove button, when product is with cart popup', () => {
    const {component} = setup({isCartProduct: true, title: 'Test Product', price: 9.99, })
    expect(component.find('h2').text()).toBe('Test Product')
    expect(component.find('span').text()).toBe('$9.99')
    expect(component.find('button').text()).toBe('Remove')
  })

  describe('when given inventory', () => {
    it('should render title, price, and inventory', () => {
      const { component } = setup({ title: 'Test Product', price: 9.99, inventory: 6 })
      expect(component.find('p').text()).toBe('6 remaining')
    })
  })

  describe('when product inventory is 0', () => {

    it('should not disable button', () => {
      const { button } = setup({isCartProduct: false, inventory: 1})
      expect(button.prop('disabled')).toEqual('')
    })
  
    it('should call action on button click', () => {
      const { button, actions } = setup({isCartProduct: false})
      button.simulate('click')
      expect(actions.onAddToCartClicked).toBeCalled()
    })
  
    it('should call action on button click', () => {
      const { button, actions } = setup()
      button.simulate('click')
      expect(actions.onAddToCartClicked).toBeCalled()
    })

    it('should render Sold Out message', () => {
      const { button } = setup({isCartProduct: false, inventory: 0})
      expect(button.text()).toMatch(/^Sold Out/)
    })

    it('should disable button', () => {
      const { button } = setup({isCartProduct: false, inventory: 0})
      expect(button.prop('disabled')).toEqual('disabled')
    })
  })
})
