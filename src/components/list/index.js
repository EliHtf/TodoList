import React from "react";
import ListMD from "@mui/material/List";
const List = ({ children }) => {
  return (
    <>
      <ListMD>{children}</ListMD>
    </>
  );
};

export default List;
