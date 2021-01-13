import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('')
  const [list, setList] = useState([]) 
  
  const handleChange = event => {
    console.log('Change')
    setItem(event.target.value)
 
  }

  const handleSumbit = event => {
    event.preventDefault()
    console.log('Submit')
    list.push(item)
    setList(list)
    console.log(list)
  }
 
    return (
      <div className="App">
        <h1>To do List</h1>
        <form onSubmit={handleSumbit}>
          <input onChange={handleChange}></input>
          <button>Add</button>
        </form>
        <div id="to-do-list"></div>
      </div>
    );
  }
  


export default App;
