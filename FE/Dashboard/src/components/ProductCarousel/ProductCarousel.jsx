import { styled } from "styled-components";
import pd from "assets/images/product/model6.svg";
import { Product } from "components/Product";
import Carousel from "react-grid-carousel";

const productData = [
  {
    name: "Angels malu zip jeans slim black used",
    bgImage: pd,
    category: "top women",
    price: 236,
    tag: "-30%",
  },
  {
    name: "Angels malu zip jeans slim black used",
    bgImage: pd,
    category: "top women",
    oldprice: "115, 00 EURO",
    price: "85, 00 EURO",
    tag: "-30%",
  },
  {
    name: "Angels malu zip jeans slim black used",
    bgImage: pd,
    category: "top women",
    oldprice: "115, 00 EURO",
    price: "85, 00 EURO",
    tag: "-30%",
  },
  {
    name: "Angels malu zip jeans slim black used",
    bgImage: pd,
    category: "top women",
    oldprice: "115, 00 EURO",
    price: "85, 00 EURO",
    tag: "-30%",
  },
  {
    name: "Angels malu zip jeans slim black used",
    bgImage: pd,
    category: "top women",
    oldprice: "115, 00 EURO",
    price: "85, 00 EURO",
    tag: "-30%",
  },
  {
    name: "Angels malu zip jeans slim black used",
    bgImage: pd,
    category: "top women",
    oldprice: "115, 00 EURO",
    price: "85, 00 EURO",
    tag: "-30%",
  },
];

const CarouselStyled = styled.div``;

export const ProductCarousel = () => {
  return (
    <>
      <Carousel cols={5} rows={1} gap={26} scrollSnap={true} loop>
        {productData.map((card, index) => (
          <Carousel.Item key={index}>
            <Product
              name={card.name}
              bgImage={card.bgImage}
              tag={card.tag}
              category={card.category}
              price={card.price}
              oldprice={card.oldprice}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
