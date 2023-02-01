import * as React from "react";

import { styled } from "@mui/material/styles";
import MuiDialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(MuiDialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  id: string;
  children?: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

const Dialog: React.FC<DialogProps> = ({
  open,
  children,
  onClose,
  maxWidth,
}) => {
  return (
    <div>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="dialog"
        open={open}
        maxWidth={maxWidth}
      >
        <DialogTitle sx={{ m: 1, p: 2 }}>
          {onClose ? (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default Dialog;
