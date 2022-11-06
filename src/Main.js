import React from 'react'
import MyRouters from './MyRouters'
import Navbar from './Navbar'

export default function Main() {
  return (
    <div className='container'>
        <Navbar/>
        <MyRouters/>
    </div>
  )
}
