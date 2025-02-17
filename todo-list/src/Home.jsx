import React, { useState } from 'react'
import Create from './Create'

function Home() {
    const [ todos, setTodos] = useState([])
  return (
    <div>
      <h2>
        ToDo-List
      </h2>
      <Create/>
      {
        todos.map(todo=>(
            <div>
                {todo}
            </div>
        ))
      }
    </div>
  )
}

export default Home
