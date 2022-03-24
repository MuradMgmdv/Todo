import { useDispatch } from 'react-redux'
import {  changeTodoStatusFromServer,  deleteOneTodoFromServer } from '../../redux/ac/todosAc'
import styles from './styles.module.css'

const TodoItem = ({ todo, index }) => {

  const dispatch = useDispatch()
const changeStatus = () => {


  dispatch(changeTodoStatusFromServer(todo.id))

}



const deleteHandler = () => {
  dispatch(deleteOneTodoFromServer(todo.id))
  
}

  return (
       <li className="list-group-item   d-flex align-items-center justify-content-between mt-3" >
             
           <span className ={todo.status?styles.done:""} ><button type="button" onClick={changeStatus}  className={`btn btn-${todo.status?'success':'secondary'} mx-2`}></button>{index + 1}.&nbsp;{todo.text}</span>
            <div>
            <button onClick={changeStatus} type="button"  className={`btn btn-${todo.status?'secondary':'primary'} mx-1 fa fa-pencil`}>{todo.status?"OnDone":"Done"}</button> 
            <button type="button" onClick={deleteHandler} className="btn btn-danger mx-1 fa fa-trash-o me-2">Delete</button>       
            </div >
        </li >
    )
}

export default TodoItem
