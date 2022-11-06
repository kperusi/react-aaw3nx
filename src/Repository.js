import React from 'react'
import {Outlet,NavLink} from 'react-router-dom'

export default function Repository() {
  return (
    <div>
      repository
      {/* <NavLink to='repoList'>Repository List</NavLink> */}
    <Outlet/>
    </div>
  )
}
