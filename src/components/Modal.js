import { Box } from "@mui/material";
import ModalMD from "@mui/material/Modal/Modal";
import React from "react";
import TextField from "./formik/textField";
import Button from "./button";

const Modal = ({
  isOpen,
  onClose,
  onSaveEdit,
  onCancelEdit,
  editTodoName,
  onChange,
}) => {
  return (
    <ModalMD
      open={isOpen}
      onClose={onClose}
      aria-labelledby="edit-modal-title"
      aria-describedby="edit-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <TextField label="Edit Todo" value={editTodoName} onChange={onChange} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Button onClick={onCancelEdit} sx={{ marginRight: "10px" }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onSaveEdit}>
            Save
          </Button>
        </Box>
      </Box>
    </ModalMD>
  );
};

export default Modal;
