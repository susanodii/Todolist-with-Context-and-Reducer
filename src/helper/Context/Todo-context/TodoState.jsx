import { ADD_TODO, DELETE_TODO, LOGIN_USER, TOGGLE_TODO_COMPLETE } from './TodoTypes'

import React from 'react'
import TodoContext from './TodoContext'
import TodoReducer from './TodoReducer'
import { useReducer } from 'react'

const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    
    isAuthenticated: false,

  }

  // console.log(initialState);
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  
  const addTodo = (todoObj) => {
    dispatch({ type: ADD_TODO, payload: todoObj })
  }

  

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        
        
        
        
        
        ...state,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoState
