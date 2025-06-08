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
    <>
    <div className='bg-gray-500 text-white p-4 text-3xl justify-center'>Github followers: {data.name}
    <img src={data.avatar_url} width={300} alt="Git picture" className='p-5 justify-center'/>
    <p className="p-3 bg-red-200 text-black mt-3 mb-4">Github data : {data.login}</p>
        < p className="p-3 bg-blue-300 text-black">Github Bio : {data.bio}</p></div>
    </>
  )
}

export default Github