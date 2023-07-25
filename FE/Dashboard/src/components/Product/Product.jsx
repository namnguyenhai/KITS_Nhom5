import { Button } from "components/Button";
import { useState } from "react";
import { styled } from "styled-components";

const ProductStyled = styled.div`
  width: 344px;
  height: auto;
  position: relative;
  cursor: pointer;
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
    text-transform: uppercase;
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
  .color.selected {
    border: 2px solid #fff;
    outline: 2px solid #000;
  }
`;

// format price
const USDollar = new Intl.NumberFormat("de-US", {
  style: "currency",
  currency: "USD",
});

export const Product = ({
  name,
  tag,
  bgImage,
  category,
  price,
  oldprice,
  color,
  ...rest
}) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorSelect = (colorOption) => {
    setSelectedColor(colorOption);
  };

  const hasDiscount = oldprice > price;

  // Split the color and image URLs into arrays
  const priceApi = price ? price.split(",") : [];
  const firstPrice = priceApi.length > 0 ? priceApi[0].trim() : null;
  const colorOptions = color ? color.split(",").filter(function (value, index, self) {
    return self.indexOf(value) === index;
  }) : [];
  const imageUrls = bgImage ? bgImage.split(",") : [];
  const firstImageUrl = imageUrls.length > 0 ? imageUrls[0].trim() : null;

  return (
    <ProductStyled {...rest}>
      {firstImageUrl && (
        <img className="image" src={firstImageUrl} alt={name} />
      )}
      {/* {tag ? <div className="tag">{tag}</div> : null} */}
      <p className="cate">{category}</p>
      <p className="name">{name}</p>
      {hasDiscount ? (
        <div className="discount">
          <p className="new">{USDollar.format(price)}</p>
          <p className="old">{USDollar.format(oldprice)}</p>
        </div>
      ) : (
        <p className="price">{USDollar.format(firstPrice)}</p>
      )}
      {colorOptions.length > 0 ? (
        <div className="colors">
          {colorOptions.map((colorOption, index) => (
            <Button
              key={index}
              width={"25px"}
              height={"25px"}
              borderColor={null}
              bgColor={colorOption.trim()} // Trim the color value to remove any leading/trailing spaces
              className={`color ${
                selectedColor === colorOption ? "selected" : ""
              }`}
              onClick={() => handleColorSelect(colorOption)}
            />
          ))}
        </div>
      ) : null}
    </ProductStyled>
  );
};
