import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error"
import Home from "../Pages/Home/Home";
import Roots from "../Layouts/Roots";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";



const Routes = createBrowserRouter([
   {
      path: '/',
      element: <Roots></Roots>,
      errorElement: <Error></Error>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: '/news/:id',
            element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes> 
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         }
      ]
   }
])
export default Routes;