import { cartPd1, cartPd2 } from "components/ImageList";

const productsCart = [
    {
        id: 1,
        name: "Angels malu zip jeans slim black used",
        image: cartPd1,
        price: 120,
        size: "W32",
        color: "blue",
        quantity: 2,
    },
    {
        id: 2,
        name: "Angels malu zip jeans slim black used",
        image: cartPd2,
        price: 120,
        size: "W32",
        color: "pink",
        quantity: 1,
    },
];

export const cart = {
    state: {
        products: productsCart
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
        // handle state changes with impure functions.
      // use async/await for async actions
    //   async fetchProducts(payload, rootState) {
    //     const data = await fetch('https://dummyjson.com/products')
    //         .then(res => res.json())
    //         this.setProductsList(data.products);
    //   },
    }),

    selectors: (slice, createSelector) => ({
        selectCart() {
            return slice(state => state.cart)
        },

    })
}