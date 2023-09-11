import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import DialogMD from "@mui/material/Dialog/Dialog";
import React from "react";
import Button from "./button";

const Dialog = ({
  onDeleteDialogOpen,
  onClose,
  onCancelDelete,
  onDeleteConfirmation,
}) => {
  return (
    <DialogMD
      open={onDeleteDialogOpen}
      onClose={onClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
    >
      <DialogTitle id="delete-dialog-title">Delete Todo</DialogTitle>
      <DialogContent>
        <DialogContent id="delete-dialog-description">
          Are you sure to delete this item?
        </DialogContent>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <Button onClick={onCancelDelete}>Cancel</Button>
        <Button variant="contained" onClick={onDeleteConfirmation} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </DialogMD>
  );
};

export default Dialog;
