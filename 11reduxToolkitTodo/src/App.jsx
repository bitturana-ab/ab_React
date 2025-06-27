import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <h1 className='bg-gray-500 p-4 mt-2 w-full mb-3 rounded-lg text-3xl'>React redux-toolkit by ab</h1>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
