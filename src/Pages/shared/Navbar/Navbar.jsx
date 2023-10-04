import { Link, NavLink } from "react-router-dom";
import defalutUserImg from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { RiMenuLine } from "react-icons/ri";


const Navbar = () => {
   const Navlinks = <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/career">Career</NavLink></li>
   </>

   const { user, logOut } = useContext(AuthContext)


   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost md:hidden">
                  <RiMenuLine className="text-2xl"/>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {Navlinks}
               </ul>
            </div>
         </div>
         <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">
               {Navlinks}
            </ul>
         </div>
         <div className="navbar-end">
            <div className="avatar">
               <div className="w-10 rounded-full">
                  <img src={user ? user?.photoURL : defalutUserImg} />
               </div>
            </div>
            {
               user ?
                  <button className="btn btn-ghost btn-active ml-2" onClick={logOut}>
                     Logout
                  </button> :
                  <Link to="/login"><button className="btn btn-ghost btn-active ml-2">
                     Login
                  </button></Link>
            }
         </div>
      </div>
   );
};

export default Navbar;