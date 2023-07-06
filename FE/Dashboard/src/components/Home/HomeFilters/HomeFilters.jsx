import { styled } from "styled-components";

const HFStyled = styled.div`
  display: flex;
  .left {
    width: 20%;
  }
  .right {
    width: 80%;
  }
`;

export const HomeFilters = () => {
  return (
    <HFStyled>
      <div className="left"></div>
      <div className="right"></div>
    </HFStyled>
  );
};
