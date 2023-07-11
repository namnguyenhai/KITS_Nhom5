import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const LayoutStyled = styled.div`
  width: 100%;
`;

const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
