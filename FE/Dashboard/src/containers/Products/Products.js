import { Helmet, HelmetProvider } from "react-helmet-async";
import './Products.scss';
import Tab from "components/Tab";
import { product1, product2, product3 } from 'components/ImageList';
import { Button } from "components/Button";
import { Link } from "react-router-dom";

const Products = () => {
    const title = "Products";
    const product = {
        id: 1,
        name: "Women Black Checked Fit and Flare Dress",
        category: "Woment Dress",
        brand: "FENDI",
        color: ["#000000", "#24426A", "#666689", "#FFFFFF"],
        size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        image: [product1, product2, product3],
        desciption: ""
    }

    return (
      <HelmetProvider>
        <Helmet>
          <title> {title} </title>
        </Helmet>
        <div className="products">
            <div className="products-overview">
                <div className="products-image">
                    <div className="products-image-list">
                        { product?.image.map((img, index) => (
                            <div key={index} className="products-image-item">
                                <img src={img} alt="product-error" />
                            </div>
                        )) }
                    </div>

                    <img src={product?.image[0]} alt="product-error" />
                </div>

                <div className="products-attributes">
                    {/* Tab: Page/category/product */}
                    <Tab 
                        page={title}
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
                                <Button 
                                    key={color}
                                    width="25px"
                                    height="25px"
                                    className="btn-color"
                                    bgColor={color}
                                />
                            )) }
                        </div>
                    </div>
                    <div className="products-attributes-select">
                        <p>SELECT SIZE</p>
                        <div className="attributes-select">
                            { product?.size.map(size => (
                                <Button 
                                    key={size}
                                    className="btn-size"
                                    width="50px"
                                    height="46px"
                                >
                                    {size}
                                </Button>
                            )) }
                            <Link to="#" >
                                Size guide
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products-detail">
            </div>
        </div>
      </HelmetProvider>
    );
  };
  
  export default Products;