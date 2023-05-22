import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Friends from '../components/Friends'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar></Navbar>
      <Search></Search>
      <Friends></Friends>
    </div>
  )
}

export default Sidebar