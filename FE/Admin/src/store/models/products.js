import axios from "axios";
import { GET_PRODUCT, ADD_PRODUCT } from "api";

export const products = {
    state: {
        productList: [],
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      setProducts(state, productList) {
        return {
            ...state,
            productList
        }
      },

    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
      fetchProducts(payload, rootState) {
        axios.get(GET_PRODUCT)
          .then(res => this.setProducts(res.data.product))
          .catch(err => console.log(err))
      },
      addProduct(data) {
        axios.post(ADD_PRODUCT, data)
          .then(res => this.setProducts(res.data.product))
          .catch(err => console.log(err))
      }
    }),
    selectors: (slice, createSelector) => ({
        selectProducts() {
            return slice(state => state.products)
        },

    })
};