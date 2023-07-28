import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Style404 = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  /* Style for the heading */
  h1 {
    font-size: 3rem;
    color: #ff0000;
  }

  /* Style for the paragraph */
  p {
    font-size: 1.5rem;
    color: #555;
  }

  /* Style for the link to go back */
  a {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    border: 2px solid #007bff;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }

  a:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const NotFoundPage = () => {
  return (
    <Style404>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </Style404>
  );
};
export default NotFoundPage;
