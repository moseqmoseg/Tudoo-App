import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodoAction } from "../redux/todoActions";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import "./TodoList.css";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todos.todos);

  const listTodos = todoItems.map((todo) => (
    <li className="todo" key={todo.id.toString()}>
      <span className="todoText">{todo.text}</span>
      <span></span>
      <Checkbox
        size="small"
        color="primary"
        icon={<RadioButtonUncheckedOutlinedIcon />}
        checkedIcon={<RadioButtonCheckedOutlinedIcon />}
        onChange={() => {
          setTimeout(() => {
            dispatch(removeTodoAction({ id: todo.id }));
          }, 200);
        }}
      />
    </li>
  ));

  return <ul className="todoList">{listTodos}</ul>;
}
