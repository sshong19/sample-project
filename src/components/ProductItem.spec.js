import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'
import ProductItem from './ProductItem'

const setup = product => {
  const actions = {
    onAddToCartClicked: jest.fn()
  }

  const component = shallow(
    <ProductItem product={product} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find('button'),
    product: component.find(Product)
  }
}

let productProps

describe('ProductItem component', () => {
  beforeEach(() => {
    productProps = {
      title: 'Product 1',
      price: 9.99,
      inventory: 6,
    }
  })

  it('should render product', () => {
    const { product, actions} = setup(productProps)
    expect(product.props()).toEqual({ title: 'Product 1', price: 9.99, inventory: 6, onAddToCartClicked: actions.onAddToCartClicked})
  })
})
