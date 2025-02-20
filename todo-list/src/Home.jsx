import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'

function Home() {
    const [ todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => {
                console.log(result.data); // Should be an array
                if (Array.isArray(result.data)) {
                    setTodos(result.data);
                } else {
                    console.error("Data is not an array:", result.data);
                }
            })
            .catch(err => console.log("Axios error:", err))
    }, [])
    
  return (
    <div className='home'>
      <h2>
        ToDo-List
      </h2>
      <Create/>
      {
        todos?.length === 0 ? (
            <div><h2>No records</h2></div>
        ) : (
            Array.isArray(todos) && todos.map(todo => (
                <div key={todo._id}>
                    {todo.task}
                </div>
            ))
        )
        
      }
    </div>
  )
}

export default Home
