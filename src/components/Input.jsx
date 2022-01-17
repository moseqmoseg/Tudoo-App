import { React, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../redux/todoActions";
import { TextField, IconButton } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

export default function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todos.todos);
  const inputRef = useRef(null);
  const addTodo = () => {
    dispatch(addTodoAction({ text: input, id: Date.now() }));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [todoItems]);

  function valueChecker() {
    if (input.length > 0) {
      addTodo();
      setInput("");
    } else {
      alert("You need to add a Todo bromigo");
    }
  }
  return (
    <div className="input">
      <TextField
        inputRef={inputRef}
        InputProps={{ style: { fontFamily: "Sora" } }}
        InputLabelProps={{ style: { fontSize: 40 } }}
        variant="standard"
        color="primary"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? valueChecker() : null)}
      />
      <IconButton color="primary" onClick={valueChecker}>
        <CreateIcon />
      </IconButton>
    </div>
  );
}
