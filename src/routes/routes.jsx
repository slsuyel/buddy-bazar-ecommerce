import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import Main from "../LayOut/Main";
import Product from "../pages/Product/Product";
import Category from "../pages/Product/Category";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Dashboard from "../LayOut/Dashboard/Dashboard";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/payment/StripePayment/Payment";
import { baseUrl } from "../baseUrl/baseUrl";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "cart",
        element: <PrivateRoute> <Cart /></PrivateRoute>,
      },
      {
        path: "checkout",
        element: <PrivateRoute> <Checkout /></PrivateRoute>,
      },
      {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "payment/:total",
        element: <PrivateRoute><Payment /></PrivateRoute>,
      },
      {
        path: '/categories/:category',
        element: <Category />,
        loader: ({ params }) => fetch(`${baseUrl}/categories/${params.category}`)
      }
    ],
  },
]);