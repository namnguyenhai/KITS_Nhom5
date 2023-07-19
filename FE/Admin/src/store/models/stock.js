import axios from "axios";
import { GET_STOCK_PRODUCT, GET_STOCK_BY_ID_PRODUCT } from "api";

export const stock = {
    state: {
        stockList: [],
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      setStock(state, stockList) {
        return {
            ...state,
            stockList
        }
      },

    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
        fetchProducts(payload, rootState) {
            axios.get(GET_STOCK_PRODUCT)
                .then(res => this.setStock(res.data.stock))
                .catch(err => console.log(err))
        },
        fetchStockByIdProduct(productId) {
            axios.get(`${GET_STOCK_BY_ID_PRODUCT}/${productId}`)
                .then(res => this.setStock(res.data.stock))
                .catch(err => console.log(err))
        }
    }),
    selectors: (slice, createSelector) => ({
        selectProducts() {
            return slice(state => state.stock)
        },

    })
};