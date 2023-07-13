
import { Button } from "components/Button";
import { styled } from "styled-components";

const ProductStyled = styled.div`
  width: 344px;
  height: auto;
  position: relative;
  .image {
    width: 344px;
    height: 450px;
    flex-shrink: 0;
  }
  .tag {
    width: 40px;
    height: 20px;
    flex-shrink: 0;
    background-color: #000;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5%;
    left: 0;
  }
  .cate {
    color: #bdbdbd;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  .name {
    color: #000;
    font-size: 18px;
    font-weight: 300;
    margin: 0;
  }
  .price {
    color: #000;
    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 18px;
  }
  .discount {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .new {
    color: #eb5757;
    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 18px;
  }
  .old {
    color: #828282;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration-line: line-through;
  }
  .colors {
    display: flex;
    width: 101px;
    height: 27px;
    gap: 10px;
  }
`;

export const Product = ({
  name,
  tag,
  bgImage,
  category,
  price,
  oldprice,
=======
  color,
  ...rest
}) => {
  return (
    <ProductStyled {...rest}>
      <img className="image" src={bgImage} alt={name} />
      {tag ? <div className="tag">{tag}</div> : null}
      <p className="cate">{category}</p>
      <p className="name">{name}</p>
      {oldprice ? (
        <div className="discount">
          <p className="new">{price}</p>
          <p className="old">{oldprice}</p>
        </div>
      ) : (
        <p className="price">{price}</p>
      )}
      {color ? (
        <div className="colors">
          {color.map((colorOption, index) => (
            <Button
              key={index}
              width={"25px"}
              height={"25px"}
              borderColor={null}
              bgColor={colorOption}
            />
          ))}
        </div>
      ) : null}
    </ProductStyled>
  );
};
