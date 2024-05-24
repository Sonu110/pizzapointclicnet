import React from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import Menuhomepage from './pages/Menuhomepage'
import Layout from './pages/Layout'

function App() {

  const  router  =  createBrowserRouter(createRoutesFromElements(

    <>
    <Route  path='/' element={<Layout></Layout>}>

    <Route index element={<Home />} />
    <Route path="/menu" element={<Menuhomepage/>} />
    </Route>
    
    </>


  ))




  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App