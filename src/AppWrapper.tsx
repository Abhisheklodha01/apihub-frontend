import { useState } from "react";
import App from "./App";
import {userContex, User} from '@/context/userContex'
const AppWraper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  return (
    <userContex.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      <App />
    </userContex.Provider>
  );
};

export default AppWraper;