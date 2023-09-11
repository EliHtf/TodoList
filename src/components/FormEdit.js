import { useState } from "react";
import { v4 } from "uuid";
import React from "react";

import {
  Box,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

//component
import Form from "./Form";
import TodoList from "./TodoList";

function FormEdit() {
  //states
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState({
    Todo: [
      { id: v4(), name: "shoes" },
      { id: v4(), name: "bags" },
      { id: v4(), name: "shirts" },
    ],
    Done: [],
  });

  const [editIndex, setEditIndex] = useState(-1);
  const [editTodoName, setEditTodoName] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState("");
  const [checkedTodos, setCheckedTodos] = useState([]);

  //functions

  function handleChangeInput(event) {
    setNewTodo(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      todos.Todo.push({ id: v4(), name: newTodo });
      setTodos({ ...todos, Todo: todos.Todo });
      setNewTodo("");
    }
  }

  const handleDeleteConfirmation = () => {
    const updatedTodos = { ...todos };

    Object.keys(updatedTodos).forEach(function (key) {
      updatedTodos[key] = updatedTodos[key].filter(
        (item) => item.id !== deleteIndex
      );
    });

    setTodos(updatedTodos);
    setIsDeleteDialogOpen(false);
  };

  function handleDeleteTodo(id) {
    setDeleteIndex(id);
    setIsDeleteDialogOpen(true);
  }

  const handleEditTodo = (id, name) => {
    setEditIndex(id);
    setEditTodoName(name);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    const updatedTodos = { ...todos };
    Object.keys(updatedTodos).forEach(function (key) {
      updatedTodos[key] = updatedTodos[key].map((item) =>
        item.id === editIndex ? { ...item, name: editTodoName } : item
      );
    });

    setTodos(updatedTodos);
    handleCancelEdit();
  };

  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteDialogOpen(false);
  };

  function handleToggleTodoCheck(id) {
    if (checkedTodos.includes(id)) {
      setCheckedTodos(checkedTodos.filter((todoId) => todoId !== id));
    } else {
      setCheckedTodos([...checkedTodos, id]);
    }
    setTodos((prevTodos) => {
      const updatedTodos = { ...prevTodos };
      const todoIndex = updatedTodos.Todo.findIndex((todo) => todo.id === id);
      if (todoIndex > -1) {
        const [movedTodo] = updatedTodos.Todo.splice(todoIndex, 1);
        updatedTodos.Done.push(movedTodo);
      }
      return updatedTodos;
    });
  }
  return (
    <>
      <Box bgcolor="secondary.main" height="100vh">
        <Form
          onSubmit={handleSubmitForm}
          newTodo={newTodo}
          onChange={handleChangeInput}
        />
        <TodoList
          todos={todos}
          checkedTodos={checkedTodos}
          onDeleteItem={handleDeleteTodo}
          onEditItem={handleEditTodo}
          onToggleTodoCheck={handleToggleTodoCheck}
        />
        <Modal
          isOpen={isEditModalOpen}
          onClose={handleCancelEdit}
          onSaveEdit={handleSaveEdit}
          onCancelEdit={handleCancelEdit}
          editTodoName={editTodoName}
          setEditTodoName={setEditTodoName}
        />
        <Dialog
          onDeleteDialogOpen={isDeleteDialogOpen}
          onClose={handleCancelDelete}
          onCancelDelete={handleCancelDelete}
          onDeleteConfirmation={handleDeleteConfirmation}
        />
      </Box>
    </>
  );
}

export default FormEdit;
