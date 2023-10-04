import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Roots = () => {
   return (
      <div className="max-w-6xl mx-auto font-poppins">
         <Outlet></Outlet>
         <ToastContainer />
      </div>
   );
};

export default Roots;