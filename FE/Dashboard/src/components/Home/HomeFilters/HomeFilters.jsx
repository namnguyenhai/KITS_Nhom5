import { Product } from "components/Product";
import { styled } from "styled-components";
import model from "assets/images/product/model6.svg";
import { Button } from "components/Button";

const HFStyled = styled.div`
  margin-top: 48px;
  margin-bottom: 50px;
  display: flex;
  .left {
    width: 20%;
    border-right: 1px solid #c4c4c4;
  }
  .filter {
    color: #000;
    font-size: 24px;
    font-weight: 400;
    margin-top: 0;
  }
  .allcheck {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .checkbox {
    accent-color: #000;
  }
  .right {
    width: 80%;
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin-bottom: 60px;
  }
`;

export const HomeFilters = () => {
  return (
    <HFStyled>
      <div className="left">
        <p className="filter">Filters</p>
        <div className="allcheck">
          <label>
            <input className="checkbox" type="checkbox" /> best sellers
          </label>
          <label>
            <input className="checkbox" type="checkbox" /> NEW Arivals
          </label>
          <label>
            <input className="checkbox" type="checkbox" /> TOP women
          </label>
          <label>
            <input className="checkbox" type="checkbox" /> TREnding
          </label>
        </div>
      </div>
      <div className="right">
        <div className="products">
          <Product
            bgImage={model}
            category={"top women"}
            name={"Angels malu zip jeans slim black used"}
            price={"139,00 $"}
            oldprice={"119,00 EUR"}
            tag={"-30%"}
          />
          <Product
            bgImage={model}
            category={"top women"}
            name={"Angels malu zip jeans slim black used"}
            price={"139,00 $"}
            tag={"-30%"}
          />
          <Product
            bgImage={model}
            category={"top women"}
            name={"Angels malu zip jeans slim black used"}
            price={"139,00 $"}
            oldprice={"119,00 EUR"}
          />
          <Product
            bgImage={model}
            category={"top women"}
            name={"Angels malu zip jeans slim black used"}
            price={"139,00 $"}
            oldprice={"119,00 EUR"}
          />
          <Product
            bgImage={model}
            category={"top women"}
            name={"Angels malu zip jeans slim black used"}
            price={"139,00 $"}
            oldprice={"119,00 EUR"}
            tag={"-30%"}
          />
          <Product
            bgImage={model}
            category={"top women"}
            name={"Angels malu zip jeans slim black used"}
            price={"139,00 $"}
            oldprice={"119,00 EUR"}
            tag={"-30%"}
          />
          <Product
            bgImage={model}
            category={"top women"}
            name={"Angels malu zip jeans slim black used"}
            price={"139,00 $"}
            oldprice={"119,00 EUR"}
            tag={"-30%"}
          />
          <Product
            bgImage={model}
            category={"top women"}
            name={"Angels malu zip jeans slim black used"}
            price={"139,00 $"}
            oldprice={"119,00 EUR"}
            tag={"-30%"}
          />
        </div>
        <Button
          width={"140px"}
          height={"50.33px"}
          fontSize={14}
          borderColor={"#828282"}
          textColor={"#828282"}
        >
          load more
        </Button>
      </div>
    </HFStyled>
  );
};
