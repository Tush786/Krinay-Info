import React from "react";
import List from "@material-ui/core/List";
// import EachItem from "./Eachitem";

const Dodos = ({ todos, toDoDeleteHandler, toDoCompleteHandler }) => {
  return (
    <List>
      {/* {todos.map((todo) => {
        return (
          <EachItem
            toDoCompleteHandler={toDoCompleteHandler}
            toDoDeleteHandler={toDoDeleteHandler}
            key={todo.id}
            todo={todo}
          />
        );
      })} */}
    </List>
  );
};

export default Dodos;
