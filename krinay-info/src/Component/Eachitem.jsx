import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { FaTrashAlt } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";
import { FaCheck } from "react-icons/fa";
import { MdClear } from "react-icons/md";

const EachItem = ({ todo, toDoDeleteHandler, toDoCompleteHandler }) => {
  return (
    <ListItem className={todo.is_completed ? "todo-completed" : ""}>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={todo.text} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="completed"
          onClick={() => toDoCompleteHandler(todo)}
        >
          {todo.is_completed ? <MdClear /> : <FaCheck/>}
        </IconButton>
        <IconButton
          onClick={() => toDoDeleteHandler(todo)}
          edge="end"
          aria-label="delete"
        >
          <FaTrashAlt />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default EachItem;
