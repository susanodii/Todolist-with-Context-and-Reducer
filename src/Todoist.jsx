import './TodoistContext.css'

import React, { useContext, useState } from 'react'

import TodoContext from './helper/Context/Todo-context/TodoContext'
import { v4 as uuidv4 } from 'uuid'

// import { useState } from 'react'
//  import React from 'react'

export const Todoist = () => {
 return(
  <div >
    <section>
      <input placeholder='Enter todo title'/>
      <button className='add-btn'> Add Todo</button>
    </section>

    <section>
      
      <div className='list-container'>
        <ul>

<li >
Buy Bread
{/* view button */}
<div className='todo-action-buttons'>
<button className='action-btn'>👁</button>
  {/* toggle comple button */}
<button className='action-btn'>✅</button>
{/* edit button */}
<button className='action-btn'>✍</button>
{/* delete button */}
<button className='action-btn'>🗑</button>
</div>
</li>
</ul>

      </div>
    
    </section>
  </div>
 )
}

export default Todoist
