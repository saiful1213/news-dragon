import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { AiFillEyeInvisible } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"

const Login = () => {
   const [error, setError] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const { loginUser } = useContext(AuthContext);


   const location = useLocation()
      // console.log(location, "from login page")
   const navigate = useNavigate();

   const handleLogin = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      

      setError('')

      loginUser(email, password)
         .then(result => {
            console.log(result.user)
            toast('succesfully login')
            // navigate after login
            navigate(location?.state ? location.state : '/')
         })
         .catch(error => {
            console.log(error.message)
            setError(error.message)
         })
   }

   return (
      <div>
         <Navbar></Navbar>
         <div className="flex justify-center items-center h-screen">
            <div className="w-1/2 px-24 py-20">
               <h1 className="text-[#403F3F] font-semibold text-4xl pb-12 border-b text-center">Login your account</h1>
               <form onSubmit={handleLogin}>

                  <label htmlFor="email" className="block mt-12 text-[#403F3F] text-xl font-semibold">Eamil address</label>
                  <input type="email" name="email" placeholder="enter your email address" className="p-5 bg-gray-100 border rounded-sm placeholder:text-[#9F9F9F] w-full mt-4" />

                  <label htmlFor="password" className="block text-[#403F3F] text-xl font-semibold mt-6">Password</label>
                  <div className="relative">
                     <input type={showPassword ? 'text' : 'password'} name="password" placeholder="enter your password" className="block bg-gray-100  p-5 border rounded-sm placeholder:text-[#9F9F9F] w-full mt-4" />
                     {
                        showPassword ?
                           <AiFillEye className="absolute right-5 text-xl top-6" onClick={() => setShowPassword(!showPassword)} />
                           : <AiFillEyeInvisible className="absolute right-5 text-xl top-6" onClick={() => setShowPassword(!showPassword)} />
                     }
                  </div>

                  <button className="bg-[#403F3F] btn text-white w-full mt-7">Login</button>
               </form>
               <p className="mt-7 text-center font-semibold"><span className="text-[#706F6F]">Dont Have An Account ?</span> <Link to="/register"><span className="text-[#FF8C47]">Register</span></Link></p>
               {
                  error && <p className="text-red-500 font-medium mt-3">{error}</p>
               }
            </div>
         </div>
      </div>
   );
};

export default Login;