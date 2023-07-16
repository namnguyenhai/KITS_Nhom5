import { Helmet, HelmetProvider } from "react-helmet-async";
import './Cart.scss';
import Tab from 'components/Tab';
import { Button } from "components/Button";
import ButtonQuantity from "components/ButtonQuantity";
import { useSelector, useDispatch } from 'react-redux';
import { Save, Close } from 'components/ImageList';

const Cart = () => {
    const page = "Shopping Cart";
    
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const handleGetQuantity = (qty, productId) => {
        const updatedCart = cart.products.map((product) => {
            if (product.id === productId) {
                return { ...product, quantity: qty };
            }
            return product;
        });
        dispatch.cart.setCart(updatedCart);
    };

    const USDDollar = (total) => {
        return new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'USD',
            currencyDisplay: 'code'
        }).format(total);
    }

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
                                { cart.products?.map(pd => (
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
                                                productId={pd.id}
                                                handleGetQuantity={handleGetQuantity} 
                                            /> 
                                        </td>
                                        <td> {USDDollar(pd.price * pd.quantity)} </td>
                                        <td>
                                            <div className="d-flex">
                                                <Button className="cart-btn-action">
                                                    <Save />
                                                </Button>
                                                <Button className="cart-btn-action">
                                                    <Close />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )) }
                                <tr>
                                    <td colSpan={6}>
                                        <div className="d-flex justify-between">
                                            <Button type="submit" className="cart-btn">
                                            <p>Continue shopping</p>
                                            </Button>
                                            <Button type="button" className="cart-btn">
                                            <p>Clear shopping cart</p>
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="checkout">
                        <div className="checkout">
                                            
                        </div>                        
                    </div>
                </div>
            </div>    
        </HelmetProvider>
    )
}

export default Cart;