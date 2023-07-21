export const DOMAIN = "http://localhost:8080";

export const LOGIN_USER = `${DOMAIN}/api/login`;
export const REGISTER_USER = `${DOMAIN}/api/register`
export const ALL_PRODUCTS = `${DOMAIN}/products/getallproductsandstocks`
export const ADD_TO_CART = `${DOMAIN}/add-cart`;
export const GET_CART = `${DOMAIN}/cart`;
export const REMOVE_CART_BY_ID_SIZE_COLOR = `${DOMAIN}/remove-cart`;
export const UPDATE_CART = `${DOMAIN}/update-cart`;
export const CLEAR_CART = `${DOMAIN}/remove-all-cart`;
export const CHECKOUT = `${DOMAIN}/api/user/orders/checkout`;