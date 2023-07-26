import axios from "axios";
import { toast } from 'react-toastify';
import { CHECKOUT, GET_ORDERS, GET_ORDER_BY_ID } from "api";
import Cookies from "js-cookie";

const userId = Cookies.get('userId');

export const orders = {
    state: {
        orderList: []
    },

    reducers: {
        setOrders(state, orderList) {
            return {
                ...state,
                orderList,
            }
        },
        setOrder(state, order) {
            return {
                ...state,
                order,
            }
        }
    },

    effects: (dispatch) => ({
    //   handle state changes with impure functions.
    //   use async/await for async actions
        fetchOrders() {
            axios.get(GET_ORDERS, { params: { userId } })
                .then(res => this.setOrders(res.data.orderwithusername))
                .catch(err => toast.error("GET ORDERS FAILURE", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        },
        getOrderById(orderId) {
            axios.get(GET_ORDER_BY_ID, { params: { orderIds: orderId } })
                .then(res => this.setOrder(res.data.orderwithusername))
                .catch(err => toast.error("GET ORDERS FAILURE", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        },
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