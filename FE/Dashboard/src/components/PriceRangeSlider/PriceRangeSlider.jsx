import { useState } from "react";
import ReactSlider from "react-slider";
import { styled } from "styled-components";

const RangeStyled = styled.div`
  margin-right: 40px;
  .price {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .customSlider {
    margin: auto;
  }
  .thumb {
    width: 6px;
    height: 20px;
    background: #000;
    top: -10px;
    cursor: pointer;
  }
  .customSlider-track {
    height: 2px;
    background: #000;
  }
  .customSlider-track.customSlider-track-0 {
    /* color of the track before the thumb */
    background: #bdbdbd;
  }
  .customSlider-track.customSlider-track-2 {
    /* color of the track before the thumb */
    background: #bdbdbd;
  }
`;

const MIN = 0;
const MAX = 300;

export const PriceRangeSlider = () => {
  const [values, setValues] = useState([MIN, MAX]);
  return (
    <RangeStyled>
      <div className="price">
        <p>{values[0]} EUR</p>
        <p>{values[1]} EUR</p>
      </div>
      <ReactSlider
        className="customSlider"
        trackClassName="customSlider-track"
        value={values}
        onChange={setValues}
        min={MIN}
        max={MAX}
      />
    </RangeStyled>
  );
};
