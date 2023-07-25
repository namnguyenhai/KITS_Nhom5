import axios from "axios";
import { STATISTIC_ORDER_BY_MONTH } from "api";

export const orders = {
    state: {
        orderList: [],
    }, // initial state
    reducers: {
      // handle state changes with pure functions
        setOrders(state, orderList) {
            return {
                ...state,
                orderList
            }
        },
        setOrdersByMonth(state, orderStatistics) {
            return {
                ...state,
                orderStatistics
            }
        },

    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
        statisticOrderByMonth() {
            axios.get(STATISTIC_ORDER_BY_MONTH) 
                .then(res => this.setOrdersByMonth(res.data.orderstatistics))
                .catch(err => console.log(err))
        }
    }),
    selectors: (slice, createSelector) => ({
        selectSizes() {
            return slice(state => state.orders)
        },

    })
};