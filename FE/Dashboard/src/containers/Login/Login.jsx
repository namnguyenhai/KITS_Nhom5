import { Helmet, HelmetProvider } from "react-helmet-async";
import { styled } from "styled-components";
import Bannerright from "assets/images/login/banner_right_login.svg";
import Facebook from "assets/images/login/Facebook.svg";
import Instagram from "assets/images/login/Instagram.svg";
import Google from "assets/images/login/Google.svg";
import Linkedin from "assets/images/login/LinkedIn.svg";
import { TextFormat } from "components/Text";
const LoginStyled = styled.div`
    background-color: #FFFFFF;
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden;
    .div_left{
        height: 100vh;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .div_form{
        width: 40%;
        height: 600px;
        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: center;
    }
    .width_input{
        width: 100%;
        height: 35px;
        border-radius: 2px;
        box-sizing: border-box;
    }
    .div_right{
        height: 100vh;
        width: 50%;
    }
    .flexrow_between{
        display: flex;
        justify-content: space-between;
        width: 100%;
       
    }
    .flexrow{
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .flexrowSignInUp{
        display: flex;
        gap: 2px;
    }
    .flexrowSocial{
        display: flex;
        gap: 20px;
    }
    .flexcolumn{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 25px;
        align-items: center;
    }
    .img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    
    .buttonSignIn{
        background-color: #EB5757;
        border: none;
        width: 50%;
        height: 40px;
        border-radius: 4px;
    }
    .buttonFacebook{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-image: url(${Facebook});
        background-size: cover;
        border: none;
        background-color: transparent;
    }
    .buttonInstagram{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-image: url(${Instagram});
        background-size: cover;
        border: none;
        background-color: transparent;
    }
    .buttonGoogle{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-image: url(${Google});
        background-size: cover;
        border: none;
        background-color: transparent;
    }
    .buttonLinkedIn{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-image: url(${Linkedin});
        background-size: cover;
        border: none;
        background-color: transparent;
    }
    .buttonToSignInUp{
        border: none;
        background-color: transparent;
    }
    .buttonForgot{
        border: none;
        background-color: transparent;
    }

`

export const Login = ({ }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginStyled >
                <div className="div_left" >
                    {/* <div>
                    
                    </div> */}
                    <div className="div_form">
                        <TextFormat size={"50px"} weight={500} fontfam={"Oswald"}>LISA</TextFormat>
                        <TextFormat size={"33px"} weight={600} fontfam={"Inter"}>Sign In</TextFormat>
                        <TextFormat size={"16px"} weight={400} fontfam={"Inter"} color={"#8A92A6"}>Sign in to stay connected.</TextFormat>
                        <form action="">
                            <div className="flexcolumn">
                                <TextFormat size={"16px"} weight={400} fontfam={"Inter"} color={"#8A92A6"}>Email</TextFormat>
                                <input className="width_input" type="text" id="emailInput" />
                            </div>
                            <div className="flexcolumn">
                                <TextFormat size={"16px"} weight={400} fontfam={"Inter"} color={"#8A92A6"}>Password</TextFormat>
                                <input className="width_input" type="text" id="passwordInput" />
                            </div>

                            <div className="flexrow_between">
                                <div className="flexrow">
                                    <input type="checkbox" id="checkRemember" />
                                    <TextFormat size={"16px"} weight={400} fontfam={"Inter"} color={"#8A92A6"}>Remember me?</TextFormat>
                                </div>
                                <div>
                                    <button className="buttonForgot"><TextFormat size={"16px"} weight={500} fontfam={"Inter"}>Forgot password</TextFormat></button>
                                </div>
                            </div>
                            <button type="submit" className="buttonSignIn"><TextFormat color={"#FFFFFF"} fontfam={"Inter"} size={"16px"} weight={500}>Sign in</TextFormat></button>
                        </form>
                        <TextFormat color={"#232D42"} size={"16px"} weight={500} fontfam={"Inter"}>or sign in with other accounts?</TextFormat>
                        <div className="flexrowSocial" >
                            <button className="buttonFacebook"></button>
                            <button className="buttonGoogle"></button>
                            <button className="buttonInstagram"></button>
                            <button className="buttonLinkedIn"></button>
                        </div>
                        <div className="flexrowSignInUp">
                            <TextFormat color={"#232D42"} size={"16px"} weight={500} fontfam={"Inter"}>Don’t have an account?</TextFormat>
                            <button className="buttonToSignInUp"><TextFormat color={"#0EA5E9"} size={"16px"} weight={500} fontfam={"Inter"}>Click here to sign up.</TextFormat></button>
                        </div>
                    </div>
                </div>
                <div className="div_right">
                    <img className="img" src={Bannerright} alt="imageBannerRight" />
                </div>
            </LoginStyled>
        </HelmetProvider>
    );
}