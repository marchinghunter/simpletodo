import { createContext, useContext, useState } from "react";

const TodoContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [todolist, setTodoList] = useState([]);

  const handleAddtodo = (todo) => {
    if(todo=='')
        return;
    setTodoList((prev) => {
      const newTodos = [
        {
          id: Math.random().toString(),
          value: todo,
        },
        ...prev,
      ];
      return newTodos;
    });
  };
  
  const deleteTodo = (id) => {
    setTodoList((prev) => {
      let newTodo = prev.filter((item) => item.id !== id);
      return newTodo;
    });
  };

  return (
    <TodoContext.Provider value={{ todolist, handleAddtodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
export const useTodo = () => {
  const todoContext = useContext(TodoContext);
  return todoContext;
};
export default ContextProvider;
