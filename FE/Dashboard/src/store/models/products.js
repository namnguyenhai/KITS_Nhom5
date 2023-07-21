// import pd from "assets/images/product/model6.svg";
import { ALL_PRODUCTS } from "api";
import axios from "axios";

// const data = [
//     {
//         name: "Angels malu zip jeans slim black used",
//         bgImage: pd,
//         category: "top women",
//         price: 236,
//         tag: "-30%",
//         color: [
//             "blue",
//             "red",
//             "green"
//         ]
//     },
//     {
//         name: "Angels malu zip jeans slim black used",
//         bgImage: pd,
//         category: "top women",
//         oldprice: 115,
//         price: 85,
//         tag: "-30%",
//         color: [
//             "blue",
//             "red",
//             "green"
//         ]
//     },
//     {
//         name: "Angels malu zip jeans slim black used",
//         bgImage: pd,
//         category: "top women",
//         oldprice: 115,
//         price: 85,
//         tag: "-30%",
//     },
//     {
//         name: "Angels malu zip jeans slim black used",
//         bgImage: pd,
//         category: "top women",
//         oldprice: 115,
//         price: 85,
//         tag: "-30%",
//     },
//     {
//         name: "Angels malu zip jeans slim black used",
//         bgImage: pd,
//         category: "top women",
//         oldprice: 115,
//         price: 85,
//         tag: "-30%",
//     },
//     {
//         name: "Angels malu zip jeans slim black used",
//         bgImage: pd,
//         category: "top women",
//         oldprice: 115,
//         price: 85,
//         tag: "-30%",
//     },
//     {
//         name: "Angels malu zip jeans slim black used",
//         bgImage: pd,
//         category: "top women",
//         oldprice: 115,
//         price: 85,
//         tag: "-30%",
//     },
//     {
//         name: "Angels malu zip jeans slim black used",
//         bgImage: pd,
//         category: "top women",
//         oldprice: 115,
//         price: 85,
//         tag: "-30%",
//         color: [
//             "blue",
//             "red",
//             "green"
//         ]
//     },
// ];

export const products = {
  state: {
    listProduct: [],
    product: '',
    count: 0,
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
        product,
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
    async fetchProducts() {
      try {
        const response = await axios.get(ALL_PRODUCTS);
        const data = response.data.product;
        // Log the fetched data and its type to the console
        // console.log('Fetched data:', data);
        // console.log('Type of data:', typeof data);
        // call data
        dispatch.products.setListProduct(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  }),
  selectors: (slice, createSelector) => ({
    selectCount() {
      return slice((state) => state.count);
    },
  }),
};
