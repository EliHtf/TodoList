import { useState } from "react";
import { v4 } from "uuid";
import React from "react";
import { createContext } from "react";
//component
import ListItem from "./ListItem";
import DoneItems from "./DoneItems";

import {
  Box,
  Button,
  TextField,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

//context
export const DoneContext = React.createContext();

function Form() {
  //states
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: v4(), name: "shoes", checked: false },
    { id: v4(), name: "bags", checked: false },
    { id: v4(), name: "shirts", checked: false },
  ]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editTodo, setEditTodo] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(-1);
  const [doneList, setDoneList] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [showDone, setShowDone] = useState(false);
  const [showTodo, setShowTodo] = useState(false);
  const [todoList, setTodoList] = useState([]);
  //functions

  function changeHandler(event) {
    setNewTodo(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: v4(), name: newTodo, checked: false }]);
      setNewTodo("");
    }
  }

  const handleDeleteConfirmation = (index) => {
    setIsDeleteDialogOpen(true);
    setDeleteIndex(index);
  };

  function handleDeleteTodo(index) {
    const updatedTodos = [...todos];
    updatedTodos.splice(deleteIndex, 1);
    setTodos(updatedTodos);
    setIsDeleteDialogOpen(false);
  }

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditTodo(todos[index]);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex].name = editTodo;
    setTodos(updatedTodos);
    setIsEditModalOpen(false);
  };

  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteDialogOpen(false);
  };

  const doneHandler = () => {
    const done = todos.filter((item) => item.checked === true);
    setDoneList(done);
    setShowDone(true);
    setShowTodo(false);
    setShowAll(false);
  };

  const todoHandler = () => {
    const todo = todos.filter((item) => item.checked === false);
    setTodoList(todo);
    setShowTodo(true);
    setShowAll(false);
    setShowDone(false);
  };

  const showHandler = () => {
    setShowAll(true);
    setShowDone(false);
    setShowTodo(false);
  };

  function handleToggleItem(id) {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }
  return (
    <>
      <Box bgcolor="secondary.main" height="100vh">
        <Box bgcolor="secondary.light" p={3}>
          <form onSubmit={submitHandler}>
            <Box display={"flex"} justifyContent={"center"}>
              <TextField
                id="name"
                label="Name"
                name="name"
                value={newTodo}
                onChange={changeHandler}
                placeholder="text ..."
                variant="outlined"
                sx={{ mr: 2 }}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={submitHandler}
                className="waves-effect"
              >
                submit
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className="waves-effect"
              onClick={doneHandler}
              sx={{ mr: 2 }}
            >
              Done
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className="waves-effect"
              onClick={todoHandler}
              sx={{ mr: 2 }}
            >
              Todo
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className="waves-effect"
              onClick={showHandler}
            >
              All
            </Button>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          {showAll &&
            todos.map((todo, index) => (
              <ListItem
                key={todo.id}
                item={todo}
                index={index}
                daleteHandler={handleDeleteConfirmation}
                editHandler={handleEditTodo}
                onToggleItem={handleToggleItem}
              />
            ))}
          {showTodo &&
            todoList.map((todo, index) => (
              <ListItem
                key={todo.id}
                item={todo}
                index={index}
                daleteHandler={handleDeleteConfirmation}
                editHandler={handleEditTodo}
              />
            ))}
          {showDone && (
            <DoneContext.Provider value={doneList}>
              <DoneItems />
            </DoneContext.Provider>
          )}
        </Box>

        <Modal
          open={isEditModalOpen}
          onClose={handleCancelEdit}
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
            <TextField
              label="Edit Todo"
              value={editTodo.name}
              onChange={(e) => setEditTodo(e.target.value)}
              fullWidth
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >
              <Button onClick={handleCancelEdit} sx={{ marginRight: "10px" }}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleSaveEdit}>
                Save
              </Button>
            </Box>
          </Box>
        </Modal>

        <Dialog
          open={isDeleteDialogOpen}
          onClose={handleCancelDelete}
          aria-labelledby="delete-dialog-title"
          aria-describedby="delete-dialog-description"
        >
          <DialogTitle id="delete-dialog-title">Delete Todo</DialogTitle>
          <DialogContent>
            <DialogContent Text id="delete-dialog-description">
              آیا برای حذف این آیتم مطمعن هستید؟
            </DialogContent>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelDelete}>Cancel</Button>
            <Button variant="contained" onClick={handleDeleteTodo} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

      <button onClick={() => console.log({ todos })}>click</button>
    </>
  );
}

export default Form;
