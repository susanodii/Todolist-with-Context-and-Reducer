import {
  ADD_TODO,
  DELETE_TODO,
  FIND_TODO_BY_ID,
  LOGIN_USER,
  TOGGLE_TODO_COMPLETE,
  UPDATE_TODO,
} from './TodoTypes'

import React from 'react'
import TodoContext from './TodoContext'
import TodoReducer from './TodoReducer'
import { useReducer } from 'react'

const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    todo: {},
    isAuthenticated: false,
  }

  // console.log(initialState);
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  // pure functions
  const addTodo = (todoObj) => {
    dispatch({ type: ADD_TODO, payload: todoObj })
  }

  const toggleTodoComplete = (todoId) => {
    dispatch({ type: TOGGLE_TODO_COMPLETE, payload: todoId })
  }

  const login = () => {
    dispatch({ type: LOGIN_USER })
  }

  const deleteTodo = (todoId) => {
    dispatch({ type: DELETE_TODO, payload: todoId })
  }

  const updateTodo = (newtodoObj) => {
    dispatch({ type: UPDATE_TODO, payload: newtodoObj })
  }

  const findTodoById = (todoId) => {
    dispatch({ type: FIND_TODO_BY_ID, payload: todoId })
  }

   


  return (
    <TodoContext.Provider
      value={{
        authStatus: state.isAuthenticated,
        login,
        todos: state.todos,
        addTodo,
        updateTodo,
        findTodoById,
        deleteTodo,
      
        toggleTodoComplete,
        ...state,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoState
