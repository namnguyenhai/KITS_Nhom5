import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductAdd from '../pages/Products/ProductAdd';
import Login from '../pages/Login';
import DefaultLayout from 'layouts/DefaultLayout';

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/products', component: Products, layout: DefaultLayout },
    { path: '/products/add', component: ProductAdd, layout: DefaultLayout },
    { path: '/login', component: Login, layout: null },

];

export { publicRoutes };