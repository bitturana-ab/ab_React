import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode,setTheme] = useState("light");
  const lightTheme=()=>{
    setTheme("light");
  }
  const darkTheme=()=>{
    setTheme("dark");
  }
  // actual change in theme 
  useEffect(()=>{
    const htmlPage = document.querySelector('html');
    // first remove all mode we don't know what present there
    htmlPage.classList.remove("light","dark");
    htmlPage.classList.add(themeMode);
    
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
            <div className="flex flex-wrap min-h-screen dark:bg-gray-800 dark:border-gray-700 items-center ">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theme buttom */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
