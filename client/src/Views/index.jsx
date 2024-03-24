import React from 'react'
import Nav from './Navbar'
import MainDash from "./Dashboard"
const MainComp = () => {
  return (
    <div className='grid grid-cols-12'>
    <div className='col-span-2'>
      <Nav/>
    </div>
    <div className='col-span-10'>
     <MainDash/>
    </div>
  </div>
  
  )
}

export default MainComp