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
import { Menu } from './utils/Products'
import Menuform from './Dashbord/Pages/Menus/Menufrom'

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
    
    <Route path="/cart" element={<Protexted user={userdata}> </Protexted>}>
    <Route index element={<CartTwo></CartTwo>}/>
    </Route>
    
    </Route>


    <Route path='/dashboard' element={ <Protexted user={userdata}>  <DashbordHome/></Protexted>}>
    <Route index element={<Dashbordcardhomepage/>}></Route>
    
    <Route path='menu' element={<Menulist/>} />
    <Route path='newmenu' element={<Menuform/>} />
    <Route path='order' element={<Orderslists></Orderslists>} />
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