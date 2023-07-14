import { Layout } from 'components/Layout';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import { Route, Routes } from "react-router-dom";
import Homepage from 'containers/Homepage';
import Shop from 'containers/Shop';
import Blog from 'containers/Blog';
import Products from 'containers/Products';
import NewAccount from 'containers/NewAccount';
import Cart from 'containers/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
        <Route path="products" element={<Products />} />
        <Route path="accounts/new" element={<NewAccount />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
