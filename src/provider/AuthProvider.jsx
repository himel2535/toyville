import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // console.log(user);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //  ---Successful sweet alert---
  const successAlert = (
    title = "Congratulations",
    text = "You Are Successful",
    imageUrl = null
  ) => {
    Swal.fire({
      icon: "success",
      title: title,
      text: text,
      imageUrl: imageUrl || null,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonColor: "#000000",
      confirmButtonText: "OK",
    });
  };

  // //  ---Error sweet alert---
  const errorAlert = (title = "Oops...", text = "Something went wrong!") => {
    Swal.fire({
      icon: "error",
      title,
      text: text,
      confirmButtonColor: "#000000",
    });
  };

  const authData = {
    user,
    setUser,
    createUser,
    errorAlert,
    successAlert,
    logout,
    login,
    loading,
    setLoading,
    updateUser,
    signInWithGoogle,
    resetPassword,
    auth,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
