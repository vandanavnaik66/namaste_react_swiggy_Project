import ReactDOM from "react-dom/client";
import React, { lazy, Suspense } from "react";
import "./index.css";
import Main from "./src/components/Main";
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import BodyComp from "./src/components/BodyComp";
import ErrorPage from "./src/components/ErrorPage";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Cart from "./src/components/Cart";

const SwiggyInstaMart=lazy(()=>import("./src/components/SwiggyInstaMart"))

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
        {
            path: "/",
            element: <BodyComp />
          },
        {
            path: "/about",
            element: <About />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/restaurant/:ResId",
            element: <RestaurantMenu />,
          },
          {
            path: "/cart",
            element: <Cart/>,
          },
          {
            path: "/swiggyInstaMart",
            element:
            <Suspense fallback={<h3>Loading..........</h3>}>
            <SwiggyInstaMart />
            </Suspense>,
          }
    ],
    errorElement:<ErrorPage/>
    
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter
}/>);
