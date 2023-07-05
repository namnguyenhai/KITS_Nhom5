import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import search from "assets/images/header/search.svg";
import heart from "assets/images/header/heart.svg";
import cart from "assets/images/header/cart.svg";

const HeaderStyled = styled.div`
  width: 100%;
  height: 115px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  box-sizing: border-box;
  .logo {
    width: 138px;
    height: 48.457px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
    border: 3px solid #fff;
  }
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-item {
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      text-decoration: none;
      padding-left: 30px;
      box-sizing: border-box;
      align-items: center;
    }
    .active {
      text-decoration: underline;
      text-decoration-color: #eb5757;
      text-underline-offset: 4px;
      text-decoration-thickness: 2px;
    }
    .contact {
      img {
        padding-right: 8px;
        width: 16px;
        height: 16px;
      }
    }
    .heart {
      width: 17px;
      height: 15px;
    }
    .shop {
      display: flex;
      align-items: center;
    }
    .cart {
      width: 18px;
      height: 20px;
      padding-right: 8px;
    }
    .cart-info {
      display: flex;
      flex-direction: column;
    }
    .item {
      font-size: 12px;
      text-transform: none;
    }
    .price {
      font-size: 14px;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo">lisa</div>
      <div className="navbar">
        <NavLink
          to="/"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          home
        </NavLink>
        <NavLink to="/shop" className="nav-item" activeclassname="active">
          shop
        </NavLink>
        <NavLink to="/blog" className="nav-item" activeclassname="active">
          blog
        </NavLink>
        <NavLink to="/sale" className="nav-item" activeclassname="active">
          sale
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-item contact"
          activeclassname="active"
        >
          <img src={search} alt="search icon" />
          contact us
        </NavLink>
      </div>
      <div className="navbar">
        <NavLink to="/login" className="nav-item">
          sign in
        </NavLink>
        <NavLink to="/sign-up" className="nav-item">
          create an account
        </NavLink>
        <NavLink to="/favourite" className="nav-item">
          <img className="heart" src={heart} alt="heart icon" />
        </NavLink>
        <NavLink to="/cart" className="nav-item shop">
          <img className="cart" src={cart} alt="cart icon" />
          <div className="cart-info">
            <span className="item">Shopping Cart</span>
            <span className="price">0, 00 EUR</span>
          </div>
        </NavLink>
      </div>
    </HeaderStyled>
  );
};
