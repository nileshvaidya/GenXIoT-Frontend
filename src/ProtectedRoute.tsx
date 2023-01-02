import React from "react";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { useStateValue } from "./store/StateProvider";

export const ProtectedRoute = ({ children }) => {
  const [{token }, dispatch] = useStateValue();
  if (!token) {
    // user is not authenticated
    return <Login />;
  }
  return children;
};