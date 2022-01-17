import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1 className="logo">Add a Tudoo</h1>
      <Input />
      <TodoList />
    </div>
  );
}

export default App;
