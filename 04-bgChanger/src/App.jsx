import React from "react"
import { useState } from "react"

function App() {
  let [color,setColor] = useState("olive")
  setColor=()=>{
    
  }
  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outile-none px-4 py-1 rounded-full "
          style={{backgroundColor:"red"}}
          >Red</button>
          <button className="outile-none px-4 py-1 rounded-full "
          style={{backgroundColor:"blue",color:"yellow"}}
          >Blue</button>
          <button className="outile-none px-4 py-1 rounded-full "
          style={{backgroundColor:"green",color:"white"}}
          >Green</button>
          <button className="outile-none px-4 py-1 rounded-full "
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button className="outile-none px-4 py-1 rounded-full "
          style={{backgroundColor:"pink"}}
          >Pink</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
