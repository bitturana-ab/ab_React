import { useState } from 'react'
import './App.css'

function App() {

  let counter = 0
  const addValue =()=>{
    console.log("value added",Math.random());
    counter++;
  }
  
  return (
    <>
    <h1>A new vite project</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Increase value</button>
    <button>Decrease value</button>
    </>
  )
}

export default App
