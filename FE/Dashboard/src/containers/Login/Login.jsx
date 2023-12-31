import { Helmet, HelmetProvider } from "react-helmet-async";
import { styled } from "styled-components";
import Bannerright from "assets/images/login/banner_right_login.svg";
import Facebook from "assets/images/login/Facebook.svg";
import Instagram from "assets/images/login/Instagram.svg";
import Google from "assets/images/login/Google.svg";
import Linkedin from "assets/images/login/LinkedIn.svg";
import { TextFormat } from "components/Text";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LOGIN_USER } from "api";
import Cookies from "js-cookie";
const LoginStyled = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
  .div_left {
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .div_form {
    width: 40%;
    height: 600px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
  .width_input {
    width: 100%;
    height: 35px;
    border-radius: 2px;
    box-sizing: border-box;
    text-indent: 10px;
  }
  .div_right {
    height: 100vh;
    width: 50%;
  }
  .flexrowSignInUp {
    display: flex;
    gap: 2px;
  }
  .flexrowSocial {
    display: flex;
    gap: 20px;
  }
  .flexcolumn {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
  }
  .img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .buttonSignIn {
    background-color: #eb5757;
    border: none;
    width: 50%;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;
  }
  .buttonFacebook {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url(${Facebook});
    background-size: cover;
    border: none;
    background-color: transparent;
  }
  .buttonInstagram {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url(${Instagram});
    background-size: cover;
    border: none;
    background-color: transparent;
  }
  .buttonGoogle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url(${Google});
    background-size: cover;
    border: none;
    background-color: transparent;
  }
  .buttonLinkedIn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url(${Linkedin});
    background-size: cover;
    border: none;
    background-color: transparent;
  }
  .buttonToSignInUp {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .buttonForgot {
    font-size: 15px;
    color: #eb5757;
    text-decoration: none;
    transition: 0.3s;
  }
  .buttonForgot:hover {
    opacity: 0.5;
  }
`;

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Remove the existing token cookie (if any)
    Cookies.remove("token");
    try {
      await axios
        .post(LOGIN_USER, {
          username: username,
          password: password,
        })
        .then((data) => {
          // Set new cookie
          navigate("/");
          Cookies.set("token", data.data.token, { expires: 7 }); // 'expires' sets the cookie to expire after 7 days
          Cookies.set("userId", data.data.userId, { expires: 7 });
        });
    } catch (err) {
      toast.error("Wrong Username or Password!", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginStyled>
        <div className="div_left">
          <div className="div_form">
            <TextFormat size={"50px"} weight={500} fontfam={"Oswald"}>
              LISA
            </TextFormat>
            <TextFormat size={"33px"} weight={600} fontfam={"Inter"}>
              Sign In
            </TextFormat>
            <TextFormat
              size={"16px"}
              weight={400}
              fontfam={"Inter"}
              color={"#8A92A6"}
            >
              Sign in to stay connected.
            </TextFormat>
            <form onSubmit={handleSubmit}>
              <div className="flexcolumn">
                <TextFormat
                  size={"16px"}
                  weight={400}
                  fontfam={"Inter"}
                  color={"#8A92A6"}
                >
                  Username
                </TextFormat>
                <input
                  className="width_input"
                  type="text"
                  id="usernameInput"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flexcolumn">
                <TextFormat
                  size={"16px"}
                  weight={400}
                  fontfam={"Inter"}
                  color={"#8A92A6"}
                >
                  Password
                </TextFormat>
                <input
                  className="width_input"
                  type="password"
                  id="passwordInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="buttonSignIn">
                <TextFormat
                  color={"#FFFFFF"}
                  fontfam={"Inter"}
                  size={"16px"}
                  weight={500}
                >
                  Sign in
                </TextFormat>
              </button>
            </form>
            <TextFormat
              color={"#232D42"}
              size={"16px"}
              weight={500}
              fontfam={"Inter"}
            >
              or sign in with other accounts?
            </TextFormat>
            <div className="flexrowSocial">
              <button className="buttonFacebook"></button>
              <button className="buttonGoogle"></button>
              <button className="buttonInstagram"></button>
              <button className="buttonLinkedIn"></button>
            </div>
            <Link to="/forgot" className="buttonForgot">
              Forgot password?
            </Link>
            <div className="flexrowSignInUp">
              <TextFormat
                color={"#232D42"}
                size={"16px"}
                weight={500}
                fontfam={"Inter"}
              >
                Don’t have an account?
              </TextFormat>
              <button
                className="buttonToSignInUp"
                onClick={() => navigate("/accounts/new")}
              >
                <TextFormat
                  color={"#0EA5E9"}
                  size={"16px"}
                  weight={500}
                  fontfam={"Inter"}
                >
                  Click here to sign up.
                </TextFormat>
              </button>
            </div>
          </div>
        </div>
        <div className="div_right">
          <img className="img" src={Bannerright} alt="imageBannerRight" />
        </div>
      </LoginStyled>
    </HelmetProvider>
  );
};
