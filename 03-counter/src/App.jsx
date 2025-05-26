import { useState } from 'react';
import './App.css'

function App() {

  let [counter,updateCounter] = useState(0);

  // let counter = 0
  const addValue =()=>{
    if(counter == 28) updateCounter(28);
    else{
      counter++;
      console.log(counter)
      updateCounter(counter);
    }
  }
  const lessValue=()=>{
    if(counter == 0) updateCounter(0);
    else updateCounter(counter--);
  }
  
  return (
    <>
    <h1>A new vite project</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Increase value</button>
    <button onClick={lessValue}>Decrease value</button>
    </>
  )
}

export default App
