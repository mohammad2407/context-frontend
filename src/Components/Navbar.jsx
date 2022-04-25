import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div >
        <Link to = '/one' style={{margin: "10px"}}>Page 1</Link>
        <Link to = '/two' style={{margin: "10px"}}>Page 2</Link>
        <Link to = '/users' style={{margin: "10px"}}>Users</Link>

    </div>
  )
}