import axios from "axios";
import { toast } from 'react-toastify';
import { CHECKOUT_CODE, CREATE_PAYMENT, CHECKOUT_ONLINE } from "api";
import Cookies from "js-cookie";

const token = Cookies.get('token');
const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
};


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
        // handle state changes with impure functions.
        // use async/await for async actions

        async checkoutCode() {
            try {

                if (!token) {
                    return toast.error("Token not found", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                }

                await axios.post(CHECKOUT_CODE, null, { headers });

                toast.success("CHECKOUT SUCCESSFULLY", {
                    position: toast.POSITION.TOP_CENTER,
                });

                // Xử lý kết quả khi checkout thành công (nếu cần)
                // Ví dụ: dispatch action để cập nhật trạng thái của ứng dụng sau khi checkout thành công
                // dispatch({ type: 'checkoutSuccess', payload: response.data });
            } catch (error) {
                toast.error("CHECKOUT FAILURE", {
                    position: toast.POSITION.TOP_CENTER,
                });

                // Xử lý lỗi khi checkout thất bại (nếu cần)
                // Ví dụ: dispatch action để xử lý lỗi hoặc hiển thị thông báo lỗi cho người dùng
                // dispatch({ type: 'checkoutFailure', payload: error.message });
            }
        },
        async createPayment() {
            await axios.post(CREATE_PAYMENT)
                .then(res => window.location.href = res.data.url)
                .catch(err => toast.error("CHECKOUT ONLINE FAILURE", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        },
        async checkoutOnline() {
            return await axios.post(CHECKOUT_ONLINE, null, { headers })
                .then(res => {})
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