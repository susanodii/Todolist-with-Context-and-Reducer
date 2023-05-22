import App from './App'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoState from './helper/Context/Todo-context/TodoState'
import reportWebVitals from './reportWebVitals'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
     <TodoState> 
      <BrowserRouter>
      
      <App />
      </BrowserRouter>
     </TodoState> 
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
