import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : "todo" , 
    initialState :{todos : [{ id : "1", task:"Learn Javascript" , isDone : false , isUpdated : false ,isEdited : false},{ id :"2" , task : "Learn Redux", isDone : false , isUpdated : false, isEdited : false}]},
    reducers:{
        add : (state,action) =>{
            state.todos.push({id : Math.random(), task : action.payload ,isDone : false , isUpdated : false ,isEdited : false})
        },
        deleteTodo : (state,action)=>{
           
        state.todos = state.todos.filter((el)=>el.id!==action.payload)
        },
        doneState : (state,action)=>{
           
         state.todos.map((el)=>el.id===action.payload ? el.isDone ? el.isDone = false : el.isDone = true : el)
        },
        upDatStat : (state,action)=>{
            state.todos.map((el)=>el.id===action.payload ? el.isUpdated ? el.isUpdated = false : el.isUpdated = true : el)
        },
        changeStat : (state,action)=>{
            state.todos.map((el)=>el.isEdited ? el.task = action.payload  : el)
        },
        editStat :(state,action)=> {
            state.todos.map((el)=>el.id===action.payload ? el.isEdited ? el.isEdited = false : el.isEdited = true : el)
        },
    },
})

export const {add,deleteTodo,doneState,upDatStat,changeStat,editStat} = TodoSlice.actions;
 
export default TodoSlice.reducer