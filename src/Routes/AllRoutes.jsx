import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Creation from '../Components/Creation'
import Home from '../Components/Home'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={'/adduser'} element={<Creation/>}/>
      <Route path={'/'} element={<Home/>}/>
    </Routes>
  )
}

export default AllRoutes