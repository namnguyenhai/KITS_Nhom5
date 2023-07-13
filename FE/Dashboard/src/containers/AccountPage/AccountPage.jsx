import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { styled } from "styled-components";

const AccountStyled = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .redirect {
    color: #828282;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
  }
  .title {
    color: #000;
    text-align: center;
    font-size: 48px;
    font-weight: 400;
    margin-top: 0;
    line-height: 68px; /* 141.667% */
  }
  .frame {
    width: 1454px;
    height: 716px;
    border: 1px solid #c4c4c4;
    background: #fff;
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-bottom: 160px;
    padding-top: 70px;
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    .side-item {
      width: 275px;
      height: 44px;
      color: #828282;
      font-size: 18px;
      font-weight: 400;
      line-height: 23px;
      text-decoration: none;
      display: flex;
      align-items: center;
      padding-left: 10px;
      box-sizing: border-box;
      transition: 0.3s;
    }
    .side-item:hover {
      color: #000;
      background: #f0f2f2;
    }
    .active {
      color: #000;
      background: #f0f2f2;
    }
  }
`;

const AccountPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <AccountStyled>
        <p className="redirect">Home/</p>
        <p className="title">My Dashboard</p>
        <div className="frame">
          <div className="sidebar">
            <NavLink
              to="/account/dashboard"
              className="side-item"
              exact="true"
              activeclassname="active"
            >
              Account Dashboard
            </NavLink>
            <NavLink
              to="/account/information"
              className="side-item"
              activeclassname="active"
            >
              Account Information
            </NavLink>
            <NavLink
              to="/account/address"
              className="side-item"
              activeclassname="active"
            >
              Address Book
            </NavLink>
            <NavLink
              to="/account/orders"
              className="side-item"
              activeclassname="active"
            >
              My Orders
            </NavLink>
            <NavLink
              to="/account/wishlist"
              className="side-item"
              activeclassname="active"
            >
              My Wishlist
            </NavLink>
            <NavLink
              to="/account/subscriptions"
              className="side-item"
              activeclassname="active"
            ></NavLink>
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </AccountStyled>
    </HelmetProvider>
  );
};

export default AccountPage;
