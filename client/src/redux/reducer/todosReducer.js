import { ADD_NEW_TODO, CHANGE_TODO_STATUS, DELETE_ONE_TODO, GET_ALL_TODOS } from "../types/todosTypes"

const todosReducer = ( state = [], action) => {

switch (action.type) {

  case GET_ALL_TODOS:
    return action.payload

    case ADD_NEW_TODO:
    return [
      ...state,
      action.payload,
    ]
    
    case DELETE_ONE_TODO:
      return state.filter((el)=> el.id !== action.payload)


    case CHANGE_TODO_STATUS:

    return state.map((el)=> {
      if(el.id === action.payload) {
        return {
          ...el,
          status: !el.status
        }
      }
      return el
    })



 default:
   return state

}

}

export default todosReducer
