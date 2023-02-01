import React, { useState } from "react";
import Dialog from "@components/Dialog/Dialog";
import { Typography } from "@mui/material";

const ErrorDialogContext = React.createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

interface ErrorDialogProps {
  children: React.ReactNode;
}

export const ErrorDialogContextProvider: React.FC<ErrorDialogProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };
  return (
    <ErrorDialogContext.Provider
      value={{
        isOpen: isOpen,
        onOpen: handleDialogOpen,
        onClose: handleDialogClose,
      }}
    >
      <>
        {children}
        <Dialog open={isOpen} onClose={handleDialogClose} id={"error"}>
          <Typography variant="h6">
            錯誤！目前無法讀取資料，請稍候再試，或聯絡網管人員
          </Typography>
        </Dialog>
      </>
    </ErrorDialogContext.Provider>
  );
};

export default ErrorDialogContext;
