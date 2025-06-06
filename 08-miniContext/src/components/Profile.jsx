import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext);
  if(!user) return <h2 className="bg-gray-50 dark:bg-gray-900 p-4 m-3 text-2xl rounded-xl">Please login</h2>

  return <h2 className="bg-gray-50 dark:bg-gray-900 p-4 m-3 text-2xl rounded-xl">Welcome {user.username}</h2>
}

export default Profile