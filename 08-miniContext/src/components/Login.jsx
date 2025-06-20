import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("")
    const {setUser} = useContext(UserContext);

    const handleLogin = (e)=>{
       e.preventDefault();
       setUser({username,password})
    }
  return (
    <section className="bg-gray-50 dark:bg-gray-900 rounded-xl p-7">
  <div className="flex flex-col items-center justify-center px-2 py-2 mx-auto lg:py-0">
      <a href="#" class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
          
              
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6  md:space-y-6 sm:p-8">
              <h1 className="text-md font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login Here
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">username</label>
                      <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 
                  <button type="submit" onClick={handleLogin} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    // <div>
    //     <h2>Login</h2>
    //     <input className='' type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' />
    //     <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
    //     <button onClick={handleLogin}>Login</button>
    // </div>
  )
}

export default Login