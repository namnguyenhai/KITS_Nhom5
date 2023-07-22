import { Helmet, HelmetProvider } from "react-helmet-async";
import { styled } from "styled-components";
import { Button } from "components/Button";
import banner from "assets/images/shop/banner.svg";
import vector from "assets/images/home/vector.svg";
import vectorm from "assets/images/shop/vector.svg";
import { PriceRangeSlider } from "components/PriceRangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "components/Product";
import model from "assets/images/shop/model.svg";
import { useEffect } from "react";
import { useState } from "react";
import { ALL_CATEGORIES, ALL_COLORS, ALL_SIZES } from "api";
import axios from "axios";
import { Link } from "react-router-dom";

const ShopStyled = styled.div`
  margin: 20px;
  .banner {
    width: 100%;
    height: 467px;
    background: linear-gradient(
      90deg,
      #f6f8fc 0%,
      #f6f8fc 44.79%,
      #f5f7fa 74.48%,
      rgba(243, 239, 238, 0) 100%
    );
    display: flex;
    justify-content: flex-end;
  }
  .info-banner {
    padding: 50px 200px;
    position: relative;
  }
  .title-banner {
    margin: 0;
    color: #000;
    font-size: 56px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .des-banner {
    color: #000;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0.25px;
  }
  .vector {
    position: absolute;
    right: 20%;
  }
  .redirect {
    display: flex;
    width: 1878px;
    height: 36px;
    flex-direction: column;
    justify-content: center;
    color: #828282;
    font-size: 14px;
    font-weight: 400;
  }
`;

const QueryProducts = styled.div`
  display: flex;
  .left {
    width: 20%;
    border-right: 1px solid #c4c4c4;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  .right {
    width: 80%;
    margin-left: 30px;
  }
  .filter-title {
    color: #000;
    font-size: 24px;
    font-weight: 400;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 40px;
    cursor: pointer;
  }
  .minus {
    background: #3f3f3f;
    width: 12px;
    height: 2px;
  }
  .allcheck {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: #3f3f3f;
  }
  .checkbox {
    accent-color: #000;
  }
  .allsize {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .size {
    width: 46px;
    height: 46px;
    border: 1px solid #c4c4c4;
    color: #828282;
    font-size: 12.5px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .allcolor {
    margin-right: 40px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .color {
    width: 25px;
    height: 25px;
    border: none;
  }
  .button-range {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    margin-top: 25px;
    margin-right: 40px;
  }
  .sort {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  .select {
    height: 46px;
    border: 1px solid #c4c4c4;
    background: #fff;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    text-indent: 10px;
  }
  .type {
    width: 255px;
  }
  .num {
    width: 69px;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
  }
  .mid-banner {
    width: 100%;
    height: 430px;
    background: linear-gradient(
      90deg,
      #000 0%,
      #000 69.37%,
      #000 89.11%,
      rgba(0, 0, 0, 0) 100%
    );
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin-top: 45px;
    margin-bottom: 25px;
  }
  .info-mid {
    left: 10%;
    position: absolute;
  }
  .title-mid {
    color: #fff;
    font-size: 56px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  .des-mid {
    color: #fff;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0.25px;
    max-width: 640px;
  }
  .data {
    position: relative;
  }
  .vector {
    stroke: #fff;
    position: absolute;
    right: 0;
    top: -5%;
  }
  .color {
    display: flex;
    width: 27px;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .color.selected {
    border: 2px solid #fff;
    outline: 2px solid #000;
  }
  .choose {
    border: 1px solid #000;
    color: #000;
  }
  .link {
    text-decoration: none;
  }
`;

