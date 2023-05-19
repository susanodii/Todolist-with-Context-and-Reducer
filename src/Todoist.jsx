import './TodoistContext.css'

import React, { useContext, useState } from 'react'

import TodoContext from './helper/Context/Todo-context/TodoContext'
import { v4 as uuidv4 } from 'uuid'

export const Todoist = () => {
  const [title, setTitle] = useState('')

  const { addTodo, todos, toggleTodoComplete,  isAuthenticated, login } = useContext(TodoContext)

  // console.log(todos)
  console.log(uuidv4())

  const handleSubmit = () => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      isCompleted: false,
    }
    addTodo(newTodo)
    setTitle('')
  }

  // const handleToggleComplete = (id) => {
  //   console.log(id)
  //   toggleTodoComplete(id)
  // }

  return (
    <div>
      {isAuthenticated ?
     ( <>
      <section>
        <input
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="add-btn" onClick={handleSubmit}>
          {' '}
          Add Todo
        </button>
      </section>

      <section>
        <div className="list-container">
         
          <ul>
            {todos.map((todo) => {
              return (
                <li
                className={todo.isCompleted ? 'completed' : null}
                key={todo.id}>
                  {todo.title}
                  {/* view button */}
                  <div className="todo-action-buttons">
                    <button className="action-btn">👁</button>
                    {/* toggle comple button */}
                    <button
                      className="action-btn"
                      onClick={() => toggleTodoComplete(todo.id)}
                    >
                      {todo. isCompleted? '❌' : '✅' }
                    </button>
                    {/* edit button */}
                    <button className="action-btn">✍</button>
                    {/* delete button */}
                    <button className="action-btn">🗑</button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section> 
      </>)
      : (
      <>
      
      <h3 className='auth'> Please log in</h3>
      <button onClick={() => login()}> Login</button>
      </>
     )
      }
    </div>
  )
}

export default Todoist
