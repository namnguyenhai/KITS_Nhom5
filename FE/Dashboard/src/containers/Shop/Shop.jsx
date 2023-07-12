import { Helmet, HelmetProvider } from "react-helmet-async";
import { styled } from "styled-components";
import { Button } from "components/Button";
import banner from "assets/images/shop/banner.svg";
import vector from "assets/images/home/vector.svg";
import { PriceRangeSlider } from "components/PriceRangeSlider";

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
`;

const Shop = () => {
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
                <label>
                  <input className="checkbox" type="checkbox" /> state
                </label>
                <label>
                  <input className="checkbox" type="checkbox" /> cooper
                </label>
                <label>
                  <input className="checkbox" type="checkbox" /> bardor
                </label>
                <label>
                  <input className="checkbox" type="checkbox" /> alfani
                </label>
                <label>
                  <input className="checkbox" type="checkbox" /> cece
                </label>
                <label>
                  <input className="checkbox" type="checkbox" /> donna ricco
                </label>
              </div>
            </div>
            <div>
              <div className="filter-title">
                <p>Size</p>
                <div className="minus" />
              </div>
              <div className="allsize">
                <Button className="size">XS</Button>
                <Button className="size">S</Button>
                <Button className="size">M</Button>
                <Button className="size">N</Button>
                <Button className="size">L</Button>
                <Button className="size">XL</Button>
                <Button className="size">XXL</Button>
                <Button className="size">XXXL</Button>
              </div>
            </div>
            <div>
              <div className="filter-title">
                <p>Dress length</p>
                <div className="minus" />
              </div>
              <div className="allcheck">
                <label>
                  <input className="checkbox" type="checkbox" /> short
                </label>
                <label>
                  <input className="checkbox" type="checkbox" /> knee length
                </label>
                <label>
                  <input className="checkbox" type="checkbox" /> high low
                </label>
                <label>
                  <input className="checkbox" type="checkbox" /> long
                </label>
                <label>
                  <input className="checkbox" type="checkbox" /> midi
                </label>
              </div>
            </div>
            <div>
              <div className="filter-title">
                <p>Dress length</p>
                <div className="minus" />
              </div>
              <div className="allcolor">
                <Button className="color" bgColor={"#292A2D"} />
                <Button className="color" bgColor={"#F3ECE2"} />
                <Button className="color" bgColor={"#24426A"} />
                <Button className="color" bgColor={"#18574A"} />
                <Button className="color" bgColor={"#971E34"} />
                <Button className="color" bgColor={"#CBA13E"} />
                <Button className="color" bgColor={"#73513C"} />
                <Button className="color" bgColor={"#DAB1B1"} />
                <Button className="color" bgColor={"#666689"} />
                <Button className="color" bgColor={"#C2BEB6"} />
                <Button className="color" bgColor={"#AAABA7"} />
                <Button className="color" bgColor={"#2B9FA7"} />
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
            <div className="filter">
              
            </div>
          </div>
        </QueryProducts>
      </ShopStyled>
    </HelmetProvider>
  );
};

export default Shop;
