import { REMOVE_ALERT, SET_ALERT } from './AlertTypes'

import AlertContext from './AlertContext'
import {AlertReducer} from './AlertReducer'
import React from 'react'
import { useReducer } from 'react'

const AlertState = ({children} ) => {
    const initialState = null

    const [state, dispatch] = useReducer(AlertReducer, initialState)

  
     const setAlert = (msg, alertType) => {
        dispatch({
      type: SET_ALERT,
      payload: { msg, alertType },
    })

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000)
  }
  
    return (
    <AlertContext.Provider
    value={{
        alert: state, 
        setAlert,
        ...state
    }}
    >

{children}
    </AlertContext.Provider>
  )
}

export default AlertState