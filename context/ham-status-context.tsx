import React, { useState } from "react";

const HamStatusContext = React.createContext({
  isHamOpen: false,
  handleToggleHamStatus: () => {},
  handleClose: () => {},
});

interface HamStatusContextProviderProps {
  children: React.ReactNode;
}

export const HamStatusContextProvider: React.FC<
  HamStatusContextProviderProps
> = ({ children }) => {
  const [isHamOpen, setIsHamOpen] = useState(false);

  const handleToggleHamStatus = () => {
    setIsHamOpen(!isHamOpen);
  };
  const handleClose = () => {
    setIsHamOpen(false);
  };

  return (
    <HamStatusContext.Provider
      value={{
        isHamOpen,
        handleToggleHamStatus,
        handleClose,
      }}
    >
      {children}
    </HamStatusContext.Provider>
  );
};

export default HamStatusContext;
