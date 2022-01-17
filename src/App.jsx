import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1> Add a Tudo:</h1>
      <Input />
      <h2>You Gotta Do This:</h2>
      <TodoList />
    </div>
  );
}

export default App;
