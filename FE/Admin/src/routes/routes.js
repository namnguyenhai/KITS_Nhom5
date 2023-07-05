import Home from '../pages/Home';
import Login from '../pages/Login';
import DefaultLayout from 'layouts/DefaultLayout';

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/login', component: Login, layout: null },

];

export { publicRoutes };