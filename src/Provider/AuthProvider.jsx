import {
   createUserWithEmailAndPassword, onAuthStateChanged,
   signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config"


export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoding] = useState(true)

   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   // create new user
   const createUser = (email, password) => {
      setLoding(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   // googleSignIn
   const googleSignIn = () => {
      setLoding(true)
      return signInWithPopup(auth, googleProvider)
   }

   // githubSignIn
   const githubSignIn = () => {
      setLoding(true)
      return signInWithPopup(auth, githubProvider)
   }

   // login user
   const loginUser = (email, password) => {
      setLoding(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   // getSignInUser
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         setLoding(false)
      })
      return () => {
         unSubscribe()
      }
   }, [])

   // logout user
   const logOut = () => {
      signOut(auth)
         .then('sign out successfully')
         .catch('an error happend')
   }



   const userInfo = { user, createUser, loginUser, logOut, googleSignIn, githubSignIn, loading }

   return (
      <AuthContext.Provider value={userInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;