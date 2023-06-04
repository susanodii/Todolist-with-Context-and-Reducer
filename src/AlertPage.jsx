import React, {useContext} from 'react'
import './TodoistContext.css'
import AlertContext from './AlertContext'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'

const AlertPage = () => {
    const {alert} = useContext(AlertContext)
    return (
        alert !== null &&(
            <div className=''>
                {alert.type === 'error' &&(
                    <BsFillExclamationTriangleFill style={{color:'red'}}/>
                )}
                <p className=''>
                    {alert.msg}
                    
                </p>
            </div>
        )
   
    

    
    
  )
}

export default AlertPage