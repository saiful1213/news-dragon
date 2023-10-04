import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsTwitter } from "react-icons/bs"
import  qZone1  from "../../../assets/qZone1.png"
import  qZone2  from "../../../assets/qZone2.png"
import  qZone3  from "../../../assets/qZone3.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const RightSideNav = () => {
   const { googleSignIn, githubSignIn } = useContext(AuthContext)

   const handleGoogleSignIn = () =>{
      googleSignIn()
      .then(result => {
         console.log(result.user)
      })
      .catch(error =>{
         console.log(error.message)
      })
   }

   const hadleGithubSignIn = () =>{
      githubSignIn()
      .then(result => {
         console.log(result.user)
      })
      .catch(error =>{
         console.log(error.message)
      })
   }

   return (
      <div>
         <div className="mb-6 px-4">
            <h1 className="mb-4 font-bold text-xl">Login With</h1>
            <button className="btn btn-outline w-full mb-2" onClick={handleGoogleSignIn}>
               <BsGoogle />
               Login with Google
            </button>
            <button className="btn btn-outline w-full" onClick={hadleGithubSignIn}>
               <BsGithub />
               Login with Github
            </button>
         </div>
         <div className="mb-6 p-4">
            <h1 className="mb-4 font-bold text-xl">Find Us On</h1>
            <a href="" className="flex items-center font-medium border p-4 rounded-t-lg">
               <BsFacebook className="mr-4"/>
               Facebook
            </a>
            <a href="" className="flex items-center font-medium border-x p-4 rounded-t-lg">
               <BsTwitter className="mr-4" />
               Twitter
            </a>
            <a href="" className="flex items-center font-medium border p-4 rounded-b-lg">
               <BsInstagram className="mr-4" />
               Instagram
            </a>
         </div>
         <div className="mb-6 p-4">
            <h1 className="mb-4 font-bold text-xl">Q-Zone</h1>
            <img src={qZone1} />
            <img src={qZone2} />
            <img src={qZone3} />
         </div>
      </div>
   );
};

export default RightSideNav;