import { Layout } from 'components/Layout';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import { Route, Routes } from "react-router-dom";
import Homepage from 'containers/Homepage';
import Shop from 'containers/Shop';
import Blog from 'containers/Blog';
import Account from 'containers/AccountPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
        <Route path="account" element={<Account />}>

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
