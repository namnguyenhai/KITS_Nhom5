import { Product } from "components/Product";
import { styled } from "styled-components";
import { Button } from "components/Button";
import { useSelector } from "react-redux";

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
  // const dispatch = useDispatch();
  const productsStore = useSelector((state) => state.products);
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
          {productsStore.listProduct.map((card, index) => (
            <Product
              key={index}
              name={card.name}
              bgImage={card.bgImage}
              tag={card.tag}
              category={card.category}
              price={card.price}
              oldprice={card.oldprice}
            />
          ))}
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
