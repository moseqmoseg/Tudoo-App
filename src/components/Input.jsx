import { React, useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/todoActions";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const addTodo = () => {
    dispatch(addTodoAction({ text: input, id: Date.now() }));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
        variant="standard"
        color="secondary"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? valueChecker() : null)}
      />
      <IconButton color="secondary" onClick={valueChecker}>
        <AddCircleIcon />
      </IconButton>
    </div>
  );
}
