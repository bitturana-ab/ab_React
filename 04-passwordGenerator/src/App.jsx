import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  // const passwordGenerator=()=>{}
    // const passwordGenerator = useCallback(fn,[length,numberAllowed,charAllowed,setPassword])
    const passwordGenerator = useCallback(()=>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$^%&_{~`"

      for(let i = 1; i<=length ;i++){
        let char = Math.floor(Math.random() * str.length + 1)

        pass += str.charAt(char);
      }
      setPassword(pass);

    },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1>Password generator</h1>
      </div>
    </>
  )
}

export default App
