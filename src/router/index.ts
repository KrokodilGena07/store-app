import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductIdPage from "../pages/ProductIdPage";
import ProductPage from "../pages/ProductPage";

interface IRoute {
    path: string;
    element: React.FC;
}

export enum RouteNames {
    HOME = '/',
    PRODUCT_PAGE = '/products',
    PRODUCT_ID_PAGE = '/product/:id',
    CART = '/cart',
    LOGIN = '/login'
};

const baseRoutes: IRoute[] = [
    {path: RouteNames.HOME, element: HomePage},
    {path: RouteNames.PRODUCT_PAGE, element: ProductPage},
    {path: RouteNames.PRODUCT_ID_PAGE, element: ProductIdPage},
    {path: RouteNames.CART, element: CartPage},
    {path: '*', element: ErrorPage}
];

export const privateRoutes: IRoute[] = [
    ...baseRoutes
];

export const publicRoutes: IRoute[] = [
    ...baseRoutes,
    {path: RouteNames.LOGIN, element: LoginPage}
];