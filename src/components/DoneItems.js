import React from "react";
import { DoneContext } from "./Form";
import { useContext } from "react";
import { Box } from "@mui/material";

const DoneItems = () => {
  const done = useContext(DoneContext);
  return (
    <>
      {done.map((todo) => (
        <Box key={todo.id} display="flex" align-items="center" sx={{ m: 3 }}>
          <Box component="h3" mx={{ mr: 2, color: "white" }}>
            {todo.name}
          </Box>
        </Box>
      ))}
    </>
  );
};

export default DoneItems;
