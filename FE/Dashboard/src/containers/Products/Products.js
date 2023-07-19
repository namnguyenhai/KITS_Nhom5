import { Helmet, HelmetProvider } from "react-helmet-async";
import './Products.scss';
import Tab from "components/Tab";
import { 
    product1, product2, product3, Heart, 
    Checked, Zoom, Facebook, Twitter, Pinterest, Instagram, 
    HideDetail, ShowDetail
} from 'components/ImageList';
import { Button } from "components/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCarousel } from "components/ProductCarousel";
import { useSelector, useDispatch } from "react-redux";
import ButtonQuantity from "components/ButtonQuantity";

const Products = () => {
    const page = "Products";

    const product = {
        id: 1,
        name: "Women Black Checked Fit and Flare Dress",
        price: 90,
        category: "Woment Dress",
        brand: "FENDI",
        color: ["black", "blue", "red", "white"],
        size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        image: [product1, product2, product3],
        desciption: (
            <div className="col">
                <div className="col-6">
                    <b>ABOUT PRODUCT</b>
                    <p>Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts. This tank features a smocked body, adjustable straps, scoop neckline, ruffled hems, and a cropped fit.</p>
                    <b>ADVANTAGES</b>
                    <li>Smocked body</li>
                    <li>Adjustable straps</li>
                    <li>Scoop neckline</li>
                    <li>Ruffled hems</li>
                    <li>Cropped length</li>
                    <li>Model is wearing a small</li>
                    <li>100% rayon</li>
                    <li>Machine washable</li>
                    <b>ADVANTAGES</b>
                    <li>Smocked body</li>
                    <li>Adjustable straps</li>
                    <li>Scoop neckline</li>
                </div>
                <div className="col-6">
                    <b>SHIPPING</b>
                    <p>
                        We offer Free Standard Shipping for all orders over $75 to the 50 states and the District of Columbia. The minimum order value must be $75 before taxes, shipping and handling. Shipping fees are non-refundable.
                        <br />
                        Please allow up to 2 business days (excluding weekends, holidays, and sale days) to process your order.
                        <br />
                        Processing Time + Shipping Time = Delivery Time
                    </p>
                </div>
            </div>
        )
    };

    const dispatch = useDispatch();
    const productsStore = useSelector((state) => state.products);
    const cart = useSelector((state) => state.cart.products);

    const iconShare = [ Facebook , Twitter, Pinterest, Instagram ];
    const [quantity, setQuantity] = useState(1);
    const [imgShow, setImgShow] = useState(product?.image[0]);

    const [active, setActive] = useState({
        color: '',
        size: '',
        image: product.image[0]
    });
    const [stateDesc, setStateDesc] = useState(false);

    const USDollar = new Intl.NumberFormat('de-US', {
        style: 'currency',
        currency: 'USD',
    });

    const handleGetQuantity = (qty) => {
        setQuantity(qty)
    }

    const imageSelected = (img) => {
        setActive({ ...active, image: img })
        setImgShow(img)
    }

    const handleAddToCart = async () => {
        const data = {
            productId: product.id,
            unitPrice: product.price,
            quantity,
            colorName: active.color,
            sizeName: active.size
        };

        dispatch.cart.addToCart(data);
    }

    useEffect(() => {
        dispatch.cart.fetchCart();
    }, [dispatch, cart])
    
    return (
      <HelmetProvider>
        <Helmet>
          <title> {page} </title>
        </Helmet>
        <div className="products">
            <div className="products-container">
                <div className="products-overview">
                    <div className="products-image">
                        <div className="products-image-list">
                            { product?.image.map((img, index) => (
                                <div 
                                    key={index} 
                                    className={`products-image-item ${active.image === img ? 'active' : ''}`}
                                    onClick={() => imageSelected(img)}
                                >
                                    <img src={img} alt="product-error" />
                                </div>
                            )) }
                        </div>
                        
                        <div className="products-image-index">
                            <img src={imgShow} alt="product-error" />
                            <div className="products-image-zoom">
                                <Zoom /> 
                            </div>
                        </div>
                        <div className="products-image-share">
                            <p>SHARE:</p>
                            <div className="image-icon-list">
                                { iconShare.map((Icon, index) => <Icon key={index} />) }
                            </div>
                        </div>
                    </div>

                    <div className="products-attributes">
                        {/* Tab: Page/category/product */}
                        <Tab 
                            page={page}
                            category={product?.category}
                            product={product?.name}
                        />

                        <div className="products-attributes-brand">
                            <p>{product.brand}</p>
                        </div>

                        <div className="products-attributes-name">
                            <p>{product.name}</p>
                        </div>

                        <div className="products-attributes-select">
                            <p>SELECT COLOR</p>
                            <div className="attributes-select">
                                { product?.color.map(color => (
                                    <div key={color} className={`wrapper-btn ${active.color === color && 'active'}`}>
                                        <Button 
                                            width="20px"
                                            height="20px"
                                            className={`btn-color`}
                                            bgColor={color}
                                            onClick={() => setActive({ ...active, color })}
                                        />
                                    </div>
                                )) }
                            </div>
                        </div>
                        <div className="products-attributes-select">
                            <p>SELECT SIZE</p>
                            <div className="attributes-select">
                                { product?.size.map(size => (
                                    <Button 
                                        key={size}
                                        className={`btn-size ${active.size === size && 'active'}`}
                                        width="56px"
                                        height="46px"
                                        onClick={() => setActive({ ...active, size })}
                                    >
                                        {size}
                                    </Button>
                                )) }
                                <Link to="#" >
                                    Size guide
                                </Link>
                            </div>
                        </div>
                        <div className="products-attributes-group">
                            <div className="attributes-row">
                                <p>QUANTITY</p>
                                <ButtonQuantity handleGetQuantity={handleGetQuantity} />
                            </div>

                            <div className="attributes-row">
                                <p>PRIRCE TOTAL</p>
                                <h3> {USDollar.format(product.price)} </h3>
                            </div>
                        </div>
                        <div className="products-attributes-group">
                            <Button 
                                bgColor="#000" 
                                textColor="#FFF" 
                                className="btn-add-to-bag"
                                width="200px"
                                onClick={handleAddToCart}
                            ><p>ADD TO BAG</p></Button>
                            <Button width="200px" className="btn-save"> <Heart /> SAVE</Button>
                        </div>
                        <div className="products-attributes-group mt-1">
                            <div className="d-flex">
                                <Checked />
                                <p>Free shipping</p>            
                            </div>
                            <p>Product code: RFKK1024</p>
                            <p>TAGS: NEW arrivals, Top women</p>
                        </div>
                    </div>
                </div>
                <div className="products-detail">
                    <div className="products-detail-title" onClick={() => setStateDesc(!stateDesc)}>
                        <p>Details</p>
                        { !stateDesc ? <HideDetail /> : <ShowDetail /> }
                    </div>
                    <div className={`products-desc ${stateDesc && 'hide-desc'}`}>
                        { product.desciption }
                    </div>
                </div>
            </div>
            <div className="products-slider">
                <p>You May Also Like</p>
                <ProductCarousel productList={ productsStore.listProduct } />
            </div>
        </div>
      </HelmetProvider>
    );
  };
  
  export default Products;