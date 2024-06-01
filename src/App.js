import React, { useContext } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import Menuhomepage from './pages/Menuhomepage'
import Layout from './pages/Layout'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Contact from './pages/Contact'
import About from './pages/About'
import DashbordHome from './Dashbord/Pages/Home/DashbordHome'
import Dashbordcardhomepage from './Dashbord/Pages/Home/Dashbordcardhomepage'
import Menulist from './Dashbord/Pages/Menus/Menulist'
import Orderslists from './Dashbord/Pages/Orders/Orderslist'
import Userlist from './Dashbord/Pages/Users/Userlist'
import { CartTwo } from './pages/Cart/Cart'
import Protexted from './Protected/Protexted'
import { MyContext } from './context/context'
import Menuform from './Dashbord/Pages/Menus/Menufrom'
import Menuupdateform from './Dashbord/Pages/Menus/Menuupdateform'
import Odertracker from './pages/Odertracker'
import Odertable from './pages/Odertable'
import Oderdetails from './Dashbord/Pages/Orders/Oderdetails'
import Notification from './pages/Notifaction'

function App() {

  const {userdata} = useContext(MyContext)

  console.log(userdata);

  const  router  =  createBrowserRouter(createRoutesFromElements(

    <>
    <Route  path='/' element={<Layout></Layout>}>

        <Route index element={<Home />} />
    <Route path="/menu" element={<Menuhomepage/>} />
        <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
        
    <Route  path="/cart" element={<CartTwo></CartTwo>}/>
    <Route  path="/odertrack/:id" element={<Odertracker></Odertracker>}/>
    <Route  path="/odertable" element={<Odertable/>}/>
    <Route  path="/notifaction/:id" element={<Notification></Notification>}/>
    
    
    
     
    </Route>


    <Route path='/dashboard' element={ <Protexted user={userdata.rolls}>  <DashbordHome/></Protexted>}>
    <Route index element={<Dashbordcardhomepage/>}></Route>
    
    <Route path='menu' element={<Menulist/>} />
    <Route path='newmenu' element={<Menuform/>} />
    <Route path='editmenu/:id' element={<Menuupdateform/>} />

    <Route path='order' element={<Orderslists></Orderslists>} />
    
    <Route  path="odertrack/:id" element={<Oderdetails></Oderdetails>}/>
        <Route path='users' element={<Userlist />} />
  



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