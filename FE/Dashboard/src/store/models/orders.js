import axios from "axios";
import { toast } from 'react-toastify';
import { CHECKOUT } from "api";

export const orders = {
    state: {
        orderList: []
    },

    reducers: {
        setOrders(state, orders) {
            return {
                ...state,
                orders,
            }
        }
    },

    effects: (dispatch) => ({
    //   handle state changes with impure functions.
    //   use async/await for async actions
        async checkout() {
            await axios.post(CHECKOUT)
                .then(res => toast.success("CHECKOUT SUCCESSFULLY", {
                    position: toast.POSITION.TOP_CENTER,
                }))
                .catch(err => toast.error("CHECKOUT FAILURE", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        }


    }),

    selectors: (slice, createSelector) => ({
        selectOrders() {
            return slice(state => state.orders)
        },

    })
}