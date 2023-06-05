import './TodoistContext.css'

import React, { useContext, useState } from 'react'

import AlertContext from './helper/Context/Alert-context/AlertContext'
import AlertPage from './AlertPage'
import TodoContext from './helper/Context/Todo-context/TodoContext'
import { v4 as uuidv4 } from 'uuid'

export const Todoist = () => {
  const [title, setTitle] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState({})
  // const [inputValue, setInputValue] = useState('');
  const {
    addTodo,
    todos,
    toggleTodoComplete,
    isAuthenticated,
    login,
    deleteTodo,
    updateTodo,
  } = useContext(TodoContext)
  const { setAlert } = useContext(AlertContext)

  // console.log(todos)
  console.log(uuidv4())

  const handleAddTodo = (e) => {
    e.preventDefault()
    
    const newTodo = {
      id: uuidv4(),
      title: title,
      isCompleted: false,
    }
    if (title === ""){
      setAlert('Please enter todo title', 'error' )
    }
    else{
      addTodo(newTodo)
      setAlert(' Added successfully', 'success')
    setTitle('')
    }
    
  }

  // FUNCTION TO HANDLE SUBMIT
  const handleEditMode = (todoObject) => {
    setIsEditMode(true)
    setTodoToEdit(todoObject)
    setTitle(todoObject.title)
  }
  // function to handle  update todo

  const handleUpdateTodo = (e) => {
    // console.log(title)
    e.preventDefault()
    if (title === ""){
      setAlert('Please enter updated', 'error' )
    }
    else{
    //   addTodo(newTodo)
    //   setAlert(' Added successfully', 'success')
    // setTitle('')
    const newTodoObject = { id: todoToEdit.id, title }
    updateTodo(newTodoObject)
    setIsEditMode(false)
    setAlert(' Updated successfully', 'success')
    setTitle('')
    }
   
  }
  
  

  return (
    <div>
      {isAuthenticated ? (
        <>
          {isEditMode ? (
            <form onSubmit={handleUpdateTodo}>
              <input
                placeholder="Update todo title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button className="edit-btn" >
                {' '}
                Update Todo
              </button>
            </form>
          ) : (
            <form onSubmit={handleAddTodo}>
              <input
                placeholder="Enter todo title"
                value={title}
                 onChange={(e) => setTitle(e.target.value)}
              />

              <button className="add-btn" onClick={handleAddTodo}>
                {' '}
                Add Todo
              </button>
            </form>
          )}

          <section>
            <div className="list-container">
              {/* brought in the alert page to handle alert */}
              {alert && <AlertPage/>}
              <ul>
                {todos.map((todo) => {
                  const { isCompleted, id, title } = todo
                  //  const {isCompleted, id, title} = todo
                  return (
                    <li className={isCompleted ? 'completed' : null} key={id}>
                      {title}
                      {/* view button */}
                      <div className="todo-action-buttons">
                        {/* <Link to={`${id}`} >
                    
                    <button className="action-btn">👁</button>
                    </Link > */}
                        {/* toggle comple classNamebutton */}
                        <button
                          className="action-btn"
                          onClick={() => toggleTodoComplete(id)}
                        >
                          {isCompleted ? '❌' : '✅'}
                        </button>
                        {/* edit button */}
                        <button
                          className="action-btn"
                          onClick={() => handleEditMode(todo)}
                        >
                          ✍
                        </button>
                        {/* delete button */}
                        <button
                          className="action-btn"
                          onClick={() => deleteTodo(id)}
                        >
                          🗑
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        </>
      ) : (
        <>
          <h3 className="auth"> Please log in</h3>
          <button onClick={() => login()} className="login-button">
            {' '}
            Login
          </button>
        </>
      )}
    </div>
  )
}

export default Todoist
