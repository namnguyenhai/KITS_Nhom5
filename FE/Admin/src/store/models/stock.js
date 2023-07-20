import axios from "axios";
import { GET_STOCK_PRODUCT, GET_STOCK_BY_ID_PRODUCT, ADD_STOCK, DELETE_STOCK } from "api";

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
        fetchStock(payload, rootState) {
            axios.get(GET_STOCK_PRODUCT)
                .then(res => this.setStock(res.data.stock))
                .catch(err => console.log(err))
        },
        async addStock(data) {
            await axios.post(ADD_STOCK, data)
              .then(res => this.setStock(res.data.stock))
              .catch(err => console.log(err))
        },
        fetchStockByIdProduct(productId) {
            axios.get(`${GET_STOCK_BY_ID_PRODUCT}/${productId}`)
                .then(res => this.setStock(res.data.stock))
                .catch(err => console.log(err))
        },
        deleteStock(stockId) {
            axios.delete(`${DELETE_STOCK}/${stockId}`)
                .then(res => this.setStock(res.data.stock))
                .catch(err => console.log(err))
        }
    }),
    selectors: (slice, createSelector) => ({
        selectStock() {
            return slice(state => state.stock)
        },

    })
};