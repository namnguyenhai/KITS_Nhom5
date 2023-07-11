import { Helmet, HelmetProvider } from "react-helmet-async";
import './Products.scss';
import Tab from "components/Tab";
import { product1, product2, product3 } from 'components/ImageList';
const Products = () => {
    const product = {
        id: 1,
        name: "Women Black Checked Fit and Flare Dress",
        category: "Woment Dress",
        brand: "FENDI",
        color: ["white", "blue", "red"],
        size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        images: [product1, product2, product3],
        desciption: ""
    }

    return (
      <HelmetProvider>
        <Helmet>
          <title>Products</title>
        </Helmet>
        <div className="products">
            <div className="products-overview">
                <div className="products-image-list">

                </div>
                <div className="products-image">
                    
                </div>
                <div className="products-attributes">
                    {/* Tab: Page/category/product */}
                    <Tab />
                    <div className="products-attributes-brand">
                        <p>{product.brand}</p>
                    </div>
                    <div className="products-attributes-name">
                        <p>{product.name}</p>
                    </div>
                    <div className="products-attributes-color">
                        <p>SELECT COLOR</p>
                        <div className="attributes-color-select">
                                                        
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