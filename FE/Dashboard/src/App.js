import { Layout } from 'components/Layout';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import { Route, Routes } from "react-router-dom";
import Homepage from 'containers/Homepage';
import Shop from 'containers/Shop';
import Blog from 'containers/Blog';
import Login from 'containers/Login';
import Products from 'containers/Products';
import Account from 'containers/AccountPage';
import { Address, DashAcc, Information } from 'components/Account';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
        <Route path="products" element={<Products />} />
        <Route path="account" element={<Account />}>
          <Route index element={<DashAcc />} />
          <Route path="information" element={<Information />} />
          <Route path="address" element={<Address />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  );
}

export default App;
