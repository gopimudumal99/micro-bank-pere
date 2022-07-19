import React, { createContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const loginChecker = () => setIsLogin(!isLogin);

  return (
    <userContext.Provider value={{ isLogin, loginChecker }}>
      {children}
    </userContext.Provider>
  );
};
