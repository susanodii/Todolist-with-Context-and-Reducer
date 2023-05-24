import './TodoistContext.css'

import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'
import TodoContext from './helper/Context/Todo-context/TodoContext'
import { useActionData } from 'react-router'
import { v4 as uuidv4 } from 'uuid'

export const Todoist = () => {
  const [title, setTitle] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState({})

  const { addTodo, todos, toggleTodoComplete,  isAuthenticated, login, deleteTodo,updateTodo } = useContext(TodoContext)

  // console.log(todos)
  console.log(uuidv4())

  const handleAddTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      isCompleted: false,
    }
    addTodo(newTodo)
    setTitle('')
  }

  const handleEditMode = (todoObject)=>{
    setIsEditMode(true)
    setTodoToEdit(todoObject)
    setTitle(todoObject.title)
    
  }

  const handleUpdateTodo = ()=>{
    console.log(title)
    const newTodoObject = { id: todoToEdit.id, title };
    updateTodo(newTodoObject);
    setIsEditMode(false);
    setTitle("");
  }
  // const handleToggleComplete = (id) => {
  //   console.log(id)
  //   toggleTodoComplete(id)
  // }

  return (
    <div>
      {isAuthenticated ?
     ( <>
     {isEditMode? (
      <section>
      <input
        placeholder="Update todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="edit-btn" onClick={handleUpdateTodo} >
        {' '}
        Update Todo
      </button>
    </section>

 ):<section>
 <input
   placeholder="Enter todo title"
   value={title}
   onChange={(e) => setTitle(e.target.value)}
 />
 
 <button className="add-btn" onClick={handleAddTodo}>
   {' '}
   Add Todo
 </button>



 
</section>

     }
      


      <section>
        <div className="list-container">
         
          <ul>
            {todos.map((todo) => {

              const {isCompleted, id, title, } = todo
            //  const {isCompleted, id, title} = todo
             return (
                <li
                className={isCompleted ? 'completed' : null}
                key={id}>
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
                      {isCompleted? '❌' : '✅' }
                    </button>
                    {/* edit button */}
                    <button className="action-btn" onClick={()=>handleEditMode(todo)}>✍</button>
                    {/* delete button */}
                    <button className="action-btn" onClick={() => deleteTodo(id)}>🗑</button>
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
