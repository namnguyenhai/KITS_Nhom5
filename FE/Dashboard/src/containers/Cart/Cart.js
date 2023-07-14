import { Helmet, HelmetProvider } from "react-helmet-async";
import './Cart.scss';
import Tab from 'components/Tab';
import { cartPd1, cartPd2 } from "components/ImageList";
import { Button } from "components/Button";
import ButtonQuantity from "components/ButtonQuantity";
import { useState, useEffect } from "react";
const Cart = () => {
    const page = "Shopping Cart";
    const products = [
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

    const [quantity, setQuantity] = useState(1);

    const handleGetQuantity = (qty) => {
        setQuantity(qty)
    }

    const USDDollar = price => {
        return new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'USD',
            currencyDisplay: 'code'
        }).format(price);
    }

    const calculateTotal = (total) => <td> {USDDollar(total)} </td>

    return (
        <HelmetProvider>
            <Helmet>
                <title> {page} </title>
            </Helmet>
            <div className="shopping-cart">
                <Tab className="cart-tab" page={page} category="Womens Dress" product="Angels malu" />
                <h1>Shopping Cart</h1>
                <div className="cart-container">
                    <div className="product-list">
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-left">Product</th>
                                    <th>Price</th>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                { products?.map(pd => (
                                    <tr key={pd.id}>
                                        <td className="d-flex"> 
                                            <img src={pd.image} alt="" />
                                            <div className="d-flex flex-column justify-center">
                                                <p> {pd.name} </p>
                                                <div className="wrapper-btn">
                                                    <Button
                                                        bgColor={pd.color}
                                                        width="20px"
                                                        height="20px"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td> {USDDollar(pd.price)} </td>
                                        <td> {pd.size} </td>
                                        <td> 
                                            <ButtonQuantity
                                                initial={pd.quantity}
                                                handleGetQuantity={handleGetQuantity} 
                                            /> 
                                        </td>
                                        {calculateTotal(pd.price * pd.quantity)} 
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                    <div className="checkout">

                    </div>
                </div>
            </div>    
        </HelmetProvider>
    )
}

export default Cart;