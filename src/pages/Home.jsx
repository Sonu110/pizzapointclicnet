import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosections'
import Menusrollbar from '../components/Menusrollbar'
import { categories, restorent } from '../utils/data'
import Catelock from '../components/Catelock'
import Footer from '../components/Footer'
import Deliver from '../components/Deliver'
import { Menu } from '../utils/Products'

function Home() {
  return (
    <div>
     
      <Herosection></Herosection>
     <Menusrollbar  users={Menu}></Menusrollbar>
     <Catelock></Catelock>
  
    </div>
  )
}

export default Home