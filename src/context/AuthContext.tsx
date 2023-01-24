import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
  confirmPasswordReset,
} from "firebase/auth";

const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
});

interface IContextProps {
  children?: React.ReactNode;
}

export const useAuth = () => useContext(AuthContext);


export default function AuthContextProvider({ children }: IContextProps) {
    const [currentUser, setCurrentUser] = useState<any>(null)
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        setCurrentUser(user ? user : null)
      })
      return () => {
        unsubscribe()
      }
    }, [])
  
    useEffect(() => {
      console.log('The user is', currentUser)
    }, [currentUser])
  
    function login(email: string, password: string) {
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    function register(email: string, password: string) {
      return createUserWithEmailAndPassword(auth, email, password)
    }
  
    function forgotPassword(email: string) {
      return sendPasswordResetEmail(auth, email, {
        url: `http://localhost:5173/login`,
      })
    }
  
    function resetPassword(oobCode: string, newPassword: string) {
      return confirmPasswordReset(auth, oobCode, newPassword)
    }
  
    function logout() {
      return signOut(auth)
    }
  
    function signInWithGoogle() {
      const provider = new GoogleAuthProvider()
      return signInWithPopup(auth, provider)
    }
  
    const value = {
      currentUser,
      signInWithGoogle,
      login,
      register,
      logout,
      forgotPassword,
      resetPassword,
    } as any;
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }