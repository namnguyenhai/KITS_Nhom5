import './Payment.scss';
import { HideDetail, ShowDetail } from 'components/ImageList';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Tab from 'components/Tab';
import { Button } from 'components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ArrowUp } from 'components/ImageList';
const Payment = () => {
    const page = "Create Payment";

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const [visibility, setVisibility] = useState("visible");

    const USDDollar = (total) => {
        return new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'USD',
        }).format(total);
    }

    const calculateSubtotal = () => {
        let subtotal = 0;
        cart.products.forEach((product) => {
          subtotal += product.price * product.quantity;
        });
        return subtotal;
    };


    return (
        <HelmetProvider>
            <Helmet>
                <title> {page} </title>
            </Helmet>
            <div className="payment">
                <Tab className="payment-tab" page={page} category="Womens Dress" product="Angels malu" />
                <h1>Payment</h1>
                <div className="payment-container">
                    <div className="payment-method">
                        <p>Payment Method:</p>
                        <div className="paymnet-check-order">
                            <p>Check / Money order</p>
                            <div className="payment-input-checked">
                                <input type="checkbox" />
                                <span>My billing and shipping address are the same</span>
                            </div>
                            <div className="payment-info">
                                <p>Vyacheslav Kulbitskii </p>
                                <p>Moskovski prospect 39/1, Apt. 147</p>
                                <p className="payment-info-phone">+375292169179</p>
                            </div>
                        </div>
                        <div className="payment-btn">
                            <Button>
                                <p>Place Order</p>
                            </Button>
                            <Button>
                                <p>Back</p>
                            </Button>
                        </div>
                        <div className="payment-discount">
                            <p>Apply Discount Code</p>
                            <div className="payment-discount-input">
                                <input 
                                    type="text" 
                                    placeholder="Enter discount code" 
                                />
                                <span>Apply Discount</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-summary">
                        <p>Order Summary</p>
                        <div className="d-flex justify-between total">
                            <p>Order Total</p>
                            <p> {USDDollar(calculateSubtotal())} </p>
                        </div>
                        <div 
                            className={`order-item-in-cart${visibility === "visible" ? " rotate" : ""}` }
                            onClick={() => visibility === "visible" ?
                                setVisibility("hidden") : setVisibility("visible")
                            }
                        >
                            <p>1 Item in Cart</p>
                            <ArrowUp />
                        </div>
                        <div className={`order-list${visibility === "visible" ? "" : " visibility"}`}>
                            { cart?.products.map(pd => (
                                <div className="order-item">
                                    <div className="d-flex">
                                        <img src={pd.image} alt="" />
                                        <div className="d-flex gap-1 flex-column">
                                            <p className="order-item-name"> {pd.name} </p>
                                            <div className="order-item-qty">
                                                <span>QTY:</span>
                                                <span> {pd.quantity} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p>{USDDollar(pd.price * pd.quantity)}</p>
                                </div>
                            )) }
                        </div>

                    </div>      
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Payment;