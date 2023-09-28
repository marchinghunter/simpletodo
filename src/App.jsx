import "./App.css";
import Addtodo from "./Components/Addtodo";
import Todolist from "./Components/Todolist";
import { FcTodoList } from "react-icons/fc";

function App() {
  return (
    <div className="container">
        <h1 className="todoheading">
          Todo List <FcTodoList className="icon" />
        </h1>
      <Addtodo />
      <Todolist />
    </div>
  );
}

export default App;
