import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavMovie } from '../../components'

const SharedLayout = () => {
  return (
    <div className='bg-dark'>

    <NavMovie/>
    <Outlet/>
    </div>
  )
}

export default SharedLayout