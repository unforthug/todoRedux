import React from "react";
import Todo from "./Todo";
import './todos.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "../Store/TodoSlice";


function Todos(){

    const {todos} = useSelector((state)=>state.todo)
    const dispatch = useDispatch();
    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(add(e.target.todo.value))
    }



    return (
        <div>
            <form onSubmit={handleAdd} >
                <input name="todo" placeholder="Enter your Todo"></input>
                <button>Add</button>
            </form>
           
            {todos.map((el) => <div><Todo upDat = {el.isUpdated} stat={el.isDone} id={el.id} task ={el.task} />
              </div>)}
        </div>
    )
}
export default Todos