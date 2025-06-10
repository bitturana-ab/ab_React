import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/bitturana-ab')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    },[])
  return (
    <div className='p-3'>
    <div className='bg-gray-500 text-white rounded-lg p-4 pb-3 text-3xl justify-center'>
      <p className='pb-3 text-center '>Github Name: {data.name}</p>
    <img src={data.avatar_url} width={300} alt="Git picture" className='rounded-lg justify-center'/>
    <p className="p-3 bg-red-200 rounded-lg text-black mt-3 mb-4">Github data : {data.login}</p>
        < p className="p-3 bg-blue-300 text-black rounded-lg">Github Bio :- {data.bio}</p></div>
    </div>
  )
}

export default Github