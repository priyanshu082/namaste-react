import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './classBasedComponent/ProfileClass'

const Home = () => {
  return (
    <div>
      Home
      <Profile name={"priyanshu"}/>
      <Outlet/>
    </div>
  )
}

export default Home