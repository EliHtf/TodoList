import React from "react";
import ListItemMD from "@mui/material/ListItem";
const ListItem = ({ children }) => {
  return (
    <>
      <ListItemMD>{children}</ListItemMD>
    </>
  );
};

export default ListItem;
