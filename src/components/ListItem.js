import { Box, IconButton } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";

function ListItem({ item, index, daleteHandler, editHandler, onToggleItem }) {
  return (
    <>
      <Box display="flex" align-items="center" sx={{ m: 3 }}>
        <input
          type="checkbox"
          value={item.checked}
          onChange={() => onToggleItem && onToggleItem(item.id)}
        />
        <Box component="h3" mx={{ mr: 2, color: "white" }}>
          {item.name}
        </Box>
        <IconButton
          sx={{ padding: "2px" }}
          onClick={() => daleteHandler(index)}
        >
          <Delete />
        </IconButton>
        <IconButton sx={{ padding: "0px" }} onClick={() => editHandler(index)}>
          <Edit />
        </IconButton>
      </Box>
    </>
  );
}

export default ListItem;
