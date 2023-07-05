import { Helmet, HelmetProvider } from "react-helmet-async";

const Homepage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home</h1>
    </HelmetProvider>
  );
};

export default Homepage;
