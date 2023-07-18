import axios from "axios";

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
        const products = "http://localhost:8080/products/getAllProducts";
        axios.get(products)
            .then(res => this.setProducts(res.data.product))
            .catch(err => console.log(err))
      },
    }),
    selectors: (slice, createSelector) => ({
        selectProducts() {
            return slice(state => state.products)
        },

    })
};