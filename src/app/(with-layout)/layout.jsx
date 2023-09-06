import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const WithLayout = ({children}) => {
  return (
    <>
    <Navbar/>
      {children}
    </>
  )
}

export default WithLayout