import { Box } from "@mui/material";
import React from "react";
import TextField from "./formik/textField";
import Button from "./button";

const Form = ({ onSubmit, newTodo, onChange }) => {
  return (
    <Box bgcolor="secondary.light" p={3}>
      <form onSubmit={onSubmit}>
        <Box display={"flex"} justifyContent={"center"}>
          <TextField
            id="name"
            label="Name"
            name="name"
            value={newTodo}
            onChange={onChange}
            placeholder="text ..."
            variant="outlined"
            sx={{ mr: 2 }}
          />

          <Button variant="contained" type="submit" onClick={onSubmit}>
            submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
