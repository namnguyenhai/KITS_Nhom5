import { Helmet, HelmetProvider } from "react-helmet-async";

const Blog = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <h1>Blog</h1>
    </HelmetProvider>
  );
};

export default Blog;
