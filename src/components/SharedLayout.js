import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const SharedLayout = ({windowWidth, isMediumScreen, isSmallScreen,onChange, checked, theme}) => {
  return (
    <>
      <Navbar windowWidth={windowWidth} isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen} onChange={onChange} checked={checked}/>
      <Outlet />
    </>
  )
}

export default SharedLayout