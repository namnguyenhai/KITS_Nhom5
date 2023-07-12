import pd from "assets/images/product/model6.svg";

const data = [
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        price: "236, 00 $",
        tag: "-30%",
        color: [
            "blue",
            "red",
            "green"
        ]
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: "115, 00 EURO",
        price: "85, 00 EURO",
        tag: "-30%",
        color: [
            "blue",
            "red",
            "green"
        ]
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: "115, 00 EURO",
        price: "85, 00 EURO",
        tag: "-30%",
        color: [
            "blue",
            "red",
            "green"
        ]
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: "115, 00 EURO",
        price: "85, 00 EURO",
        tag: "-30%",
        color: [
            "blue",
            "red",
            "green"
        ]
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: "115, 00 EURO",
        price: "85, 00 EURO",
        tag: "-30%",
        color: [
            "blue",
            "red",
            "green"
        ]
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: "115, 00 EURO",
        price: "85, 00 EURO",
        tag: "-30%",
        color: [
            "blue",
            "red",
            "green"
        ]
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: "115, 00 EURO",
        price: "85, 00 EURO",
        tag: "-30%",
        color: [
            "blue",
            "red",
            "green"
        ]
    },
    {
        name: "Angels malu zip jeans slim black used",
        bgImage: pd,
        category: "top women",
        oldprice: "115, 00 EURO",
        price: "85, 00 EURO",
        tag: "-30%",
        color: [
            "blue",
            "red",
            "green"
        ]
    },
];

export const products = {
    state: {
        listProduct: data,
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        setListProduct(state, listProduct) {
            return {
                ...state,
                listProduct,
            };
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