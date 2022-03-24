import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo, addNewTodoFromServer } from '../../redux/ac/todosAc';

function Header() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleChenge = (e) => {
    setInput(e.target.value)
    console.log(input);

  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(addNewTodoFromServer(input))


    setInput('')
  }


  return (
    <>
      <h1></h1>
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Add todo</label>
          <input onChange={(e) => handleChenge(e)} value={input} type="text" className="form-control" id="exampleInput!" />
        </div>
        <button type="submit" className="btn btn-outline-primary mb-5 w-25 mx-auto fa fa-plus">Submit</button>
      </form>
    </>

  )
}

export default Header
