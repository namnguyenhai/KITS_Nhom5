import { GET_USER, UPDATE_USER } from "api";
import axios from "axios";
import { Button } from "components/Button";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { styled } from "styled-components";

const InfoStyled = styled.div`
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
  .check {
    color: #828282;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 15px;
  }
  .checkbox {
    accent-color: #828282;
  }
  .save {
    margin-top: 50px;
  }
`;

export const Information = () => {
  // State to track the visibility of the email/ password field
  const [showEmailField, setShowEmailField] = useState(false);
  const [showPassField, setShowPassField] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = Cookies.get("token");
  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
  useEffect(() => {
    axios
      .get(GET_USER, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res));
  });
  const handleSave = () => {
    axios
      .put(UPDATE_USER, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast.success("User data updated successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error updating user data!", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <InfoStyled>
      <p className="title">Account Information</p>
      <div className="data-fields">
        <div className="label">
          First Name<span className="red">*</span>
        </div>
        <input
          className="input"
          type="text"
          placeholder="Alex"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="data-fields">
        <span className="label">
          Last Name<span className="red">*</span>
        </span>
        <input
          className="input"
          type="text"
          placeholder="Driver"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="check">
        <input
          className="checkbox"
          type="checkbox"
          onChange={(e) => setShowEmailField(e.target.checked)}
        />
        Change Email
      </div>
      {showEmailField && ( // Render the email field only if showEmailField is true
        <div className="data-fields">
          <span className="label">
            Email<span className="red">*</span>
          </span>
          <input
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      )}
      <div className="check">
        <input
          className="checkbox"
          type="checkbox"
          onChange={(e) => setShowPassField(e.target.checked)}
        />
        Change Password
      </div>
      {showPassField && ( // Render the password field only if showPassField is true
        <div className="data-fields">
          <span className="label">
            Password<span className="red">*</span>
          </span>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      )}
      <Button
        className="save"
        bgColor={"#000"}
        width={"140px"}
        height={"50px"}
        textColor={"#fff"}
        fontSize={14}
        onClick={handleSave}
      >
        save
      </Button>
    </InfoStyled>
  );
};
