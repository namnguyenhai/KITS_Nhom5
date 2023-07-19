import axios from "axios";
import { GET_CART, ADD_TO_CART, REMOVE_CART_BY_ID_SIZE_COLOR, CLEAR_CART } from "api";
// import { cartPd1, cartPd2 } from "components/ImageList";
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
import { toast } from 'react-toastify';

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
        async fetchCart() {
            await axios.get(GET_CART)
                .then(res => this.setCart(res.data))
                .catch(err => console.log(err))
        },
        
        async addToCart(product) {
            await axios.post(ADD_TO_CART, product)
                .then(res => {
                    this.setCart(res.data);

                    return toast.success("THÊM SẢN PHẨM VÀO GIỎ HÀNG THÀNH CÔNG", {
                        position: toast.POSITION.TOP_CENTER,
                    })
                })
                .catch(err => toast.error("THÊM SẢN PHẨM VÀO GIỎ HÀNG KHÔNG THÀNH CÔNG", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        },
        async removeCart(productId, size, color) {
            await axios.post(`${REMOVE_CART_BY_ID_SIZE_COLOR}/${productId}/${size}/${color}`)
                .then(res => toast.success("XÓA GIỎ HÀNG THÀNH CÔNG", {
                    position: toast.POSITION.TOP_CENTER,
                }))
                .catch(err => toast.error("XÓA GIỎ HÀNG KHÔNG THÀNH CÔNG", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        },
        async removeCart() {
            await axios.post(`${CLEAR_CART}`)
                .then(res => toast.success("XÓA TẤT CẢ SẢN PHẨM TRONG GIỎ HÀNG THÀNH CÔNG", {
                    position: toast.POSITION.TOP_CENTER,
                }))
                .catch(err => toast.success("XÓA TẤT CẢ SẢN PHẨM TRONG GIỎ HÀNG KHÔNG THÀNH CÔNG", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        },

    }),

    selectors: (slice, createSelector) => ({
        selectCart() {
            return slice(state => state.cart)
        },

    })
}