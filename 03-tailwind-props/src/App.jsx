import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myArr = [3,54,6];
  let user = {
    name:"bittu",
    age:19
  }
  return (
    <>
      <h1 className='bg-green-400 text-black-400 p-4 rounded-xl mask-b-from-gray-900'>Tailwind Test</h1>
      <Card username="ab" m = {[4,7]} user= {user}/>
      <Card  m = {[4,7]} user= {user}/>
      

    </>
  )
}

export default App
