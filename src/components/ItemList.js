import { IconButton, ListItemText } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";

import ListItem from "./list/listItem";
import Checkbox from "./formik/checkbox";
function ItemList({
  item,
  onEditItem,
  onDeleteItem,
  onToggleTodoCheck,
  checkedTodos,
}) {
  return (
    <>
      <ListItem>
        <Checkbox
          onChange={onToggleTodoCheck}
          checked={checkedTodos.includes(item.id)}
          item={item}
        />
        <ListItemText primary={item.name} />
        <IconButton
          sx={{ padding: "2px" }}
          onClick={() => onDeleteItem(item.id)}
        >
          <Delete />
        </IconButton>
        <IconButton
          sx={{ padding: "0px" }}
          onClick={() => onEditItem(item.id, item.name)}
        >
          <Edit />
        </IconButton>
      </ListItem>
    </>
  );
}

export default ItemList;
