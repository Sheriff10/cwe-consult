import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <AppContext.Provider value={{ isNavOpen, toggleNav }}>
      {children}
    </AppContext.Provider>
  );
};
