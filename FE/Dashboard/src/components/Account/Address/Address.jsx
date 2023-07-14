import { Button } from "components/Button";
import { styled } from "styled-components";

const AddressStyled = styled.div`
  .title {
    color: #000;
    font-size: 24px;
    font-weight: 400;
    text-align: start;
  }
  .data-fields {
    display: flex;
    margin-bottom: 15px;
  }
  .label {
    color: #3f3f3f;
    font-size: 16px;
    font-weight: 400;
    width: 108px;
  }
  .red {
    color: #eb5757;
  }
  .input {
    width: 392px;
    height: 44px;
    border: 1px solid #c4c4c4;
    background: #fff;
    color: #828282;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-indent: 10px;
  }
  .center {
    margin-top: 50px;
    width: 100%;
    text-align: center;
  }
`;

export const Address = () => {
  return (
    <AddressStyled>
      <p className="title">Contact Information</p>
      <div className="data-fields">
        <div className="label">
          First Name<span className="red">*</span>
        </div>
        <input className="input" type="text" placeholder="Alex" />
      </div>
      <div className="data-fields">
        <span className="label">Last Name</span>
        <input className="input" type="text" placeholder="Driver" />
      </div>
      <div className="data-fields">
        <span className="label">
          Phone Number<span className="red">*</span>
        </span>
        <input className="input" type="text" />
      </div>
      <div className="data-fields">
        <span className="label">
          Address<span className="red">*</span>
        </span>
        <input className="input" type="text" />
      </div>
      <div className="center">
        <Button
          className="save"
          bgColor={"#000"}
          width={"140px"}
          height={"50px"}
          textColor={"#fff"}
          fontSize={14}
        >
          save address
        </Button>
      </div>
    </AddressStyled>
  );
};
