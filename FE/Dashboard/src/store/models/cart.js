import axios from "axios";
import { GET_CART, ADD_TO_CART } from "api";
import { cartPd1, cartPd2 } from "components/ImageList";
// const productsCart = [
//     {
//         id: 1,
//         name: "Angels malu zip jeans slim black used",
//         image: cartPd1,
//         price: 120,
//         size: "W32",
//         color: "blue",
//         quantity: 2,
//     },
//     {
//         id: 2,
//         name: "Angels malu zip jeans slim black used",
//         image: cartPd2,
//         price: 120,
//         size: "W32",
//         color: "pink",
//         quantity: 1,
//     },
// ];

export const cart = {
    state: {
        products: []
    },

    reducers: {
        setCart(state, products) {
            return {
                ...state,
                products,
            }
        }
    },

    effects: (dispatch) => ({
    //   handle state changes with impure functions.
    //   use async/await for async actions
        async fetchCart(payload, rootState) {
            await axios.get(GET_CART)
                .then(res => this.setCart(res.data))
                .catch(err => console.log(err))
        },
        async addToCart(payload, rootState) {
            await axios.get(ADD_TO_CART)
                .then(res => this.setCart(res.data))
                .catch(err => console.log(err))
        },

    }),

    selectors: (slice, createSelector) => ({
        selectCart() {
            return slice(state => state.cart)
        },

    })
}