import pd from "assets/images/product/model6.svg";

const data = [
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        price: 236,
        tag: "-30%",
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: 115,
        price: 85,
        tag: "-30%",
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: 115,
        price: 85,
        tag: "-30%",
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: 115,
        price: 85,
        tag: "-30%",
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: 115,
        price: 85,
        tag: "-30%",
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: 115,
        price: 85,
        tag: "-30%",
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: 115,
        price: 85,
        tag: "-30%",
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: 115,
        price: 85,
        tag: "-30%",
    },
];

export const products = {
    state: {
        listProduct: data,
        product: ''
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        setListProduct(state, listProduct) {
            return {
                ...state,
                listProduct,
            };
        },

        setProductById(state, product) {
            return {
                ...state,
                product
            }
        },

        setCount(state, count) {
            return {
                ...state,
                count,
            };
        },
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        //   async fetchProducts() {
        //     const data = await fetch('https://fakestoreapi.com/products')
        //     .then((response) => response.json());
        //     this.setListProduct(data);
        //   },
    }),
    selectors: (slice, createSelector) => ({
        selectCount() {
            return slice((state) => state.count);
        },
    }),
};