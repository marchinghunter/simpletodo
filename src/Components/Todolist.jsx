import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useTodo } from "../store/Store";

const Todolist = () => {
  const { todolist, deleteTodo } = useTodo();
  return (
    <>
      {todolist.map((todo, key) => {
        return (
          <div className="list" key={key}>
            <h1 className="listitem">{todo.value}</h1>
            <button onClick={()=>deleteTodo(todo.id)} className="deletebtn" ><AiFillDelete/></button>
          </div>
        );
      })}
    </>
  );
};

export default Todolist;
