import { ADD_TODO, LOGIN_USER, TOGGLE_TODO_COMPLETE } from './TodoTypes'

const TodoReducer = (state, action) => {
  const { todos } = state
  const { type, payload } = action

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload], //add todo logic here
      }

    case TOGGLE_TODO_COMPLETE:
      return {
        ...state,
        todos: todos.map((todo) => {
          console.log(todo.id, payload)
          if (todo.id === payload) {
            const updatedTodo = {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
            return updatedTodo
          } else {
            return todo
          }
        }),
      }

    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated :true
      }

    default:
      return state
  }
}

export default TodoReducer