const Shop = () => {
  const productsStore = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products when the component mounts
    dispatch.products.fetchProducts();
  }, [dispatch.products]);

  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  // Get all categories, sizes, colors
  useEffect(() => {
    Promise.all([
      axios.get(ALL_CATEGORIES),
      axios.get(ALL_SIZES),
      axios.get(ALL_COLORS),
    ])
      .then(([categories, sizes, colors]) => {
        setCategories(categories.data.category);
        setSizes(sizes.data.size);
        setColors(colors.data.color);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Select color
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorSelect = (colorOption) => {
    setSelectedColor(colorOption);
  };

  // Select brand
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeSelect = (sizeOption) => {
    setSelectedSize(sizeOption);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <ShopStyled>
        <div className="banner">
          <div className="info-banner">
            <img className="vector" src={vector} alt="vector" />
            <p className="title-banner">shoping without limits.</p>
            <p className="des-banner">
              You can choose the best option for you, and it does not matter
              whether you are in Prague or San Francisco. We will deliver your
              purchase anywhere!
            </p>
            <Button>shop now</Button>
          </div>
          <img src={banner} alt="model banner" />
        </div>
        <div className="redirect">Home / Women Dress / Best Chose</div>
        <QueryProducts>
          <div className="left">
            <div>
              <div className="filter-title">
                <p>Brand</p>
                <div className="minus" />
              </div>
              <div className="allcheck">
                <div className="allcheck">
                  {categories.map((category, index) => (
                    <label key={index}>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value={category.categoryName}
                      />{" "}
                      {category.categoryName}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="filter-title">
                <p>Size</p>
                <div className="minus" />
              </div>
              <div className="allsize">
                {sizes.map((size, index) => (
                  <Button
                    key={index}
                    className={`size ${selectedSize === size ? "choose" : ""}`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size.sizeName}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <div className="filter-title">
                <p>Color</p>
                <div className="minus" />
              </div>
              <div className="allcolor">
                {colors.map((color, index) => (
                  <div className="color" key={index}>
                    <Button
                      bgColor={color.colorName}
                      className={`color ${
                        selectedColor === color ? "selected" : ""
                      }`}
                      onClick={() => handleColorSelect(color)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="filter-title">
                <p>Price Range</p>
                <div className="minus" />
              </div>
              <PriceRangeSlider />
              <div className="button-range">
                <Button
                  bgColor={"#C4C4C4"}
                  textColor={"#828282"}
                  fontSize={14}
                  borderColor={"#828282"}
                  width={"114px"}
                  height={"40px"}
                >
                  apply
                </Button>
                <Button
                  bgColor={"#C4C4C4"}
                  textColor={"#828282"}
                  fontSize={14}
                  borderColor={"#828282"}
                  width={"114px"}
                  height={"40px"}
                >
                  reset
                </Button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="sort">
              <select className="select type">
                <option value="0">price (high to low)</option>
                <option value="1">price (low to high)</option>
              </select>
              <select className="select num">
                <option value="0">48</option>
                <option value="1">24</option>
              </select>
            </div>
            <div className="products">
              {productsStore.listProduct.map((card) => (
                <Link
                  key={card.productId}
                  to={`/products/${card.productId}`}
                  className="link"
                >
                  <Product
                    name={card.productName}
                    bgImage={card.urlImage}
                    category={card.categoryName}
                    price={card.priceStock}
                    color={card.colorName}
                  />
                </Link>
              ))}
            </div>
            <div className="mid-banner">
              <div className="info-mid">
                <div className="data">
                  <img className="vector" src={vectorm} alt="vector line" />
                  <p className="title-mid">shoping without limits.</p>
                  <p className="des-mid">
                    You can choose the best option for you, and it does not
                    matter whether you are in Prague or San Francisco. We will
                    deliver your purchase anywhere!
                  </p>
                  <Button borderColor={"#fff"} textColor={"#fff"}>
                    show now
                  </Button>
                </div>
              </div>
              <img className="model" src={model} alt="model" />
            </div>
            <div className="products">
              {productsStore.listProduct.map((card) => (
                <Link
                  key={card.productId}
                  to={`/products/${card.productId}`}
                  className="link"
                >
                  <Product
                    name={card.productName}
                    bgImage={card.urlImage}
                    category={card.categoryName}
                    price={card.priceStock}
                    color={card.colorName}
                  />
                </Link>
              ))}
            </div>
          </div>
        </QueryProducts>
      </ShopStyled>
    </HelmetProvider>
  );
};

export default Shop;
