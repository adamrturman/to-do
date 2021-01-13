import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('')
  const [list, setList] = useState([])
  const [completed, setCompleted] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [styling, setStyling] = useState('liStyle') 
  
  const addToDo = item => {
    const updatedList = [...list, item]
    setList(updatedList)
    console.log("updatedList", updatedList)
  }

  const handleChange = event => {
    console.log('Change')
    setItem(event.target.value)
 
  }

  const handleSumbit = event => {
    event.preventDefault()
    console.log('Submit')
    addToDo(item)
    console.log("list", list)
    setItem('')
  }

  const handleCompleted = event => {
    setCompleted(!completed)
    console.log('Completed', completed)
    setStyling('strike')
    console.log('styling', styling)
  }

  const handleDeleted= (index) => {
    console.log('Deleted')
    const processedToDos = [...list]
    processedToDos.splice(index, 1)
    setList(processedToDos)
    
  }

const liStyle = {
  fontWeight: 'bold'
}
  
const strike = {
  textDecoration: 'line-through'
}

 


  // const mappedList = list.map((todo) => 
  //   <li style={liStyle} key={todo}>
  //     {todo} 
  //     <button onClick={handleCompleted}>Mark Completed</button> 
  //     <button onClick={handleDeleted}>Delete</button>
  //   </li>
  // )

  const mappedList = list.map((todo, index) => 
  <li style={liStyle} key={todo}>
    {todo} 
    <button onClick={handleCompleted}>Mark Completed</button> 
    <button onClick={() => handleDeleted(index)}>Delete</button>
  </li>
)



    return (
      <div className="App">
        <h1>To do List</h1>
        <form onSubmit={handleSumbit}>
          <input type="text" value={item} onChange={handleChange}></input>
          <button>Add</button>
        </form>
        <div id="to-do-list"></div>
        {mappedList}
      </div>
    );
  }
  


export default App;
