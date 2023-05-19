import { ADD_TODO, LOGIN_USER, TOGGLE_TODO_COMPLETE } from './TodoTypes'

import React from 'react'
import TodoContext from './TodoContext'
import TodoReducer from './TodoReducer'
import { useReducer } from 'react'

const TodoState = ({ children }) => {
  const initialState = {
    todos:[],
    isAuthenticated : false
     }

  // console.log(initialState);
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  // pure functions
  const addTodo = (todoObj) => {
    dispatch({ type: ADD_TODO, payload:todoObj })
  }

  const toggleTodoComplete= (todoId) =>{
    dispatch({type: TOGGLE_TODO_COMPLETE, payload:todoId})
  }
  
  const login =() =>{
    dispatch({type:LOGIN_USER})
  }

  return (
    <TodoContext.Provider
      value={{
        authStatus: state.isAuthenticated,
        login,
        todos: state.todos,
        addTodo,
         toggleTodoComplete,
        ...state,
        
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoState
