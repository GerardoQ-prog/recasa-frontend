import { Dialog, DialogContent, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const LayoutModal = ({ open, handleClose, children }) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        {handleClose && (
          <IconButton
            sx={{
              float: "right",
              marginRight: "-10px",
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default LayoutModal;
