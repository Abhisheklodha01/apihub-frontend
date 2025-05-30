import React from "react";

export interface User {
    _id: string;
    email: string;
    name: string;
    phoneNumber: string;
    password: string;
    isVerified: boolean
    accessToken: string,
    otp: string,
  }
  
  interface userContextType {
    isAuthenticated: boolean;
    user?: User;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  }

export const userContex = React.createContext<userContextType>({ 
    isAuthenticated: false,
    user: undefined,
    setIsAuthenticated: () => {},
    setUser: () => {}
 
 });
