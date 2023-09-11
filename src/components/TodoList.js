import { Box, Typography } from "@mui/material";
import React from "react";
import List from "./list";
import ItemList from "./ItemList";

const TodoList = ({
  todos,
  checkedTodos,
  onDeleteItem,
  onEditItem,
  onToggleTodoCheck,
}) => {
  return (
    <Box display="flex" justifyContent="space-between" sx={{ p: 3 }}>
      {Object.keys(todos).map((key) => (
        <Box key={key}>
          <Typography variant="h4" align="center">
            {key}
          </Typography>
          <List>
            {todos[key].map((todo) => (
              <ItemList
                key={todo.id}
                checkedTodos={checkedTodos}
                item={todo}
                onDeleteItem={onDeleteItem}
                onEditItem={onEditItem}
                onToggleTodoCheck={onToggleTodoCheck}
              />
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default TodoList;
