import { useState,useCallback,useEffect,useRef } from 'react'
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
      if(charAllowed) str += "!@#$^%&_{~`}][-"

      for(let i = 1; i<=length ;i++){
        let charPosition = Math.floor(Math.random() * str.length + 1)

        pass += str.charAt(charPosition);
      }
      setPassword(pass);

    },[length,numberAllowed,charAllowed,setPassword])

    // useRef hook for password reference
    const passwordRef = useRef(null)
    const copyTOclipboard =()=>{
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password)
    }

    useEffect(()=>{
      passwordGenerator();
    },[length,numberAllowed,charAllowed])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-7 py-1 mt-2 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-2 mt-2'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyTOclipboard}
          className='outline-none bg-blue-600 text-white px-3 py-1 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6} 
            max={100} 
            value={length} className='cursor-pointer' 
            onChange={(e)=>{setLength(e.target.value)}} 
            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 px-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            onChange={()=>{setNumberAllowed((prev)=>!prev)}}
            />
            <label >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 px-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange={()=>{setCharAllowed((prev) =>!prev)}}
            />
            <label >Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
