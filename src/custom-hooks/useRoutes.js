import PrivateRoute from "../components/general/PrivateRoute";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/dashboard";
import Products from "../pages/dashboard/products";
import AddProduct from "../pages/dashboard/products/AddProduct";
import Home from "../pages/website";

const useRout = (onLoginClick,onLoginSuccess) => {

    const routes = [
        { path: "/", element: <Home onLoginClick={onLoginClick} /> },
        { path: "/login", element: <SignIn onLoginSuccess={onLoginSuccess} /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/dashboard", element:  <PrivateRoute><Dashboard /></PrivateRoute> },
        { path: "/products", element:  <PrivateRoute><Products /></PrivateRoute> },
        { path: "/add-product", element:  <PrivateRoute><AddProduct /></PrivateRoute> },
        { path: "/edit-product/:id", element:  <PrivateRoute><AddProduct /></PrivateRoute> },
    ];
    return routes;
}


export default useRout;