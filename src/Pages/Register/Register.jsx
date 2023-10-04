import { useContext, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import { updateProfile } from "firebase/auth";



const Register = () => {
   const [error, setError] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const { createUser } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleRegister = e =>{
      e.preventDefault();
      // const name = e.target.name.value;
      const img = e.target.img.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      // const terms = e.target.terms.checked;


      setError('')

      createUser(email, password)
      .then(result => {
         toast('succesfully user created')
         updateProfile(result.user,{
            photoURL: img
         })
         .then('profile update')
         .catch('an error occoured')
         // cler
         navigate('/')
      })
      .catch(error =>{
         console.log(error.message)
         setError(error.message)
      })
   }

   return (
      <div>
         <Navbar></Navbar>
         <div>
            <div className="w-1/2 px-24 py-20 mx-auto">
               <h1 className="text-[#403F3F] font-semibold text-3xl pb-12 border-b text-center">Register your account</h1>
               <form onSubmit={handleRegister}>

                  <label htmlFor="name" className="block mt-12 text-[#403F3F] text-xl font-semibold">Your Name</label>
                  <input required type="text" name="name" placeholder="enter your name" className="p-5 bg-gray-100 border rounded-sm placeholder:text-[#9F9F9F] w-full mt-4" />

                  <label htmlFor="image" className="block mt-12 text-[#403F3F] text-xl font-semibold">Photo URL</label>
                  <input required type="text" name="img" placeholder="enter your Photo URL" className="p-5 bg-gray-100 border rounded-sm placeholder:text-[#9F9F9F] w-full mt-4" />

                  <label htmlFor="email" className="block mt-12 text-[#403F3F] text-xl font-semibold">Eamil</label>
                  <input required type="email" name="email" placeholder="enter your email address" className="p-5 bg-gray-100 border rounded-sm placeholder:text-[#9F9F9F] w-full mt-4" />

                  <label htmlFor="password" className="block text-[#403F3F] text-xl font-semibold mt-6">Password</label>
                  <div className="relative">
                     <input type={showPassword ? 'text' : 'password'} name="password" placeholder="enter your password" className="block bg-gray-100  p-5 border rounded-sm placeholder:text-[#9F9F9F] w-full mt-4" />
                     {
                        showPassword ?
                           <AiFillEye className="absolute right-5 text-xl top-6" onClick={() => setShowPassword(!showPassword)} />
                           : <AiFillEyeInvisible className="absolute right-5 text-xl top-6" onClick={() => setShowPassword(!showPassword)} />
                     }
                  </div>

                  <p> <input type="checkbox" required name="terms" className="mr-2 mt-5" />Accept <a href="/terms" className="text-[#706F6F] font-semibold">Term & Conditions</a></p>

                  <button className="bg-[#403F3F] btn text-white w-full mt-7">Register</button>
               </form>
               {
                  error && <p className="text-red-500 font-medium mt-3">{error}</p>
               }
               
            </div>
         </div>
      </div>
   );
};

export default Register;