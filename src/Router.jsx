import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home/Home";
import Main from "./Main/Main";
import About from "./Component/About/About";
import ContactMe from "./Component/ContactMe/ContactMe";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <ContactMe></ContactMe>
        }
      ]
    },


  ]);

export default router