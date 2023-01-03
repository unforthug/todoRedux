import React from "react";
import './todo.css'
import {changeStat, deleteTodo, doneState, upDatStat,editStat} from '../Store/TodoSlice'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Todo({task,id,stat,upDat}){
    const dispatch = useDispatch();
    const {todos} = useSelector((state)=>state.todo)

    const handleDelete =(e)=>{
        dispatch(deleteTodo(id))
    }

    const handleState =(e)=>{
     dispatch(doneState(id));
     e.preventDefault()
    }

    const handleUpdat =(e)=>{
    dispatch(upDatStat(id));
    e.preventDefault()
    }
    const handleChange =(e)=>{
        e.preventDefault()
        dispatch(editStat(id))
        dispatch(changeStat(e.target.upD.value))
        dispatch(upDatStat(id));
    }

    return(
        <div>
            <p style={{color : stat ? "red" : "green"}}>{task}</p>
            {upDat && <form onSubmit={handleChange}>
                <input className="in" name="upD"></input>
                <button>change</button>
                </form> }
             <button onClick={handleUpdat}>update</button>
             <button onClick={handleDelete}>Delete</button>
             <button onClick={handleState}>{stat ? "Done" : "Not Done"}</button>
        </div>
    )
}

export default Todo