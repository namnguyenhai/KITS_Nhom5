import { Helmet, HelmetProvider } from "react-helmet-async";

const Shop = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <h1>Shop</h1>
    </HelmetProvider>
  );
};

export default Shop;
