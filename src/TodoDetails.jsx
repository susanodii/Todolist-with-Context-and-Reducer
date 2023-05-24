// import React, { useContext, useEffect, useState } from 'react'

// import TodoContext from './helper/Context/Todo-context/TodoContext'
// import TodoReducer from './helper/Context/Todo-context/TodoReducer'
// import { useParams } from 'react-router-dom'

// const TodoDetails = () => {
//  const {todo_id} = useParams()
//  const { findTodoById, todo} = useContext(TodoContext)
//  const [todoObj, setTodoObj] = useState({})

// useEffect(() =>{
//     findTodoById(todo_id)
//     setTodoObj(...todo)
// }, [])
 
//  return (
// //    
// <div>
// <li>id: {todo_id}</li>
// <li>Title: {todoObj?.title}</li>
// <li>Status:{todoObj?.isCompleted ? "Done" : "Pending"}</li>
// </div>
//   )
// }

// export default TodoDetails