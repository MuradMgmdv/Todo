import { ADD_NEW_TODO, CHANGE_TODO_STATUS, DELETE_ONE_TODO, GET_ALL_TODOS } from "../types/todosTypes";
import axios from "axios"

export const getAllTodos = (todo) =>({
 type: GET_ALL_TODOS,
 payload:todo
})

export const getAllTodoFromServer = () => async(dispatch) => {
 const response = await axios("http://localhost:3001/api/v1/todos")
 dispatch(getAllTodos(response.data))
}


export const addNewTodo = (todo) =>({
  type: ADD_NEW_TODO,
  payload: todo
 })



 export const addNewTodoFromServer = (text) => async(dispatch) => {

  const newTodo = {
    // id: Date.now(),
    text,
    status: false,
  }

   const response = await axios.post("http://localhost:3001/api/v1/todos", newTodo)
   dispatch(addNewTodo(response.data))
 }

 export const deleteOneTodo = (id) =>({
  type: DELETE_ONE_TODO,
  payload: id,
 })

 export const deleteOneTodoFromServer = (id) => async(dispatch) => {
   await axios.delete(`http://localhost:3001/api/v1/todos/${id}`)
   dispatch(deleteOneTodo(id))
 }

 export const changeTodoStatus = (id) =>({
  type: CHANGE_TODO_STATUS,
  payload: id,
 })

 export const changeTodoStatusFromServer = (id) => async(dispatch) => {
  await axios.patch(`http://localhost:3001/api/v1/todos/${id}`)
  dispatch(changeTodoStatus(id))
}
