"use client";

import React, { ReactNode, useEffect } from "react";

import { authSlice, useDispatch } from "@/lib/redux";

interface AuthInitializerProps {
  children: ReactNode;
}

const AuthInitializer: React.FC<AuthInitializerProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userFromLocalStorage = localStorage.getItem("user");

      if (userFromLocalStorage) {
        dispatch(authSlice.actions.setUser(JSON.parse(userFromLocalStorage)));
      }
    }
  }, [dispatch]);

  return children;
};

export default AuthInitializer;
