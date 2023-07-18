import axios from "axios";

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
            const stock = "http://localhost:8080/stock/getAllProducts";
            axios.get(stock)
                .then(res => this.setStock(res.data.stock))
                .catch(err => console.log(err))
        },
        fetchStockByIdProduct(productId) {
            const stock = `http://localhost:8080/stocks/getstock/${productId}`;
            axios.get(stock)
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