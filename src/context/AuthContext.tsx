import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/init';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
  User,
} from 'firebase/auth';

const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: (email: string, password: string) => Promise,
  registerUser: (email: string, password: string) => Promise,
  logout: () => Promise,
  forgotPassword: (...args: any) => Promise,
  resetPassword: (...args: any) => Promise,
});

interface IContextProps {
  children?: React.ReactNode;
}

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }: IContextProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log('The user is', currentUser);
  }, [currentUser]);

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function registerUser(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function forgotPassword(email: string) {
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:5173/login`,
    });
  }

  function resetPassword(oobCode: string, newPassword: string) {
    return confirmPasswordReset(auth, oobCode, newPassword);
  }

  function logout() {
    return signOut(auth);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  const value = {
    currentUser,
    signInWithGoogle,
    login,
    registerUser,
    logout,
    forgotPassword,
    resetPassword,
  } as any;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
