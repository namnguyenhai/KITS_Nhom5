import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "api";

export const products = {
    state: {
        listProduct: [],
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        setListProduct(state, listProduct) {
            return {
                ...state,
                listProduct,
            };
        },
        setProduct(state, product) {
            return {
                ...state,
                product,
            };
        },
    },
    effects: (dispatch) => ({
        async fetchProducts() {
            await axios.get(GET_PRODUCTS) 
                .then(res => this.setListProduct(res.data))
                .catch(err => console.log(err))
        },
        async getProductById(productId) {
            await axios.get(`${GET_PRODUCT_BY_ID}/${productId}`) 
                .then(res => this.setProduct(res.data.product[0]))
                .catch(err => console.log(err))
        },
    }),
    selectors: (slice, createSelector) => ({
        
    }),
};