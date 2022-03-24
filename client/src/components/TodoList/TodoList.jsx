import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodoFromServer } from '../../redux/ac/todosAc'
import TodoItem from '../TodoItem/TodoItem'


export default function TodoList() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getAllTodoFromServer())
  },[])
  return (
      <>
    <div><ul className="list-group my-3">
        {todos.map((todo, index) => <TodoItem  key={todo.id} index={index} todo={todo}/>)}
    </ul></div>
    </>
  )
}
