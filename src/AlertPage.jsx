import './TodoistContext.css'

import React, {useContext} from 'react'

import AlertContext from './helper/Context/Alert-context/AlertContext'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'

const AlertPage = () => {
    const {alert} = useContext(AlertContext)
    return (
        alert !== null &&(
            
            <div className={`alert ${alert.alertType === 'error' && `error-alert`} ${alert.alertType === 'success' && `success-alert`}`}>

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