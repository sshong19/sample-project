/**
 * Mocking client-server processing
 */
import _products from './products.json'
import { parser } from './parser';
import axios from 'axios'

const TIMEOUT = 100

export default {
  getProducts: (cb) => axios({
    method: 'GET',
    url: 'http://tech.work.co/shopping-cart/products.json'
  }).then(response => {
    return cb(parser(response.data));
  }),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
