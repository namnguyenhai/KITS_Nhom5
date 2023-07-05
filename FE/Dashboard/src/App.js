import { Layout } from 'components/Layout';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from 'containers/Homepage';
import Shop from 'containers/Shop';
import Blog from 'containers/Blog';
import Login from 'containers/Login';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
      </Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  );
}

export default App;
