import React from 'react'

const Card = (props) => {
    // console.log("props",props);
    // console.log("username: ",props.username);
  return (
  <>
    <div>Username: {props.username}</div>
    <div>User: {props.user.name}</div>
  </>
  )
}

export default Card