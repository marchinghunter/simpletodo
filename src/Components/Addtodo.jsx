import React,{useState} from 'react'
import {useTodo} from '../store/Store'

const Addtodo = () => {
    const {handleAddtodo} = useTodo();
    const [todoinput,setTodoInput] = useState('');
    const submitHandler = (e)=>{
        e.preventDefault();
        handleAddtodo(todoinput)
        setTodoInput('')
    }
  return (
    <>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Add todo' value={todoinput} onChange={(e)=>setTodoInput(e.target.value)} className='textfield'/>
            <button type="submit" className='addbtn'>Add</button>
        </form>
    </>
  )
}

export default Addtodo